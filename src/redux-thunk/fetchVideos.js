import {
  setNextPageTokenAction,
  setStopLoadingAction,
  addVideosAction,
  setLoadingAction,
} from "@store/videosReducer";

const fetchVideosInfo = async (ids) => {
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${ids.join(
      ","
    )}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );
  const json = await response.json();
  return json.items.map((item) => {
    return {
      id: item.id,
      views: item.statistics.viewCount,
      likes: item.statistics.likeCount,
      comments: item.statistics.commentCount,
    };
  });
};

export const fetchVideos = (text, nextPageToken) => {
  return async function (dispatch) {
    dispatch(setLoadingAction());
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=100&pageToken=${nextPageToken}&q=${text}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    );
    const json = await response.json();
    const videos = json.items.map((item) => {
      return {
        id: item.id.videoId,
        img: item.snippet.thumbnails.medium.url,
        channelTitle: item.snippet.channelTitle,
        title: item.snippet.title,
        date: item.snippet.publishTime.slice(0, 10),
      };
    });
    const additionalData = await fetchVideosInfo(
      videos.map((video) => video.id)
    );
    const newVideos = additionalData.map((item) => {
      const index = videos.findIndex((el) => el.id === item.id);
      return { ...videos[index], ...item };
    });
    dispatch(addVideosAction(newVideos));
    dispatch(setNextPageTokenAction(json.nextPageToken));
    dispatch(setStopLoadingAction());
  };
};

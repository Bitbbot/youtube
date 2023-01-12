export const getSwitches = ({ videos, videosPerPage, currentId }) => {
  console.log(videos, videosPerPage, currentId);
  const pages = Math.ceil(videos / videosPerPage);
  // console.log(pages);
  let switchesArray = [];
  for (let i = 0; i < pages; i++) {
    switchesArray.push({ isOn: false });
  }
  console.log(switchesArray);
  if (currentId / videosPerPage + 1 === 1) {
    return [
      { isOn: true, switchesOn: currentId },
      { isOn: false, switchesOn: currentId + videosPerPage },
      { isOn: false, switchesOn: currentId + videosPerPage * 2 },
      { isOn: false, switchesOn: currentId + videosPerPage * 3 },
      { isOn: false, switchesOn: currentId + videosPerPage * 4 },
    ];
  } else if (currentId / videosPerPage + 1 === 2) {
    return [
      { isOn: false, switchesOn: currentId - videosPerPage },
      { isOn: true, switchesOn: currentId },
      { isOn: false, switchesOn: currentId + videosPerPage },
      { isOn: false, switchesOn: currentId + videosPerPage * 2 },
      { isOn: false, switchesOn: currentId + videosPerPage * 3 },
    ];
  } else if (currentId / videosPerPage + 1 === pages - 1) {
    return [
      { isOn: false, switchesOn: currentId - videosPerPage * 3 },
      { isOn: false, switchesOn: currentId - videosPerPage * 2 },
      { isOn: false, switchesOn: currentId - videosPerPage },
      { isOn: true, switchesOn: currentId },
      { isOn: false, switchesOn: currentId + videosPerPage },
    ];
  } else if (currentId / videosPerPage + 1 === pages) {
    return [
      { isOn: false, switchesOn: currentId - videosPerPage * 4 },
      { isOn: false, switchesOn: currentId - videosPerPage * 3 },
      { isOn: false, switchesOn: currentId - videosPerPage * 2 },
      { isOn: false, switchesOn: currentId - videosPerPage },
      { isOn: true, switchesOn: currentId },
    ];
  } else {
    return [
      { isOn: false, switchesOn: currentId - videosPerPage * 2 },
      { isOn: false, switchesOn: currentId - videosPerPage },
      { isOn: true, switchesOn: currentId },
      { isOn: false, switchesOn: currentId + videosPerPage },
      { isOn: false, switchesOn: currentId + videosPerPage * 2 },
    ];
  }
};

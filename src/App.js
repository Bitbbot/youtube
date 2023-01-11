import { useDispatch, useSelector } from "react-redux";
import { setVideosPerPageAction } from "./store/videosReducer";

function App() {
  const dispatch = useDispatch();
  const videosPerPage = useSelector((state) => state.videosPerPage);
  const setVideosPerPage = (number) => {
    dispatch(setVideosPerPageAction(8));
  };
  return (
    <div className="App">
      <span>{videosPerPage}</span>
      <div onClick={() => setVideosPerPage(5)}>plus</div>
    </div>
  );
}

export default App;

import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const videosPerPage = useSelector((state) => state.videosPerPage);
  return <div className="App">{videosPerPage}</div>;
}

export default App;

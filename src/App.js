import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import "./App.css";

function App() {
  return (
    <div
      className="App"
      onTouchMove={() => {
        console.log("move app");
      }}
      onTouchStart={() => {
        console.log("start app");
      }}
      onTouchEnd={() => console.log("end")}
    >
      <Header />
      <HomePage />
    </div>
  );
}

export default App;

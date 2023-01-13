import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import "./App.css";
import Events from "./components/Events/Events";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Events />
    </div>
  );
}

export default App;

import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home style={{ marginTop: "6px" }} />
    </div>
  );
}

export default App;

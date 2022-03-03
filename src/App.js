import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import JokeListing from "./containers/JokeListing";
import JokeDetails from "./containers/JokeDetails";

function App() {
  return (
    <div className="main">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<JokeListing />} exact></Route>
          <Route path="/joke/:jokeId" element={<JokeDetails />} exact></Route>
          <Route>404 not found!!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

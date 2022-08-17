import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import MyNum from "./components/MyNum";
import MyWord from "./components/MyWord";
import ColorfulWord from "./components/ColorfulWord";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:num" element={<MyNum />} />
          <Route path="/:word" element={<MyWord />} />
          <Route path="/:word/:color/:bgcolor" element={<ColorfulWord />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Adventure from "./pages/Adventure";
import Store from "./pages/Store";
import Histoire from "/src/pages/Histoire"
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adventure" element={<Adventure />} />
        <Route path="/store" element={<Store />} />
        <Route path="/histoire" element={<Histoire />} />
      </Routes>
    </div>
  )
}

export default App

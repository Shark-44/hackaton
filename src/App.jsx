/* eslint-disable no-unused-vars */

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Adventure from "./pages/Adventure";
import Store from "./pages/Store";
import NavBar from "./components/NavBar";

import CardHome from "./components/CardHome";


function App() {
  return (
    <div className="App">
      <NavBar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adventure" element={<Adventure />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </div>
  )
}

export default App

/* eslint-disable react/jsx-no-undef */
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
 

  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adventure" element={<Adventure />} />
        <Route path="/store" element={<Store />} />
      </Routes>

  
    </div>
  )
}

export default App

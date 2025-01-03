import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";

import Home from "./pages/home/Home";
import Favorite from "./pages/favorite/Favorite";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="favorite" element={<Favorite />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/favoris" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

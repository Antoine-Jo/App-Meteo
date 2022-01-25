import { BrowserRouter, Route, Routes } from "react-router-dom";
import Localisation from "./pages/Localisation";
import Home from "./pages/Home"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/localisation" element={<Localisation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

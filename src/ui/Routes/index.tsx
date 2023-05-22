import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Location } from "../pages/Location";
import { Quotes } from "../pages/Quotes";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/locations" element={<Location />} />
      </Routes>
      <Routes>
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </BrowserRouter>
  );
}

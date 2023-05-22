import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Location } from "../pages/Location";
import { Header } from "@/Header";

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
        <Route path="/quotes" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { RotaPrivada } from "./RotaPrivada";
import Login from "../pages/Login";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RotaPrivada />}>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/entrar" element={<Navigate replace to="/login" />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

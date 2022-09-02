import { Navigate, Outlet } from "react-router-dom";
import { useLoginData } from "../contexts/useLoginData";

export function RotaPrivada() {
  const { dataLogin } = useLoginData();
  console.log(`esta logado: ${dataLogin}`);
  return dataLogin ? <Outlet /> : <Navigate to="/login" replace />;
}

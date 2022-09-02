import { useNavigate } from "react-router-dom";
import { useLoginData } from "../contexts/useLoginData";

export default function Login() {
  const { setDataLogin } = useLoginData();

  const navigate = useNavigate();

  function realizaLogin() {
    setDataLogin(true);
    navigate("/home");
  }

  return (
    <div>
      <label for="login">Login: </label>
      <input type="text" id="login" required placeholder="Digite seu login" />
      <label for="senha">Senha: </label>
      <input type="text" id="senha" required placeholder="Digite sua senha" />
      <button onClick={realizaLogin}>Entrar</button>
    </div>
  );
}

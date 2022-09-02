import { createContext, useContext, useState } from "react";

const LoginDataContext = createContext();

// Ira abraçar os componentes que irão compartilhar dados
const LoginDataProvider = ({ children }) => {
  const [dataLogin, setDataLogin] = useState(false);
  return (
    // deve haver um return e nele o provider passa pela prop value o que será compartilhado
    <LoginDataContext.Provider value={{ dataLogin, setDataLogin }}>
      {children}
    </LoginDataContext.Provider>
  );
};

// Permite usar dados dentro de cada componente
const useLoginData = () => {
  return useContext(LoginDataContext);
};

export { LoginDataProvider, useLoginData, LoginDataContext };

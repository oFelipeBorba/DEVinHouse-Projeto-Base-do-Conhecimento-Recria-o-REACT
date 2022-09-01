import { createContext, useContext, useState } from "react";

// cria o contexto que chamo de CardCreationContext
const CardCreationContext = createContext();

// Ira abraçar os componentes que irão compartilhar dados
const CardCreationProvider = ({ children }) => {
  const [listCard, setListCard] = useState([
    {
      listTitulo: "Exemplo de título",
      listLinguagem: "Java",
      listId: Math.random(),
      listCategoria: "Nova categoria",
      listDescricao: "Olá mundo, estou aqui",
      listVideo: ""
    }
  ]);
  return (
    // deve haver um return e nele o provider passa pela prop value o que será compartilhado
    <CardCreationContext.Provider value={{ listCard, setListCard }}>
      {children}
    </CardCreationContext.Provider>
  );
};
// Permite usar dados dentro de cada componente
const useCardCreation = () => {
  return useContext(CardCreationContext);
};
// devo chamar o ---useCardCreation--- onde eu quiser de fato usar qualquer dado daqui, ex no cardlist

// devo chamar o ---CardCreationProvider--- na home abraçando os elementos que vão receber os dados daq
// isso cria um compartilhamento de dados com tudo que fica sendo filho
export { CardCreationProvider, useCardCreation, CardCreationContext };

import { useCardCreation } from "../contexts/useCardCreation";
import { useState } from "react";

export default function Filter() {
  const { listCard, setListCard } = useCardCreation();

  const { listaCompleta, setListaCompleta } = useState(listCard);

  let listaFiltrada = [];

  listCard.filter(() => {});

  return (
    <>
      <input
        type="text"
        id="barra-pesquisa"
        placeholder="Digite um título para buscar..."
      />
      <button class="botoes-nav-bar" id="btn-pesquisa" type="submit">
        O
      </button>
      <button class="botoes-nav-bar" id="btn-apaga" type="reset">
        X
      </button>
    </>
  );
}

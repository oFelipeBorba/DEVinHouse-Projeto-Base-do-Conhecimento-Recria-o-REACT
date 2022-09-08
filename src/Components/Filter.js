import { useCardCreation } from "../contexts/useCardCreation";
import { useState } from "react";

export default function Filter() {
  const { listCard, setListCard } = useCardCreation();

  const [listaCompleta, setListaCompleta] = useState();

  const [digitado, setDigitado] = useState("");

  function trataFiltroAtiva(e) {
    e.preventDefault();
    if (listaCompleta !== listCard) {
      setListaCompleta(listCard);
    }
    if (digitado !== "") {
      setListCard(
        listCard.filter((item) => {
          if (
            item.titulo
              .toLocaleLowerCase()
              .indexOf(digitado.toLocaleLowerCase()) !== -1 &&
            listaCompleta !== ""
          ) {
            return item;
          }
        })
      );
    }
  }

  function trataFiltroDesativa(e) {
    if (listaCompleta !== "") {
      setListCard(listaCompleta);
    }
    setListaCompleta("");
    setDigitado("");
  }

  return (
    <form class="campo-pesquisa">
      <input
        value={digitado}
        type="text"
        id="barra-pesquisa"
        placeholder="Digite um título para buscar..."
        onChange={(e) => setDigitado(e.target.value)}
      ></input>
      <button
        onClick={trataFiltroAtiva}
        class="botoes-nav-bar"
        id="btn-pesquisa"
        type="submit"
      >
        O
      </button>
      <button
        onClick={trataFiltroDesativa}
        class="botoes-nav-bar"
        id="btn-apaga"
        type="reset"
      >
        X
      </button>
    </form>
  );
}

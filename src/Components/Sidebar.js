import { useCardCreation } from "../contexts/useCardCreation";
import { useState } from "react";

export default function Sidebar() {
  const { listCard, setListCard } = useCardCreation();
  const [tip, setTip] = useState({});

  function limpar() {
    setTip({
      titulo: "",
      linguagem: "",
      categoria: "",
      descricao: "",
      video: ""
    });
  }

  function trataListCard(e) {
    e.preventDefault();
    setListCard([
      ...listCard,
      {
        titulo: tip.titulo,
        linguagem: tip.linguagem,
        id: Math.random(),
        categoria: tip.categoria,
        descricao: tip.descricao,
        video: tip.video
      }
    ]);
    limpar();
  }

  return (
    <>
      <form class="form-cria-nova-dica">
        <h1 class="titulo-principal">
          <img
            src="./Logo-base-do-conhecimento.png"
            width="80%"
            alt="Logo do site Base do Conhecimento"
          />
        </h1>
        <label for="titulo-dica">Título</label>
        <input
          value={tip.titulo}
          type="text"
          id="titulo-dica"
          class="input-padrao"
          minlength="8"
          maxlength="64"
          required
          placeholder="Digite um título"
          onChange={(e) => {
            setTip({
              ...tip,
              titulo: e.target.value
            });
          }}
        />

        <label for="linguagem-skill">Linguagem/Skill</label>
        <input
          value={tip.linguagem}
          type="text"
          id="linguagem-skill"
          class="input-padrao"
          minlength="4"
          maxlength="16"
          required
          placeholder="Digite uma linguagem ou skill"
          onChange={(e) => {
            setTip({
              ...tip,
              linguagem: e.target.value
            });
          }}
        />

        <label for="categoria">Categoria</label>
        <input
          value={tip.categoria}
          list="categoria-lista"
          id="categoria"
          class="input-padrao"
          required
          placeholder="Selecione uma categoria"
          onChange={(e) => {
            setTip({
              ...tip,
              categoria: e.target.value
            });
          }}
        />
        <datalist id="categoria-lista">
          <option value="FrontEnd"></option>
          <option value="BackEnd"></option>
          <option value="FullStack"></option>
          <option value="Comportamental/Soft"></option>
        </datalist>

        <label for="descricao-dica">Descrição</label>
        <textarea
          value={tip.descricao}
          id="descricao-dica"
          class="input-padrao"
          cols="40"
          rows="10"
          minlength="32"
          maxlength="512"
          required
          placeholder="Escreva aqui o detalhamento da sua dica.."
          onChange={(e) => {
            setTip({
              ...tip,
              descricao: e.target.value
            });
          }}
        ></textarea>

        <label for="urlyoutube">Video do YouTube</label>
        <input
          value={tip.video}
          type="text"
          id="urlyoutube"
          class="input-padrao"
          placeholder="https://suaurl.com"
          onChange={(e) => {
            setTip({
              ...tip,
              video: e.target.value
            });
          }}
        />
        <div class="container-botoes-cria-dica">
          <button
            class="botoes-cria-dica"
            id="btn-limpar"
            type="reset"
            onClick={limpar}
          >
            Limpar
          </button>
          <button
            class="botoes-cria-dica"
            id="btn-salvar"
            type="submit"
            onClick={trataListCard}
          >
            Salvar
          </button>
        </div>
      </form>
    </>
  );
}

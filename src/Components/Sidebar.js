import { useCardCreation } from "../contexts/useCardCreation";

export default function Sidebar() {
  const { listCard, setListCard } = useCardCreation();

  let tip = {};

  function trataListCard(e) {
    e.preventDefault();
    console.log(listCard);
    setListCard([
      ...listCard,
      {
        listTitulo: tip.titulo,
        listLinguagem: tip.linguagem,
        listId: tip.id,
        listCategoria: tip.categoria,
        listDescricao: tip.descricao,
        listVideo: tip.video
      }
    ]);
    let btn = document.querySelector("#btn-limpar");
    btn.click();
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
          type="text"
          id="titulo-dica"
          class="input-padrao"
          minlength="8"
          maxlength="64"
          required
          placeholder="Digite um título"
          onChange={(e) => {
            tip.titulo = e.target.value;
          }}
        />

        <label for="linguagem-skill">Linguagem/Skill</label>
        <input
          type="text"
          id="linguagem-skill"
          class="input-padrao"
          minlength="4"
          maxlength="16"
          required
          placeholder="Digite uma linguagem ou skill"
          onChange={(e) => {
            tip.linguagem = e.target.value;
          }}
        />

        <label for="categoria">Categoria</label>
        <input
          list="categoria-lista"
          id="categoria"
          class="input-padrao"
          required
          placeholder="Selecione uma categoria"
          onChange={(e) => {
            tip.categoria = e.target.value;
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
          id="descricao-dica"
          class="input-padrao"
          cols="40"
          rows="10"
          minlength="32"
          maxlength="512"
          required
          placeholder="Escreva aqui o detalhamento da sua dica.."
          onChange={(e) => {
            tip.descricao = e.target.value;
          }}
        ></textarea>

        <label for="urlyoutube">Video do YouTube</label>
        <input
          type="text"
          id="urlyoutube"
          class="input-padrao"
          placeholder="https://suaurl.com"
          onChange={(e) => {
            tip.video = e.target.value;
          }}
        />
        <div class="container-botoes-cria-dica">
          <button class="botoes-cria-dica" id="btn-limpar" type="reset">
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

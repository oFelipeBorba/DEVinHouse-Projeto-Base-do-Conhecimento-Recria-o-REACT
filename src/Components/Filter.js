export default function Filter() {
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

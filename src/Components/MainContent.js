import Summary from "./Summary";
import Filter from "./Filter";
import CardList from "./CardList";

export default function MainContent() {
  return (
    <div class="conteudo-dicas">
      <Summary />
      <form class="campo-pesquisa">
        <Filter />
      </form>
      <CardList />
    </div>
  );
}

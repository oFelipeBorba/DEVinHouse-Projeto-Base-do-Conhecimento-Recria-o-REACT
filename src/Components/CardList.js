import { useCardCreation } from "../contexts/useCardCreation";
import TipCard from "./TipCard";
export default function CardList() {
  const { listCard } = useCardCreation();
  console.log(listCard);

  return (
    <ul class="dados-pesquisados">
      {listCard.map((listCard) => (
        <TipCard
          titulo={listCard.listTitulo}
          linguagem={listCard.listLinguagem}
          id={listCard.listId}
          categoria={listCard.listCategoria}
          descricao={listCard.listDescricao}
          video={listCard.listVideo}
        />
      ))}
    </ul>
  );
}

import { useCardCreation } from "../contexts/useCardCreation";
import TipCard from "./TipCard";
export default function CardList() {
  const { listCard } = useCardCreation();
  console.log(listCard);

  return (
    <ul class="dados-pesquisados">
      {listCard.map((card) => (
        <TipCard card={card} />
      ))}
    </ul>
  );
}

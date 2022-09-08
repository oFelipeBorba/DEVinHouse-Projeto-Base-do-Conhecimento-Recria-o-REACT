import SummaryCard from "./SummaryCard";
import { useCardCreation } from "../contexts/useCardCreation";

export default function Summary() {
  const { listCard } = useCardCreation();

  let contador = {
    fe: 0,
    be: 0,
    fs: 0,
    ss: 0
  };

  listCard.map((listCard) => {
    if (listCard.categoria === "FrontEnd") {
      contador.fe = contador.fe + 1;
      return contador;
    }
    if (listCard.categoria === "BackEnd") {
      contador.be = contador.be + 1;
      return contador;
    }
    if (listCard.categoria === "FullStack") {
      contador.fs = contador.fs + 1;
      return contador;
    }
    if (listCard.categoria === "Comportamental/Soft") {
      contador.ss = contador.ss + 1;
      return contador;
    }
    return contador;
  });

  return (
    <div class="cards-indicativos">
      <SummaryCard
        categoria="Total"
        refId="num-total"
        valorCategoria={listCard.length}
      />
      <SummaryCard
        categoria="FrontEnd"
        refId="num-frontend"
        valorCategoria={Number(contador.fe)}
      />
      <SummaryCard
        categoria="BackEnd"
        refId="num-backend"
        valorCategoria={Number(contador.be)}
      />
      <SummaryCard
        categoria="Fullstack"
        refId="num-fullstack"
        valorCategoria={Number(contador.fs)}
      />
      <SummaryCard
        categoria="SoftSkill"
        refId="num-softskill"
        valorCategoria={Number(contador.ss)}
      />
    </div>
  );
}

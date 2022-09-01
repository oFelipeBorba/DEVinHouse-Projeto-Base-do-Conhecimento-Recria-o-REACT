import SummaryCard from "./SummaryCard";
import { useCardCreation } from "../contexts/useCardCreation";

export default function Summary({ valorRealCategoria }) {
  const { listCard } = useCardCreation();

  let contFE, contBE, contFS, contSS;

  // listCard.map({});

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
        valorCategoria={valorRealCategoria}
      />
      <SummaryCard
        categoria="BackEnd"
        refId="num-backend"
        valorCategoria={valorRealCategoria}
      />
      <SummaryCard
        categoria="Fullstack"
        refId="num-fullstack"
        valorCategoria={valorRealCategoria}
      />
      <SummaryCard
        categoria="SoftSkill"
        refId="num-softskill"
        valorCategoria={valorRealCategoria}
      />
    </div>
  );
}

Summary.defaultProps = {
  valorRealCategoria: 0
};

import "./styles.css";
import { CardCreationProvider } from "./contexts/useCardCreation";
import Sidebar from "./Components/Sidebar";
import MainContent from "./Components/MainContent";

export default function Home() {
  return (
    <div className="conteudo-principal">
      <CardCreationProvider>
        <Sidebar />
        <MainContent />
      </CardCreationProvider>
    </div>
  );
}

import { useEffect, useState } from "react";

export default function TipCard({
  titulo,
  linguagem,
  id,
  categoria,
  descricao,
  video
}) {
  const [ativaVideo, setAtivaVideo] = useState(false);

  useEffect(() => {
    if (video !== "") {
      setAtivaVideo(true);
    }
  }, [video]);

  return (
    <li className="box-dados" id={id}>
      <h2>{titulo}</h2>
      <div className="box-dados-ling">
        <p id="dados-ling">
          <strong>Linguagem:</strong> {linguagem}
        </p>
      </div>
      <div className="box-dados-cat">
        <p id="dados-cat">
          <strong>Categoria:</strong> {categoria}
        </p>
      </div>
      <p id="dados-descricao">{descricao}</p>
      <div className="botoes-box-dados">
        <button class="btn-cards">Excluir</button>
        <button class="btn-cards">Editar</button>
        {ativaVideo === true ? (
          <a href={video} target="_blank" rel="noopener noreferrer">
            <button class="btn-cards">Vídeo</button>
          </a>
        ) : null}
      </div>
    </li>
  );
}
//   // Para inserir os botões faço uma conferencia se foi adicionado link do yt, caso não tenha sido não crio o botão vídeo
//   if (elemento.urlyt == "") {
//     document
//       .querySelector(".dados-pesquisados")
//       .lastElementChild.appendChild(
//         novaDivBotoes
//       ).innerHTML = `<button class="btn-cards" onclick="excluiDicaInformada()">Excluir</button>
//   <button class="btn-cards" onclick="editaDicaInformada()">Editar</button>`;
//   } else {
//     document
//       .querySelector(".dados-pesquisados")
//       .lastElementChild.appendChild(
//         novaDivBotoes
//       ).innerHTML = `<button class="btn-cards" onclick="excluiDicaInformada()">Excluir</button>
//     <button class="btn-cards" onclick="editaDicaInformada()">Editar</button>
//     <a href="${elemento.urlyt}" target="_blank" rel="noopener noreferrer">
//     <button class="btn-cards">Vídeo</button></a>`;
//   }
// }

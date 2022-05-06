import { BotaoVoltar } from "../BotaoVoltar";
import styles from "./styles.module.scss";
import { FaNodeJs} from "react-icons/fa"

export function PaginaBackEnd() {
  return (
    <div className={styles.container}>
      <h2>Node.js {" "} <FaNodeJs/></h2>

      <p>
        Node.js é uma tecnologia usada para executar código JavaScript fora do
        navegador. Com ele podemos construir aplicações web em geral, desde web
        sites até APIs e microsserviços.
      </p>

      <a
        className={styles.guiaNode}
        href="https://www.devmedia.com.br/node-js/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Guia de Node.js
      </a>

      <BotaoVoltar />
    </div>
  );
}

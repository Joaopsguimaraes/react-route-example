import { BotaoVoltar } from "../BotaoVoltar";
import styles from "./styles.module.scss";
import { FaReact } from "react-icons/fa"

export function PaginaFrontEnd() {
  return (
    <div className={styles.container}>
      <h2>React JS {" "} <FaReact /></h2>

      <p>
        React é uma biblioteca JavaScript para a criação de interfaces de
        usuário e, nesse contexto, uma das tecnologias mais utilizadas pelo
        mercado. No guia abaixo você aprenderá quais são os pré-requisitos para
        iniciar no React do jeito certo e como criar as suas primeiras SPAs com
        ela.
      </p>

      <a 
        className={styles.guiaReact} 
        href="https://www.devmedia.com.br/react/" 
        target="_blank" 
        rel="noreferrer"
      >Guia de React</a>

      <BotaoVoltar />
    </div>
  );
}

import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export function PaginaInicial() {
  return (
    <div className={styles.container}>
      <h1>Escolha seu caminho em JavaScript</h1>

      <div className={styles.conteudoOpcoes}>
        <Link className={styles.opcaoFrontEnd} to="/front-end">
          Front-end
        </Link>
        <Link className={styles.opcaoBackEnd} to="/back-end">
          Back-end
        </Link>
      </div>
    </div>
  );
}

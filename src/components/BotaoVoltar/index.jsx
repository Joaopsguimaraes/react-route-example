import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export function BotaoVoltar(){
    return(
        <div className={styles.areaBotao}>
        <Link className={styles.botaoVoltar} to='/'>Voltar</Link>
      </div>
    )
}
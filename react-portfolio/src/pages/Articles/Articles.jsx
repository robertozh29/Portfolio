import { useState } from "react";
import styles from "./Articles.module.css";

export default function Articles(){
    const [contador, setContador] = useState(0)
    const incrementar = () => setContador(prevContador => prevContador + 1);

    return(
        <div className={styles.useState}>
            <h3>useState</h3>
            <p>Permite manejar los estados de un componente funcional en React,
                ayudando a manejar valores dinamicos e inputs controlados.
            </p>
            <div className={styles.contador}>
                <p>Contador: {contador}</p>
                <button onClick={incrementar}>Aumentar</button>
            </div>
        </div>
    )
}
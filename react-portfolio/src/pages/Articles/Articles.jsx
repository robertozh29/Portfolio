import { useState, useEffect } from "react";
import styles from "./Articles.module.css";

export default function Articles(){
    const [contador, setContador] = useState(0)
    const incrementar = () => setContador(prevContador => prevContador + 1);
    const [isFirstRender, setIsFirstRender] = useState(true);
    let render = false
    useEffect(()=>{
        if (isFirstRender) {
            setIsFirstRender(false); // Cambia la bandera para futuras ejecuciones
            return;
        }
        console.log("Incrementando...")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[contador])

    return(
        <>
            <div className={`${styles.useState} ${styles.container}`}>
                <h3>useState</h3>
                <p>Permite manejar los estados de un componente funcional en React,
                    ayudando a manejar valores dinamicos e inputs controlados.
                </p>
                <div className={styles.contador}>
                    <p>Contador: {contador}</p>
                    <button onClick={incrementar}>Aumentar</button>
                </div>  
            </div>
            <div className={`${styles.useEffect} ${styles.container}`}>
                <h3>useEffect</h3>
                <p>Permite manejar los estados de un componente funcional en React,
                    ayudando a manejar valores dinamicos e inputs controlados.
                </p>
            </div>

            <div className={`${styles.container}`}>
                <h3>Conditional Rendering</h3>
                <p>{ render ? "Rendering..." : "Not rendering"}</p>
            </div>
        </>
    )
}
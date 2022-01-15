import React from "react";
import styles from "./About.module.css";

export default class About extends React.Component{
    render(){
        return(
            <div className={styles.contenedor}>
                <div className={styles.bg}>
                    <div>Esta aplicación web te permite acceder a los datos meteorológicos actuales para cualquier ubicación en la Tierra, incluidas más de 200,000 ciudades.</div>
                    <div>Para empezar a usarlo solo agrega el nombre de una ciudad en el buscador y te aparecera en pantalla la información meteorológica más importante de ese lugar.</div>
                </div>
            </div>
        )
    }
}
import React from "react";
import styles from "./Card.module.css";
import {NavLink} from "react-router-dom";

export default class Card extends React.Component{
    render(){
        let {min, max, name, img, onClose, id} = this.props;
        return(
            <div className={styles.contenedor}>
                <button className={styles.button} onClick={onClose} >X</button>
                <NavLink className={styles.active} to={`/ciudad/${id}`}>
                    {name}
                </NavLink>
                <div className={styles.contenedorDebajoDeCiudad}>
                    <div className={styles.min}>
                        <h6>Min</h6>
                        <h6>{min} °C</h6>
                    </div>
                    <img src={`https://openweathermap.org/img/wn/${img}@2x.png`} alt="Icono del clima" />
                    <div className={styles.max}>
                        <h6>Max</h6>
                        <h6>{max} °C</h6>
                    </div>
                </div>
            </div>                    
        )
    }
}
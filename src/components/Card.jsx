import React from "react";
import styles from "./Card.module.css";
import {NavLink} from "react-router-dom";

export default class Card extends React.Component{
    render(){
        let {min, max, name, img, onClose, id} = this.props;
        return(
            <div className={styles.contenedor}>
                <button onClick={onClose} >X</button>
                <NavLink className={styles.active} to={`/ciudad/${id}`}>
                    <h4>{name}</h4>
                </NavLink>
                <div>
                    <div>
                        <h6>Min</h6>
                        <h6>{min} °C</h6>
                    </div>
                    <img src={`https://openweathermap.org/img/wn/${img}@2x.png`} alt="Icono del clima" />
                    <div>
                        <h6>Max</h6>
                        <h6>{max} °C</h6>
                    </div>
                </div>
            </div>                    
        )
    }
}
import React from "react";
import styles from "./Card.module.css";

export default class Card extends React.Component{
    render(){
        let {min, max, name, img, onClose} = this.props;
        return(
            <div className={styles.contenedor}>
                <button onClick={onClose} >X</button>
                <h4>{name}</h4>
                <div>
                    <div>
                        <h6>Min</h6>
                        <h6>{min}°</h6>
                    </div>
                    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Icono del clima" />
                    <div>
                        <h6>Max</h6>
                        <h6>{max}°</h6>
                    </div>
                </div>
            </div>                    
        )
    }
}
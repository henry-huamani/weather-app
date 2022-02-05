import React from "react";
import styles from "./Ciudad.module.css";

export default class Ciudad extends React.Component{
    render(){
        let {city} = this.props;
        if(city){
            return(
                <div className={styles.contenedor}>
                    <div className={styles.bg}>
                        <h4>{city.name} </h4>
                        <div>
                            <h6>Temperatura: {city.temp} °C</h6>
                            <h6>Clima: {city.weather}</h6>
                            <h6>Viento: {city.wind} km/h</h6>
                            <h6>Cantidad de nubes: {city.clouds}</h6>
                            <h6>Latitud: {city.latitud} °</h6>
                            <h6>Longitud: {city.longitud} °</h6> 
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className={styles.contenedorElse}>
                    <h1 className={styles.elseh1}>Ciudad no encontrada en tus agregados</h1>
                </div>
            )
        }
    }
}
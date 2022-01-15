import React from "react";
import Card from "./Card";
import styles from "./Cards.module.css";

export default class Cards extends React.Component{
    render(){
        let {cities, onClose} = this.props;
        if(cities[0]){
            return(
                <div className={styles.contenedor}>
                    {cities.map(c => <Card
                    max = {c.max}
                    min = {c.min}
                    name = {c.name}
                    img = {c.img}
                    onClose = {() => onClose(c.id)}
                    id = {c.id}
                    key={c.id} />)}
                </div>
            )
        }
        else{
            return(
                <div className={styles.contenedor} style={{fontSize: '2rem',
                    fontWeight: 500}}>Aún no ha agregado ninguna ciudad</div>
            )
        }
    }
}
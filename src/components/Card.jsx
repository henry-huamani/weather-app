import React from "react";

export default class Card extends React.Component{
    render(){
        return(
            <div>
                <button>X</button>
                <h4>Ciudad</h4>
                <div>
                    <div>
                        <h6>Min</h6>
                        <h6>Value</h6>
                    </div>
                    <img src={`http://openweathermap.org/img/wn/${this.props.img}@2x.png`} alt="Icono del clima" />
                    <div>
                        <h6>Max</h6>
                        <h6>Value</h6>
                    </div>
                </div>
            </div>                    
        )
    }
}
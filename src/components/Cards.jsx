import React from "react";
import Card from "./Card";

export default class Cards extends React.Component{
    render(){
        let {img} = this.props;
        return(
            <div>
                <Card/>
                <Card/>
                <Card/>
            </div>
        )
    }
}
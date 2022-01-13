import React from "react";
import SearchBar from "./SearchBar";
import Logo from "../logoHenry.png";

export default class Header extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <img src={Logo} alt="" />
                    <h1>Henry - Weather App</h1>
                </div>
                <SearchBar/>
            </div>
        )
    }
}
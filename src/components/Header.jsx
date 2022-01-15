import React from "react";
import SearchBar from "./SearchBar";
import styles from "./Header.module.css";
import Logo from "../logoHenry.png";

export default class Header extends React.Component{
    render(){
        let {onSearch} = this.props;
        return(
            <div className={styles.contenedor}>
                <div>
                    <img src={Logo} alt="" />
                    <h1>Henry - Weather App</h1>
                </div>
                <SearchBar onSearch={onSearch}/>
            </div>
        )
    }
}
import React from "react";
import SearchBar from "./SearchBar";
import styles from "./Header.module.css";
import Logo from "../logoHenry.png";
import { Link } from "react-router-dom";

export default class Header extends React.Component{
    render(){
        let {onSearch} = this.props;
        return(
            <div className={styles.contenedor}>
                <Link className={styles.active} to="/">
                    <div className={styles.home}>
                        <img src={Logo} alt="" />
                        <h1>Henry - Weather App</h1>
                    </div>
                </Link>
                <Link className={styles.active} to="/about">
                    <h1 className={styles.about}>About</h1>
                </Link>
                <SearchBar onSearch={onSearch}/>
            </div>
        )
    }
}
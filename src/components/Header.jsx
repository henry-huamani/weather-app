import React from "react";
import SearchBar from "./SearchBar";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export default class Header extends React.Component{
    render(){
        let {onSearch} = this.props;
        return(
            <div className={styles.contenedor}>
                <Link className={styles.active} to="/">
                    <h1 className={styles.home}>Home</h1>
                </Link>
                <Link className={styles.active} to="/about">
                    <h1 className={styles.about}>About</h1>
                </Link>
                <SearchBar onSearch={onSearch}/>
            </div>
        )
    }
}
import React from "react";
import SearchBar from "./SearchBar";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export default class Header extends React.Component{
    render(){
        let {onSearch} = this.props;
        return(
            <div className={styles.contenedor}>
                <Link className={styles.home} to="/">
                    <h1>Home</h1>
                </Link>
                <Link className={styles.about} to="/about">
                    <h1>About</h1>
                </Link>
                <SearchBar onSearch={onSearch}/>
            </div>
        )
    }
}
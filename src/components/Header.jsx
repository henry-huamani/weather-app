import React from "react";
import SearchBar from "./SearchBar";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default class Header extends React.Component{
    render(){
        let {onSearch} = this.props;
        return(
            <div className={styles.contenedor}>
                <NavLink className={styles.home} to="/">
                    Home
                </NavLink>
                <NavLink className={styles.about} to="/about">
                    About
                </NavLink>
                <SearchBar onSearch={onSearch}/>
                <div className={styles.dropdown}>
                    <FontAwesomeIcon className={styles.dropbtn} icon={faBars} />
                    <div className={styles.dropdownContent}>
                        <NavLink to="/" className={styles.active} >
                            <h1>Home</h1>
                        </NavLink>
                        <NavLink to="/about" className={styles.active}>
                            <h1>About</h1>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}
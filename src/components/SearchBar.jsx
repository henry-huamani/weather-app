import React from "react";
import styles from "./SearchBar.module.css";
export default class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            city: ""
        }
    }
    render(){
        let {onSearch} = this.props;
        return (
           <form className={styles.contenedor} onSubmit={e => {
               e.preventDefault();
               onSearch(this.state.city);
               this.setState({city: ""})
           }}>
               <input value={this.state.city} onChange={e => {this.setState({city: e.target.value})}} className={styles.input} type="text" placeholder="Ciudad..." />
               <input className={styles.btn} type="submit" value="Agregar" />
           </form>
       ) 
    }
}
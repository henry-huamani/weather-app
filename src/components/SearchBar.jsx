import React from "react";
export default class SearchBar extends React.Component{
    render(){
       return (
           <form action="">
               <input type="text" placeholder="Ciudad..." />
               <input type="submit" value="Agregar" />
           </form>
       ) 
    }
}
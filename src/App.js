import React from 'react';
import Header from './components/Header';
import Cards from './components/Cards';
import './App.css';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Header/>
        <Cards/>
      </div>
    );
  }
}

export default App;

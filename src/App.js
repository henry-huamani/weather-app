import React from 'react';
import Header from './components/Header';
import Cards from './components/Cards';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      cities: []
    };
    this.apikey = '4ae2636d8dfbdc3044bede63951a019b';
  };

  onSearch = (ciudad) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${this.apikey}&units=metric`)
    .then(response => response.json())
    .then(json => {
      if(json.main){
        console.log(json.main);
        const ciudad = {
          min: Math.round(json.main.temp_min),
          max: Math.round(json.main.temp_max),
          img: json.weather[0].icon,
          id: json.id,
          wind: json.wind.speed,
          temp: json.main.temp,
          name: json.name,
          weather: json.weather[0].main,
          clouds: json.clouds.all,
          latitud: json.coord.lat,
          longitud: json.coord.lon 
        }
        this.setState((state) => {
          return {cities: [ ...state.cities, ciudad]}
        })
      }
      else{
        alert("Ciudad no encontrada");
      }
    })
  }
  
  onClose = id => {
    this.setState({
      cities: this.state.cities.filter(c => c.id !== id)
    })
  }

  render(){
    return (
      <div>
        <Header onSearch = {this.onSearch}/>
        <Cards cities={this.state.cities} onClose={this.onClose}/>
      </div>
    );
  }
}

export default App;

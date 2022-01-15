import React from 'react';
import Header from './components/Header';
import Cards from './components/Cards';
import About from './components/About';
import Ciudad from './components/Ciudad';
import {Route, Switch} from 'react-router-dom';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      cities: []
    };
    this.apikey = '4ae2636d8dfbdc3044bede63951a019b';
  };

  onSearch = (ciudad) => {
    for(let i = 0; i < this.state.cities.length; i++){
      if(this.state.cities[i].name === ciudad){
        alert("Esta ciudad ya lo tienes agregado");
        return;
      }
    }
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${this.apikey}&units=metric`)
    .then(response => response.json())
    .then(json => {
      if(json.main){
        const ciudad = {
          min: json.main.temp_min,
          max: json.main.temp_max,
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

  onFilter = ciudadId => {
    //Aqui el la función parseInd es obligatorio para que la comparación sea verdadera
    let city = this.state.cities.filter( c => c.id === parseInt(ciudadId));
    if(city.length > 0){
      return city[0];
    }
    else{
      return null;
    }
  }

  render(){
    return (
      <div>
        <Header onSearch = {this.onSearch}/>
        <Switch>
          <Route
          exact
          path="/"
          render={() => <Cards cities={this.state.cities} onClose={this.onClose}/>}
          />
          <Route
          exact
          path="/about"
          component={About}
          />
          <Route
          exact
          path="/ciudad/:ciudadId"
          render={({match}) => <Ciudad city={this.onFilter(match.params.ciudadId)} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;

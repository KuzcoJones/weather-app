import React from 'react';
import Weather from './components/Weather'
import SearchBox from './components/SearchBox'
import LocationBox from './components/LocationBox'

// Cards for forecast of the week
//  More pcitures for background
// Edit pictures
// 


class App extends React.Component{
  constructor(){
    super()
    this.state= {
      location: 'New York City',
      country: 'US',
      temp: '15',
      weather: 'Sunny',
      feels_like:  60,
      rendered: false

      }
  }
  
  setWeather = (data) => {
   if(data.weather) {

     this.setState({
      location: data.name, temp: data.main.temp, country: data.sys.country,
      weather: data.weather[0].main, 
      feels_like: data.main.feels_like,

       rendered: true
    })
   }
    console.log(data)
  }

  render(){
    const {weather, temp, rendered} = this.state
    return (
      <div className={(rendered === true) ? ((temp > 50) ? 'app warm' : 'app') : 'app' }>
        <main>
          <SearchBox setWeather={this.setWeather}/>
          <LocationBox  country= {this.state.country} location={this.state.location} />
  
          <Weather weather={this.state.weather} temp={this.state.temp} feels={this.state.feels_like}/>


        </main>
      </div>
    );
  }
}

export default App;

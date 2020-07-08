import React from 'react';
import Weather from './components/Weather'
import SearchBox from './components/SearchBox'
import LocationBox from './components/LocationBox'

// MUI styling 
import {createMuiTheme, ThemeProvider} from '@material-ui/styles'
const theme = createMuiTheme({
  palette: {
  primary: {main: '#590212', light: '#734207', dark: '#2D403E'},
  secodary: {light: '#60735F', dark: '#1A2625'}},
  typography: {main: 'Roboto', }
})

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
  }

  render(){
    const {weather, temp, rendered} = this.state
    return (
      <div className={(rendered === true) ? ((temp > 50) ? 'app warm' : 'app') : 'app' }>
        <ThemeProvider theme={theme}>
          <main>
            <SearchBox setWeather={this.setWeather}/>
            <LocationBox  country= {this.state.country} location={this.state.location} />
            <Weather weather={weather} temp={this.state.temp} feels={this.state.feels_like}/>
          </main>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;

import React from 'react'

const api = {
 key: "be40f9cd8335ced68e24e6298417aa60",
 base: "https://api.openweathermap.org/data/2.5/"
}

class Weather extends React.Component{

 constructor(props){
  super(props)
  this.state = {
    temp: props.temp,
    weather: props.weather,
    feels: props.feels,
  }
 }

 componentWillReceiveProps(nextProps){
  this.setState({
    temp: nextProps.temp,
    weather: nextProps.weather,
    feels: nextProps.feels
  })
 }



 render(){
  const { temp, weather, feels } = this.state
  return(
   <div className="weather-box">
     <div className="temp">
        {Math.round(temp)}°F
        <div className="feels">
            Feels Like {Math.round(feels)}°F
           </div>
          </div>
          <div className="weather">{weather}</div>
          
         
   </div>
  )
 }
}


export default Weather
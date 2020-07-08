import React from 'react'


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
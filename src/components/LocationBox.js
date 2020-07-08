import React from 'react'


class LocationBox extends React.Component{

 constructor(props){
  super(props)
  this.state = {
   location: props.location,
   country: props.country
  }
 }

 componentWillReceiveProps(nextProps){
  this.setState({
   location: nextProps.location,
   country: nextProps.country
  })
 }


 render(){
  const {location, country} = this.state
  const dateBuilder = (d) => {
   let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

   let days = ["Monday", "Tuesday", "Wednesday",
   "Thursday", "Friday", "Saturday", "Sunday"]

   let day = days[d.getDay()];
   let date = d.getDate();
   let month = months[d.getMonth()]
   let year = d.getFullYear()
   return `${day} ${date} ${month} ${year}`
 }
 
  return(
    <div className="location-box">
      <div className="location">{location}, {country}</div>
      <div className="date">{dateBuilder(new Date())}</div>
    </div>
  )
 }
}

export default LocationBox;
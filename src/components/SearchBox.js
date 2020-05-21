import React from 'react'

const api = {
 key: "be40f9cd8335ced68e24e6298417aa60",
 base: "https://api.openweathermap.org/data/2.5/"
}

class SearchBox extends React.Component{

 constructor(){
  super()
  this.state = {
   query : "",
   weather: {}
  }
 }
 
 search = (e) => {
   this.setState({
    query: e.target.value
   })

   
  }
  
   handleKeyPress = (e) => {
    if(e.key === 'Enter'){

     fetch(`${api.base}weather?q=${this.state.query}&units=imperial&APPID=${api.key}`)
     .then(resp => resp.json())
     .then(data => {this.props.setWeather(data)
      this.setState({
       query: ""
      })
     }
      )
    }

   }

 render(){

  return(
   <div className="search-box">
   <input type="text" className="search-bar" placeholder="Search..." 
   value={this.state.query} onChange = {(event) => this.search(event)} 
   onKeyPress = {(event) => this.handleKeyPress(event)} />
 </div>

  )
 }
}

export default SearchBox
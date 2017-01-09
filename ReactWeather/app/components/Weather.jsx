const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');

const Weather = React.createClass({
  getInitialState(){
    return {
      location: 'Miami',
      temp:100
    }
  },
  handleSearch(location){
    this.setState({
      location:location,
      temp: 32
    })
  },
  render () {
    let {temp, location} = this.state;
    return (
      <div>
        <h1>Weather Here</h1>
        <p>Get your weather here!</p>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage temp={temp} location={location}/>
      </div>
    );
  }
});


module.exports = Weather;

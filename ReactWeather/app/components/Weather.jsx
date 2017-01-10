const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');

const Weather = React.createClass({
  getInitialState(){
    return {
      location: 'Miami',
      temp:100
    }
  },
  handleSearch(location){
    var that = this;
    openWeatherMap.getTemp(location).then(function(temp) {
      that.setState({
        location: location,
        temp: temp
      });
    }, function(errorMessage) {
      alert(errorMessage);
    });
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

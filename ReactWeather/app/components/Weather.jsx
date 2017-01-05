const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');

class Weather extends React.Component {
  render () {
    return (
      <div>
        <h1>Weather Here</h1>
        <p>Get your weather here!</p>
        <WeatherForm />
        <WeatherMessage />
      </div>
    );
  }
}


module.exports = Weather;

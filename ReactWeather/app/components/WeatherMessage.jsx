const React = require('react');

const WeatherMessage = React.createClass({
  render() {
    var {temp, location} = this.props;
    return (
      <p>It is currently {temp} F in {location}.</p>
    );
  }
});

module.exports = WeatherMessage;

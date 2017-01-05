const React = require('react');

class WeatherForm extends React.Component {
  render() {
    return (
      <form>
        <div>
          <input placeholder="Type a city in here." type="text"/>
        </div>
        <div>
          <button>Get Your Weather!</button>
        </div>
      </form>
    );
  }
};

module.exports = WeatherForm;

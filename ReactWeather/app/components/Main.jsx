var React = require('react');
var Nav = require('Nav');

class Main extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <h2>MAIN + Children Below</h2>
        {this.props.children}
      </div>
    );
  }
};

module.exports = Main;

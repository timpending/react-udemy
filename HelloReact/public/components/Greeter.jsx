var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

const Greeter = React.createClass({
    getDefaultProps() {
        return {
          name: 'React',
          message: 'We Reacting Here'
        };
    },
    getInitialState(){
      return {
        name: this.props.name,
        message: this.props.message
      };
    },
    handleNewData(updates) {
      this.setState(updates);
    },
    render() {
        let name = this.state.name
        let message = this.state.message

        return (
            <div>
              <GreeterMessage name={name} message={message}/>
            <GreeterForm onNewData={this.handleNewData}/>
            </div>
        );
    }
});

module.exports = Greeter

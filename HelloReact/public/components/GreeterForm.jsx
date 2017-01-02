const React = require('react');

const GreeterForm = React.createClass({
  onFormSubmit(e){
    e.preventDefault();

    let updates = {};
    let name = this.refs.name.value;
    let message = this.refs.message.value;


    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }
    if (message.length > 0){
      this.refs.message.value = '';
      updates.message = message;
    }
    this.props.onNewData(updates);
  },
  render(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
            <input placeholder="Name Here" type="text" ref="name" />
        </div>
        <div>
          <textarea placeholder="enter your message." ref="message"></textarea>
        </div>
        <div>
            <button>Submit</button>
        </div>
      </form>
    );
  }
});

module.exports = GreeterForm;

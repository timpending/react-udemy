const GreeterMessage = React.createClass({
  render(){
    let name = this.props.name;
    let message = this.props.message;

    return (
        <div>
          <h1>Hello {name}!</h1>
          <p>{message}</p>
        </div>
    );
  }
});

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

ReactDOM.render(
    <Greeter/>, document.getElementById('app'));

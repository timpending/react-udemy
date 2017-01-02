var GreeterMessage = React.createClass({
  render(){
    let name = this.props.name;
    let message = this.props.message

    return (
        <div>
          <h1>Hello {name}!</h1>
          <p>{message}</p>
        </div>
    );
  }
});

var GreeterForm = React.createClass({
  onFormSubmit(e){
    e.preventDefault();
    var name = this.refs.name.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      this.props.onNewName(name);
    }
  },
  render(){
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="name" />
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

var Greeter = React.createClass({
    getDefaultProps() {
        return {
          name: 'React',
          message: 'Default Message'
        };
    },
    getInitialState(){
      return {
        name: this.props.name
      };
    },
    handleNewName(name) {
      this.setState({
        name: name
      });
    },
    render() {
        let name = this.state.name
        let message = this.props.message

        return (
            <div>
              <GreeterMessage name={name} message={message}/>
              <GreeterForm onNewName={this.handleNewName}/>
            </div>
        );
    }
});

var firstName = 'Timmay';
var message = 'Whaddup homie?'

ReactDOM.render(
    <Greeter name={firstName} message={message}/>, document.getElementById('app'));

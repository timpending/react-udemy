var Greeter = React.createClass({
    // render: () => {
    // return React.createElement(
    //     'h1',
    //     null,
    //     'Hello React.createElement'
    //   );
    // }
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
    onButtonClick(event) {
      event.preventDefault();

      let nameRef = this.refs.name;

      let name = nameRef.value;
      nameRef.value = '';

      if (typeof name === 'string' && name.length > 0 ) {
        this.setState({
          name: name
        });
      }
    },
    render() {
        let name = this.state.name
        let message = this.props.message

        return (
            <div>
                <h1>Hello {name}!!</h1>
                <p>This is from the Component</p>
                <p>{message + "???!!!!"}</p>

              <form onSubmit={this.onButtonClick}>
                <input type="text" ref="name" />
                <button>Set Name</button>
              </form>
            </div>
        );
    }
});

var firstName = 'Timmay';
var message = 'Whaddup homie?'

ReactDOM.render(
    <Greeter name={firstName} message={message}/>, document.getElementById('app'));

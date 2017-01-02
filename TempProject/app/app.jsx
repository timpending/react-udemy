var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
  name: 'Tim',
  location: 'Denver'
};

var objTwo = {
  age: 28,
  ...objOne
};

console.log(objTwo);

ReactDOM.render(
    <h1>Hello React Boilerplate!</h1>, document.getElementById('app')
  );

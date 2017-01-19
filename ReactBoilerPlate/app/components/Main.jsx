var React = require('react');

var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <h1>Main.jsx Rendering</h1>
          {props.children}
        </div>
      </div>
    </div>
  )
}

module.exports = Main;

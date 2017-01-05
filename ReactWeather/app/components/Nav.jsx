const React = require('react');
const {Link} = require('react-router');
const {IndexLink} = require('react-router');

class Nav extends React.Component {
  render() {
    return (
      <div>
        <h2>Nav Component</h2>
        <IndexLink to='/' activeClassName='active' activeStyle={{color: 'green', fontWeight: 'bold'}}>Weather</IndexLink>
        <Link to='/about' activeClassName='active' activeStyle={{color: 'green', fontWeight: 'bold'}}>About</Link>
        <Link to='/examples' activeClassName='active' activeStyle={{color: 'green', fontWeight: 'bold'}}>Examples</Link>
      </div>
    );
  }
};

module.exports = Nav;

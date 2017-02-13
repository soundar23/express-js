var React = require('react');
var ReactDOM = require('react-dom');
var {browserHistory, Route, Router, IndexRoute} = require('react-router');
var Favourite = require('./components/restaurant/favourites');
var NavBar = require('./components/NavBar');
var About = require('./components/About');
var Home = require('./components/search.jsx');

var MainComp = React.createClass({
    render: function() {
        return (
            <div>
                <NavBar/>
                <br/><br/><br/><br/> {this.props.children}
            </div>
        );
    }
})
ReactDOM.render(
    <Router history={browserHistory}>
    <Route path="/" component={MainComp}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/Favourites" component={Favourite}/>
    </Route>
</Router>, document.getElementById('mountapp'));

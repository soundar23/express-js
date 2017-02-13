var React = require('react');
var {Link} = require('react-router');
var NavBar = React.createClass({

    render: function() {
        return (
            <div className="navigation">
                <h1>Foodies</h1>
                <ul className="nav">
                    <h1>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Favourites">Favourites</Link>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                    </h1>
                </ul>
            </div>
        );
    }
});

module.exports = NavBar;

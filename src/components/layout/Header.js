import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const Header = (props) => {
  const {Heading} = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {Heading}
        </Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link"><i className="fas fa-home"></i>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link"><i className="fas fa-plus"></i>Add Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link"><i className="fas fa-question"></i>About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  Heading : "My App"
}

Header.propTypes = {
  Heading : PropTypes.string.isRequired
}

export default Header;
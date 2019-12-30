import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

const NavBar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          Logout
        </a>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul>
      <li>
        <a href="#!">Mern Stack</a>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
  return (
    <div>
      <nav className="navbar bg-dark">
        <h1>
          <Link to="/">
            <i className="fas fa-code" /> Fancybear
          </Link>
        </h1>
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </nav>
    </div>
  );
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(NavBar);

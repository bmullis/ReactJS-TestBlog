import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
        <div className="container">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="/" className="navbar-brand">Blog Title</Link>

          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link exact to="/" className="nav-link" activeClassName="active-page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" activeClassName="active-page">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/posts/new" className="nav-link" activeClassName="active-page">New Post</Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-md-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    );
  };
}

export default Navigation;

import React from 'react'
import {NavLink} from 'react-router-dom'
import CartBtn from './cart_btn'

function Header() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div>
          <a className="navbar-brand" href="/">rFood</a>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" exact>Katalog</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/information">Informacija</NavLink>
            </li>
          </ul>
        </div>
        <div>
        <button type="button" className="btn text-dark bg-transparent">
            <i className="material-icons">search</i>
          </button>
          <button type="button" className="btn text-dark bg-transparent">
            <i className="material-icons">account_circle</i>
          </button>
          <CartBtn/>
        </div>
      </nav>
    );
  }
  
export default Header;
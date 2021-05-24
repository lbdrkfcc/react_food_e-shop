import React from 'react'
import {NavLink} from 'react-router-dom'

function Footer() {
  return (
    <div className="footer bg-dark py-3">
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="list-unstyled">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/">Katalog</NavLink>
              </li>
              <li>
                <NavLink to="/information">Informacija</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
import React, { Component } from "react";
import Identicon from "identicon.js";
import './Navbar.css'
import photo from "../images/capture2.png"


const Navbar = ({ account }) => {
  return (
    <nav className="navbar custnav f flex-md-nowrap p-0 ">
      <a
        className="navbar-brand col-sm-3 col-md-2 mr-0"
        href="http://www.dappuniversity.com/bootcamp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={photo}
          width="100"
          height="100"
          className="d-inline-block"
          alt=""
        />
        DVIDEO
      </a>
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
          <small className="text-secondary">
            <small id="account">{account}</small>
          </small>
          {account ? (
            <img
              className="ml-2"
              width="30"
              height="30"
              src={`data:image/png;base64,${new Identicon(
                account,
                30
              ).toString()}`}
            />
          ) : (
            <span></span>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React, { Component } from "react";
import { NavItem, Navbar } from "react-materialize";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar
          brand={
            <Link to="/">
              <span>GST Demonstrator</span>
            </Link>
          }
          alignLinks="right">
          <NavItem>
            <Link to="/items">All Items</Link>
          </NavItem>
          <NavItem>
            <Link to="/piechart">Pie-Chart</Link>
          </NavItem>
        </Navbar>
      </div>
    );
  }
}

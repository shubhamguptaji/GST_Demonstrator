import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import ItemsList from "./ItemsList";
import PieChart from "./PieChart";
import Header from "./Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/items" component={ItemsList} />
          <Route path="/piechart" component={PieChart} />
        </Switch>
      </div>
    );
  }
}

export default App;

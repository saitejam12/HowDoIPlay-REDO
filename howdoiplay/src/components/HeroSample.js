import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Abaddon from "./tips/Abaddon";
import Alchemist from "./tips/Alchemist";
function HeroSample() {
  return (
    <Router>
      <div className="grey">
        <div className="tipcontainer">
          <Switch>
            <Route path="/Abaddon" component={Abaddon} />
            <Route path="/Alchemist" component={Alchemist} />
          </Switch>
        </div>
        <ul className="herolist">
          <li className="herolist__hero abaddon">
            <Link
              className="herolist__hero__link"
              title="Abaddon"
              to="/Abaddon"
            >
              <span className="herolist__hero__name">Abaddon</span>
            </Link>
          </li>
          <li className="herolist__hero alchemist">
            <Link
              className="herolist__hero__link"
              title="Alchemist"
              to="/Alchemist"
            >
              <span className="herolist__hero__name">Alchemist</span>
            </Link>
          </li>
        </ul>
      </div>
    </Router>
  );
}

export default HeroSample;

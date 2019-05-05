import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function Child({ match }) {
  return (
    <div>
      <h3>ID: {match.params.id}</h3>
    </div>
  );
}

function HeroSample() {
  return (
    <Router>
      <div className="grey">
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
            <a
              className="herolist__hero__link"
              title="Alchemist"
              href="/?Alchemist"
            >
              <span className="herolist__hero__name">Alchemist</span>
            </a>
          </li>
        </ul>
        <Route path="/:id" component={this.child} />
      </div>
    </Router>
  );
}

export default HeroSample;

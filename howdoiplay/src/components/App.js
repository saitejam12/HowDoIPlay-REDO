import React from "react";

import InputLine from "./InputLine";
import Tips from "./Tips";
import HeroList from "./HeroList";
import Social from "./Social";

import "./assets/styles/style.css";

function App() {
  return (
    <div className="App">
      <InputLine />
      <Tips />
      <HeroList />
      <Social />
    </div>
  );
}

export default App;

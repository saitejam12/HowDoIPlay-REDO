import React from "react";
import InputLine from "./InputLine";
//import Tips from "./Tips";
//import HeroSample from "./HeroSample";
import HeroList from "./HeroList";
import Social from "./Social";

import "./assets/styles/minimap-icons.css";
import "./assets/styles/normalize.css";
import "./assets/styles/style.css";

function App() {
  return (
    <div className="App">
      <InputLine />
      <HeroList />
      <Social />
    </div>
  );
}

export default App;

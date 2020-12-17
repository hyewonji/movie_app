import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation"

function App() {
  return (
    <HashRouter>
      <Navigation /> {/*Navigatio은 반드시 Router 안에 와야 한다. !!Link를 포함하고 있기 때문!! */}
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
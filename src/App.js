import logo from "./logo.svg";
import "./App.css";
import { Pyheader } from "./Components/header.js";
import {
  Homepage,
  Services,
  Solutions,
  Otherservices,
  Featured,
  Footer,
} from "./Components/Homepage.js";

import {
  Approachpage as Approach,
  Container1,
  Container2,
  Container3,
  Container4,
} from "./Components/Approachpage.js";

import { Contactpage as Contact } from "./Components/Contactpage.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import React from "react";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Pyheader />
          <Route path="/" exact component={Landingpage} />
          <Route path="/Approach" component={Approachpage} />
          <Route path="/Contact" component={Contactpage} />
        </div>
      </Router>
    );
  }
}

const Landingpage = () => (
  <div>
    <Homepage />
    <Services />
    <Solutions />
    <Otherservices />
    <Featured />
    <Footer />
  </div>
);

const Approachpage = () => (
  <div>
    <Approach />
    <Container1 />
    <Container2 />
    <Container3 />
    <Container4 />
    <Footer />
  </div>
);

const Contactpage = () => (
  <div>
    <Contact />
    <Footer />
  </div>
);
export default App;

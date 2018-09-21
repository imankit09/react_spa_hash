import React from "react";
import "./App.css";
import { Route, NavLink, HashRouter } from "react-router-dom";
const App = () => (
  <HashRouter>
    <div className="App">
      <h1>Simple SPA</h1>
      <ul className="header">
        <li>
          <NavLink exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/stuff">Stuff</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <div className="content">
        <Route path="/" component={Home} />
        <Route path="/stuff" component={Stuff} />
        <Route path="/contact" component={Contact} />
      </div>
    </div>
  </HashRouter>
);

const Home = () => (
  <div>
    <h2>HELLO</h2>
    <p>Hi...</p>
  </div>
);

const Stuff = () => (
  <div>
    <h2>Stuff</h2>
    <p>Hi..</p>
  </div>
);

const Contact = () => (
  <div>
    <h2>Contact</h2>
    <p>Hi....</p>
  </div>
);

export default App;

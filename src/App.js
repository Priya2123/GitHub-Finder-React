import React from "react";
import NavBar from "./components/layout/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/pages/About";
import User from "./components/users/User";
import Home from "./components/pages/Home";
import Alert from "./components/layout/Alert";
import GithubState from "./context/github/GIthubState";
import AlertState from "./context/alert/AlertState";
import NotFound from "./components/pages/NotFound";
const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <NavBar title="GitHub Finder" />
            <div className="container">
              {/* adding them as props here */}
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;

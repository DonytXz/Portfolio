import React from "react";
import Home from "./pages/Home";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;

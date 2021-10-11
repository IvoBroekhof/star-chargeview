import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch, useHistory, withRouter  } from "react-router-dom";

import './App.css';
import './components/widgets/TimeSelector';
import Feedback from './components/pages/Feedback';
import Start from './components/pages/Start';
import TimeSelector from "./components/widgets/TimeSelector";

export default function App() {

  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Start />
          </Route>
          <Route path="/feedback">
            <Feedback />
          </Route>
        </Switch>
    </Router>
  );
}


import React from "react";
import Form from "./components/form/index";
import FormStatus from "./components/formstatus/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/" component={Form} />
          <Route path="/formstatus" component={FormStatus} />
        </div>
      </Switch>
    </Router>
  )
}

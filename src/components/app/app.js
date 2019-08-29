import React from "react";
import { Route, Switch } from "react-router-dom";
import "./app.css";
import { HomePage, CartPage } from "../../components/pages";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/cart" component={CartPage} />
    </Switch>
  );
};

export default App;

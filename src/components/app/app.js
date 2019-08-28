import React from "react";
import "./app.css";
import { withBookstoreService } from "../hoc";

const App = () => {
  return <div>App</div>;
};

export default withBookstoreService()(App);

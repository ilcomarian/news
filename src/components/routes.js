import React from "react";
import { Switch, Route } from "react-router-dom";

import Category from "./category";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Category} />
    <Route exact path="/sports" component={Category} />
    <Route exact path="/business" component={Category} />
    <Route exact path="/entertainment" component={Category} />
    <Route exact path="/science" component={Category} />
    <Route exact path="/technology" component={Category} />
  </Switch>
);

export default Routes;

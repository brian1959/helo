import React from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "./component/Auth/Auth";
import Post from "./component/Post/Post";
import Dashboard from "./component/Dashboard/Dashboard";
import Form from "./component/Form/Form";

export default (
  <Switch>
    <Route path="/new" component={Form} />
    <Route exact path="/" component={Auth} />
    <Route path="/post/postid" component={Post} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);

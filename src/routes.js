import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/header";
import Footer from "./components/footer";
import Article from "./components/Article";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/article/:id" component={Article} />
      <Route path="/" component={Home} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default Routes;

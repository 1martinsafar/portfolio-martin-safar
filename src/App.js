import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

import Layout from "./components/Layout/Layout";

import Intro from "./pages/Intro/Intro";
import Portfolio from "./pages/Portfolio/Portfolio";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

class App extends Component {
  render() {
	return (
	  <HashRouter>
		<div>
		  <Layout>
			<Switch>
			  <Route path="/portfolio/" component={Portfolio} />
			  <Route path="/about/" component={About} />
			  <Route path="/contact/" component={Contact} />
			  <Route path="/" exact component={Intro} />
			  <Redirect to="/" />
			</Switch>
		  </Layout>
		</div>
	  </HashRouter>
	);
  }
}

export default App;

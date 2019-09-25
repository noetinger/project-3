import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./pages/Detail";
import AuctionList from "./pages/AuctionList";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LogOutPage from "./pages/LogOutPage";
import SignUpPage from "./pages/SignUpPage";
import { PrivateRoute } from "./components/PrivateRoute"
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <PrivateRoute exact path="/SignUp" component={SignUpPage} />
          <PrivateRoute exact path="/logout" component={LogOutPage} />
          <PrivateRoute exact path="/auction" component={AuctionList} />
          <PrivateRoute exact path="/auction/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

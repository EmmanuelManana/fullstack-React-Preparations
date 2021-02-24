import "./App.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SurveyNew from "./components/SurveyNew";
import { useEffect } from "react";
import * as actions from "./actions/index";
import { connect } from "react-redux";

function App(props) {
  useEffect(() => {
    try{
      props.fetchUser()
    }catch(e){
      //must do logging
      console.log(e)
    }
    
    return () => {
      // cleanup
    };
  }, [props]);

  return (
    <Router>
      <div className="guguglethu">
        <Header />
        <Switch>
          <Route exact={true} path="/" component={LandingPage} />
          <Route exact={true} path="/dashboard" component={Dashboard} />
          <Route exact={true} path="/newsurvey" component={SurveyNew} />
        </Switch>
      </div>
    </Router>
  );
}

export default connect(null, actions)(App);

/* <a href="/auth/login">Sign in with Google Auth</a> */

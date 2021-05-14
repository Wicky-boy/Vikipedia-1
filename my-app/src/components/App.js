// eslint-disable-next-line
import React, { useState,useEffect } from "react";
import Login from "./Login.js";
import Register from "./Register.js";
import Home from "./Home.js";
import CreateNew from "./CreateNew.js";
import Response from "./Response.js";
import Share from "./Share.js";
import Footer from "./Footer.js"
import {HashRouter as Router,Switch,Route} from "react-router-dom";
import Result from "./Result.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNav from "./Nav.js"
import LandingPage from "./LandingPage.js"
import Thanks from "./Thanks.js"
import View from "./View.js"


function App() {

  console.log()

  

  return ( 
    <div>
      <Router>
      <CustomNav/>
        <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home/:id" exact component={Home} />
        <Route path="/home/:id/:name/create" exact component={CreateNew} />
        <Route path="/home/:id/a/:name/b/:id/response" exact component={Response} />
        <Route path="/home/:id/:name/ThankU" exact component={Thanks} />
        <Route path="/view/:name/:id/:index" component={View} />
        <Route path="/home/:id/:index/userdetails" component={Share} />
        <Route path="/home/:id/:questionIndex/:answerIndex/result" component={Result} />
        </Switch>
      </Router>
      <Footer/>
      </div>
  );
}




export default App;



  // <div className="preLoaderContainer">
  // <div class="Preloader">
  //   <SquareLoader loading />
  // </div>  
  // </div>
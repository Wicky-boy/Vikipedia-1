// eslint-disable-next-line
import React, { useState,useEffect } from "react";
import Login from "./Login.js";
import Register from "./Register.js";
import Home from "./Home.js";
import CreateNew from "./CreateNew.js";
import Response from "./Response.js";
import UserDetails from "./UserDetails.js";
import Footer from "./Footer.js"
import {HashRouter as Router,Switch,Route} from "react-router-dom";
import Result from "./Result.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNav from "./Nav.js"
import LandingPage from "./LandingPage.js"



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
        <Route path="/home/:id/create" component={CreateNew} />
        <Route path="/home/:id/:index/response" component={Response} />
        <Route path="/home/:id/:index/userdetails" component={UserDetails} />
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
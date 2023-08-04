// eslint-disable-next-line
import axios from "axios";
import React, { useState,useEffect } from "react";
import {Link,HashRouter as Router} from "react-router-dom";
import {Container,Row,Col,Button} from "react-bootstrap"
import LoginSVG from "../image/LoginSVG.svg"
import TextField from '@material-ui/core/TextField';
import Preloader from "./Preloader.js"

function Login({history}) {
  const [firstInputValue, setFirstInputValue] = useState("");
  const [secondInputValue, setSecondInputValue] = useState("");
  const [loginInfo,setLoginInfo] = useState(false)
  const [userID,setUserID]= useState("");
  const [loginMessage,setLoginMessage] = useState("")
  const [loading ,setLoading] = useState(true)

  function onChangeFirstEventHandler(event){
    setFirstInputValue(event.target.value)
  }

  function onChangeSecondEventHandler(event){
    setSecondInputValue(event.target.value)

  }
   async function onClickEventHandler(event){
    await axios.post("/login",{name:firstInputValue,password:secondInputValue})
    .then((response) => {
      setLoginInfo(response.data[0])
      setLoginMessage("Please enter correct username and password")
      setUserID(response.data[1])
    }) 
    .catch(err =>{
      console.log(err)
    })

    event.preventDefault();  

  }

  useEffect(()=>{
    console.log("Login page loaded successfully")
    setInterval(()=>{setLoading(false)},1000)
})



  return (<div>{loading?<Preloader/> :
  <Container className="loginContainer">    
    <div className="loginDiv">
    <Row xs={1} md={2}>
      <Col>
      <div>
        <img 
          className="loginSVG"
          src={LoginSVG}
          alt=""
        />
      </div>
      </Col>
      <Col>
      <div className="loginFormDiv">
      <form onSubmit={onClickEventHandler} autocomplete="off">
      <TextField
        id="outlined-basic1" 
        label="Enter your username" 
        variant="outlined"
        onChange ={onChangeFirstEventHandler}
        name="name"
        value={firstInputValue}
      ></TextField>
      <br/>
      <br/>
      <TextField
        id="outlined-basic1" 
        label="Enter your password" 
        variant="outlined"
        onChange ={onChangeSecondEventHandler}
        name="info"
        value={secondInputValue}
        hintText="Password"
        type="password"
      ></TextField>
      <br/>
      <br/>
      { loginInfo? null:<Button className="navButton btn" type="submit">Login</Button>}
    </form>
    {loginInfo ? <Router><Link  to={`/home/${userID}`}><Button className="nextButton btn" type="button">Next</Button></Link></Router>  :<p style={{color:"red"}} className="para">{loginMessage}</p>}
    <hr className="registerpagesHR"/>
    <p className="para">Don't have an account ? [<Link to="/register"><a className="registerPagesLogin" href="###">Register</a></Link>]</p>
      </div>
      </Col>
    </Row>
    </div>
    </Container>
  
  
  }</div>
    
  );
}
export default Login;

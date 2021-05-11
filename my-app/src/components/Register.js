import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import {Button,Container,Row,Col} from 'react-bootstrap';
import registerSVG from "../image/registerSVG.svg"
import TextField from '@material-ui/core/TextField';
import Preloader from "./Preloader.js"

function Register({history}){

    const [userName,setUserName] = useState("");
    const [userPassword,setUserPassword] = useState("")
    const [loading ,setLoading] = useState(true)
    function registerInputOnChangeEventHandler(event){
        if(event.target.name === "userName"){
            setUserName(event.target.value);
        }else if(event.target.name === "userPassword"){
            setUserPassword(event.target.value);
        }
    }
    function registerEventHandler(event){
        axios.post("/register",{name:userName,password:userPassword})
        .then((response) =>{
            console.log(response.data)
        })
        .then((res)=>{history.push("/login")})
        .catch((err) =>{console.log(err)})
        event.preventDefault();
    }
    useEffect(()=>{
        console.log("Register page loaded successfully")
        setInterval(()=>{setLoading(false)},1000)
    })
    

    return( <div>
    {loading?   <Preloader />:
    <Container className="registerContainer">
    <div className="registerDiv">
        <Row xs={1} md={2}>
            <Col>
            <div className="registerFormDiv">
                <form autocomplete="off" onSubmit={registerEventHandler} className="registerForm">
                    <TextField onChange={registerInputOnChangeEventHandler} name="userName" className="registerInput1" id="outlined-basic1" label="Create Username" variant="outlined" value={userName}></TextField>
                    <br/>
                    <br/>
                    <TextField onChange={registerInputOnChangeEventHandler} name="userPassword" className="registerInput2" id="outlined-basic2" label="Create Password" variant="outlined" value={userPassword}></TextField>
                    <br/>
                    <br/>
                    <Button className="navButton btn" type="submit">Register</Button>
                </form>
                <hr className="registerpagesHR"/>
                <p className="para">Already have an account ? [<Link to="login"><a className="registerPagesLogin" href="/login">Login</a>]</Link> </p>
            </div>
            </Col>
            <Col>
                <div>
                    <img
                        className="registerSVG"
                        src={registerSVG}
                        alt=""
                    />
                </div>
            </Col>
        </Row>
    </div>
    </Container>}
    </div>
   );


}

export default Register;
import axios from "axios";
import React, { useEffect, useState,useRef } from "react";
import {Container,Row,Col,Button,Overlay,Tooltip } from "react-bootstrap"
import Table from 'react-bootstrap/Table'
import shareSVG from "../image/shareSVG.svg"
import CopyText from "./CopyText.js"
import Preloader from "./Preloader.js"


function UserDetails(match){
    const userID = match.match.params.id
    const indexNumber = match.match.params.index
    const path="https://vikipedia-1.herokuapp.com/#/home/"+userID+"/"+indexNumber+"/response"
    const [loading ,setLoading] = useState(true)
    const [show, setShow] = useState(false);
    const target = useRef(null);
    const [userDetailsAnswer,setUserDetailsAnswer]=useState({
        q1:"",
        q2:"",
        q3:"",
        q4:"",
        q5:"",
        q6:"",
        q7:"",
        q8:""
    })


    function getUserDetails(){
        axios.post("/fulldetails",{id:userID})
        .then((response) =>{
            const answers = response.data[0].userAnswer[indexNumber]
            setUserDetailsAnswer({
                q1:answers.Question1,
                q2:answers.Question2,
                q3:answers.Question3,
                q4:answers.Question4,
                q5:answers.Question5,
                q6:answers.Question6,
                q7:answers.Question7,
                q8:answers.Question8,
            })
        })
        .then((res)=>{setLoading(false)})

    }


    useEffect(() =>{
        getUserDetails()
    })

    return(
            <div>
            {loading?   <Preloader />: 
            <Container className="userDetailsContainer">
            <Row xs={1} md={2}>
                <Col>
                <h2 className="heading">Alright,You r ready</h2>
                <p className="para">Share the given link with your friends, So this link will lets your friends to respond. Click the clipboard icon <i class="far fa-clipboard clipboard"></i> to copy and then share the link with your friends</p>
                <div className="linkClip">
                <div className="linkDiv">
                <input type="text" className="copyTextInput" id="copyText" name="country" value={`https://vikipedia-1.herokuapp.com/#/home/${userID}/${indexNumber}/response`} readonly></input>
                </div>
                <div >
                <Button ref={target} onClick={() =>{CopyText(path) 
                    setShow(!show)
                   }}  className="clipCopyButton"><i class="far fa-clipboard clipboard"></i></Button>
                <Overlay target={target.current} show={show} placement="top">
                {(props) => (
                    <Tooltip Tooltip id="overlay-example" {...props}>
                        Text copied to the clipboard
                    </Tooltip>
                )}
                </Overlay>

                </div>
                </div>
 
                <div className="userDeatilsTable">
                <Table className="scrollableTable" striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Questions</th>
                        <th>Your Answer</th> 
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Which Phone Do you like?</td>
                        <td>{userDetailsAnswer.q1}</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Do you like veg or non-veg</td>
                        <td>{userDetailsAnswer.q2}</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>What's your fav movie genre</td>
                        <td>{userDetailsAnswer.q3}</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>How you like to travel in your day to day life</td>
                        <td>{userDetailsAnswer.q4}</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>What is one thing/activity that makes you relax?</td>
                        <td>{userDetailsAnswer.q5}</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Do you wear glasses</td>
                        <td>{userDetailsAnswer.q6}</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>How do you like to Click Pictures</td>
                        <td>{userDetailsAnswer.q7}</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Which type of shopping do you like</td>
                        <td>{userDetailsAnswer.q8}</td>
                    </tr>
                </tbody>
                </Table>   
                </div>
                </Col>
                <Col>
                    <img 
                    className="colImage"
                        src={shareSVG}
                        alt=""
                    />
                </Col>
            </Row>
        
    </Container>}
    </div>
    );

    
    
}

export default UserDetails;


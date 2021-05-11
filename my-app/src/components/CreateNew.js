import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link,HashRouter as Router} from "react-router-dom";
import {Container,Row,Col,Button} from "react-bootstrap"
import createNewSVG from "../image/createNewSVG.svg"
import selectionButtonFunction from "./Functions.js"
import Preloader from "./Preloader.js"


function CreateNew(match){

    useEffect(()=>{ 
        selectionButtonFunction()   
   
        // console.log("useEffect Triggered...")
    })
    
    const [answerValue,setAnswerValue] = useState({
        Question1:"",
        Question2:"",
        Question3:"",
        Question4:"",
        Question5:"",
        Question6:"",
        Question7:"",
        Question8:""
    })
    const [answerIndex,setAnswerIndex]=useState(0)
    const [isSubmitted,setIsSubmitted] = useState(false)
    const [loading ,setLoading] = useState(true)
    function answerHandler(event){
        const questionName = event.target.name;
        const questionValue = event.target.value;
        // console.log(questionName,questionValue)
        if(questionName==="q1"){
            setAnswerValue((previousValue) =>{
    
               return {
                    Question1:questionValue,
                    Question2:previousValue.Question2,
                    Question3:previousValue.Question3,
                    Question4:previousValue.Question4,
                    Question5:previousValue.Question5,
                    Question6:previousValue.Question6,
                    Question7:previousValue.Question7,
                    Question8:previousValue.Question8,
                }
            })
        }else if(questionName==="q2"){
            setAnswerValue((previousValue) =>{
     
                return {
                    Question1:previousValue.Question1,
                    Question2:questionValue,
                    Question3:previousValue.Question3,
                    Question4:previousValue.Question4,
                    Question5:previousValue.Question5,
                    Question6:previousValue.Question6,
                    Question7:previousValue.Question7,
                    Question8:previousValue.Question8,
                 }
             })
        }else if(questionName==="q3"){
            setAnswerValue((previousValue) =>{
     
                return {
                    Question1:previousValue.Question1,
                    Question2:previousValue.Question2,
                    Question3:questionValue,
                    Question4:previousValue.Question4,
                    Question5:previousValue.Question5,
                    Question6:previousValue.Question6,
                    Question7:previousValue.Question7,
                    Question8:previousValue.Question8,
                 }
             })
        }else if(questionName==="q4"){
            setAnswerValue((previousValue) =>{
     
                return {
                    Question1:previousValue.Question1,
                    Question2:previousValue.Question2,
                    Question3:previousValue.Question3,
                    Question4:questionValue,
                    Question5:previousValue.Question5,
                    Question6:previousValue.Question6,
                    Question7:previousValue.Question7,
                    Question8:previousValue.Question8,
                 }
             })
        }else if(questionName==="q5"){
            setAnswerValue((previousValue) =>{
     
                return {
                    Question1:previousValue.Question1,
                    Question2:previousValue.Question2,
                    Question3:previousValue.Question3,
                    Question4:previousValue.Question4,
                    Question5:questionValue,
                    Question6:previousValue.Question6,
                    Question7:previousValue.Question7,
                    Question8:previousValue.Question8,
                 }
             })
        }else if(questionName==="q6"){
            setAnswerValue((previousValue) =>{
     
                return {
                    Question1:previousValue.Question1,
                    Question2:previousValue.Question2,
                    Question3:previousValue.Question3,
                    Question4:previousValue.Question4,
                    Question5:previousValue.Question5,
                    Question6:questionValue,
                    Question7:previousValue.Question7,
                    Question8:previousValue.Question8,
                 }
             })
        }else if(questionName==="q7"){
            setAnswerValue((previousValue) =>{
     
                return {
                    Question1:previousValue.Question1,
                    Question2:previousValue.Question2,
                    Question3:previousValue.Question3,
                    Question4:previousValue.Question4,
                    Question5:previousValue.Question5,
                    Question6:previousValue.Question6,
                    Question7:questionValue,
                    Question8:previousValue.Question8,
                 }
             })
        }else if(questionName==="q8"){
            setAnswerValue((previousValue) =>{
     
                return {
                    Question1:previousValue.Question1,
                    Question2:previousValue.Question2,
                    Question3:previousValue.Question3,
                    Question4:previousValue.Question4,
                    Question5:previousValue.Question5,
                    Question6:previousValue.Question6,
                    Question7:previousValue.Question7,
                    Question8:questionValue,
                 }
             })
        } 
        console.log(answerValue)
    }

    function getLength(){
        axios.post("/fulldetails",{id:match.match.params.id})
        .then((response) =>{
            setAnswerIndex(response.data[0].userAnswer.length-1)
            console.log(answerIndex)
        })
    }

    function answerPostHandler(events){        
        axios.post("/questionanswer",{details:{id:match.match.params.id,answer:answerValue}})
        .then((response) =>{
            console.log(response.data)
            getLength()
            console.log(answerValue)
        })
        events.preventDefault()
    }

    useEffect(()=>{
        setInterval(()=>{
            setLoading(false)
        },2000)
    })

    return (<div>{loading?<Preloader/> : <Container className="createPageContainer"> 
            <Row xs={1} md={2} className="createNewRow">
                <Col>
                <h1 className="heading">CreateNew</h1>
                <p className="para" >Click the options and then click submit, After that click next to complete your creation</p>
                <div className="createNewDiv">
                <form onSubmit={answerPostHandler}>
                <label className="subHeading questionHeading">Which Phone Do you like?</label>
                    <button className="selectionButton appleIphone" type="button" onClick={answerHandler} name="q1" value="Apple Iphone" >Apple Iphone</button>
                    <button className="selectionButton android" type="button" onClick={answerHandler} name="q1" value="Android" >Android</button>
                    <button className="selectionButton nokia1100" type="button" onClick={answerHandler} name="q1" value="Nokia 1100" >Nokia 1100</button>
                    <button className="selectionButton windows" type="button" onClick={answerHandler} name="q1" value="Windows" >Windows</button>
                <label className="subHeading questionHeading">Do you like veg or non-veg</label>
                    <button className="selectionButton nonVeg" type="button" onClick={answerHandler} name="q2" value="Non-veg">Non-Veg</button>
                    <button className="selectionButton veg" type="button" onClick={answerHandler} name="q2" value="Veg">Veg</button>
                <label className="subHeading questionHeading">What's your fav movie genre</label>
                    <button className="selectionButton romance" type="button" onClick={answerHandler} name="q3" value="Romance" >Romance</button>
                    <button className="selectionButton horror" type="button" onClick={answerHandler} name="q3" value="Horror" >Horror</button>
                    <button className="selectionButton action" type="button" onClick={answerHandler} name="q3" value="Action" >Action</button>
                    <button className="selectionButton comedy" type="button" onClick={answerHandler} name="q3" value="Comedy" >Comedy</button>
                    <button className="selectionButton fantasy" type="button" onClick={answerHandler} name="q3" value="Fantasy" >Fantasy</button>
                    <button className="selectionButton anythingElse" type="button" onClick={answerHandler} name="q3" value="Anything else" >Anything else</button>
                <label className="subHeading questionHeading">How you like to travel in your day to day life</label>
                    <button className="selectionButton Bike" type="button" onClick={answerHandler} name="q4" value="Bike" >Bike</button>
                    <button className="selectionButton Bicycle" type="button" onClick={answerHandler} name="q4" value="Bicycle" >Bicycle</button>
                    <button className="selectionButton Bus" type="button" onClick={answerHandler} name="q4" value="Bus" >Bus</button>
                    <button className="selectionButton Train" type="button" onClick={answerHandler} name="q4" value="Train" >Train</button>
                    <button className="selectionButton Car" type="button" onClick={answerHandler} name="q4" value="Car" >Car</button>
                    <button className="selectionButton Flight" type="button" onClick={answerHandler} name="q4" value="Flight" >Flight</button>
                <label className="subHeading questionHeading">What is one thing/activity that makes you relax?</label>
                    <button className="selectionButton listeningMusic" type="button" onClick={answerHandler} name="q5" value="Listening Music" >Listening Music</button>
                    <button className="selectionButton goForDrive" type="button" onClick={answerHandler} name="q5" value="Go for Drive" >Go for Drive</button>
                    <button className="selectionButton Sleeping" type="button" onClick={answerHandler} name="q5" value="Sleeping" >Sleeping</button>
                    <button className="selectionButton Reading" type="button" onClick={answerHandler} name="q5" value="Reading" >Reading</button>
                <label className="subHeading questionHeading">Do you wear glasses</label>
                    <button className="selectionButton Yes" type="button" onClick={answerHandler} name="q6" value="Yes" >Yes</button>
                    <button className="selectionButton No" type="button" onClick={answerHandler} name="q6" value="No" >No</button>
                <label className="subHeading questionHeading">How do you like to Click Pictures</label>
                    <button className="selectionButton Pose" type="button" onClick={answerHandler} name="q7" value="Pose" >Pose</button>
                    <button className="selectionButton Selfi" type="button" onClick={answerHandler} name="q7" value="Selfi" >Selfi</button>
                <label className="subHeading questionHeading">Which type of shopping do you like</label>
                    <button className="selectionButton Traditional" type="button" onClick={answerHandler} name="q8" value="Traditional" >Traditional</button>
                    <button className="selectionButton onlineShopping" type="button" onClick={answerHandler} name="q8" value="Online Shopping" >Online Shopping</button>
                    <div>
                        <Button className="customCreateNewButton" onClick={()=>{setIsSubmitted(true)}} type="submit">submit</Button>
                    </div>
                        
                </form>
            </div>
             
             {isSubmitted && <Link to={`/home/${match.match.params.id}/${answerIndex}/userdetails`}>
                        <Button style={{backgroundColor:"purple",border:"0px"}} className="customCreateNewButton">Next</Button>
                    </Link>}
                </Col>
                <Col>
                    <img 
                        className="createNewSVG colImage"
                        src={createNewSVG}
                        alt=""
                    />
                </Col>
            </Row>
            
    </Container>}
    </div>
    );
}

export default CreateNew;
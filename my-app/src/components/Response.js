import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import {Container,Row,Col,Button} from "react-bootstrap"
import responseSVG from "../image/responseSVG.svg"
import selectionButtonFunction2 from "./Function2"
import TextField from '@material-ui/core/TextField';
import Preloader from "./Preloader.js"

function Response(match){
    const ID = match.match.params.id
    const Index1 = match.match.params.index
    const [userName,setUserName]= useState("")
    const [inputValue,setInputValue] = useState("")
    const [isSubmitted,setIsSubmitted] = useState(false)
    const [loading ,setLoading] = useState(true)


    async function getQuestion(){
        await axios.post("/home",{id:ID})
        .then((response) =>{
            setUserName(response.data.username)
        })
        .then((res)=>{setLoading(false)})
    } 

    const [answerValue,setAnswerValue] = useState({
        Name:"",
        Question1:"",
        Question2:"",
        Question3:"",
        Question4:"",
        Question5:"",
        Question6:"",
        Question7:"",
        Question8:"",
        score:0
    })
    const [answerIndex,setAnswerIndex]=useState(0)

    function answerHandler(event){
        const questionName = event.target.name;
        const questionValue = event.target.value;
        console.log(questionName,questionValue)
        if(questionName==="q1"){
            setAnswerValue((previousValue) =>{

               return {
                    Name:inputValue,
                    Question1:questionValue,
                    Question2:previousValue.Question2,
                    Question3:previousValue.Question3,
                    Question4:previousValue.Question4,
                    Question5:previousValue.Question5,
                    Question6:previousValue.Question6,
                    Question7:previousValue.Question7,
                    Question8:previousValue.Question8,
                    score:previousValue.score
                }
            })
        }else if(questionName==="q2"){
            setAnswerValue((previousValue) =>{
     
                return {
                    Name:inputValue,
                    Question1:previousValue.Question1,
                    Question2:questionValue,
                    Question3:previousValue.Question3,
                    Question4:previousValue.Question4,
                    Question5:previousValue.Question5,
                    Question6:previousValue.Question6,
                    Question7:previousValue.Question7,
                    Question8:previousValue.Question8,
                    score:previousValue.score
                 }
             })
        }else if(questionName==="q3"){
            setAnswerValue((previousValue) =>{
     
                return {
                    Name:inputValue,
                    Question1:previousValue.Question1,
                    Question2:previousValue.Question2,
                    Question3:questionValue,
                    Question4:previousValue.Question4,
                    Question5:previousValue.Question5,
                    Question6:previousValue.Question6,
                    Question7:previousValue.Question7,
                    Question8:previousValue.Question8,
                    score:previousValue.score
                 }
             })
        }else if(questionName==="q4"){
            setAnswerValue((previousValue) =>{
     
                return {
                    Name:inputValue,
                    Question1:previousValue.Question1,
                    Question2:previousValue.Question2,
                    Question3:previousValue.Question3,
                    Question4:questionValue,
                    Question5:previousValue.Question5,
                    Question6:previousValue.Question6,
                    Question7:previousValue.Question7,
                    Question8:previousValue.Question8,
                    score:previousValue.score
                 }
             })
        }else if(questionName==="q5"){
            setAnswerValue((previousValue) =>{
     
                return {
                    Name:inputValue,
                    Question1:previousValue.Question1,
                    Question2:previousValue.Question2,
                    Question3:previousValue.Question3,
                    Question4:previousValue.Question4,
                    Question5:questionValue,
                    Question6:previousValue.Question6,
                    Question7:previousValue.Question7,
                    Question8:previousValue.Question8,
                    score:previousValue.score
                 }
             })
        }else if(questionName==="q6"){
            setAnswerValue((previousValue) =>{
     
                return {
                    Name:inputValue,
                    Question1:previousValue.Question1,
                    Question2:previousValue.Question2,
                    Question3:previousValue.Question3,
                    Question4:previousValue.Question4,
                    Question5:previousValue.Question5,
                    Question6:questionValue,
                    Question7:previousValue.Question7,
                    Question8:previousValue.Question8,
                    score:previousValue.score
                 }
             })
        }else if(questionName==="q7"){
            setAnswerValue((previousValue) =>{
     
                return {
                    Name:inputValue,
                    Question1:previousValue.Question1,
                    Question2:previousValue.Question2,
                    Question3:previousValue.Question3,
                    Question4:previousValue.Question4,
                    Question5:previousValue.Question5,
                    Question6:previousValue.Question6,
                    Question7:questionValue,
                    Question8:previousValue.Question8,
                    score:previousValue.score
                 }
             })
        }else if(questionName==="q8"){
            setAnswerValue((previousValue) =>{
     
                return {
                    Name:inputValue,
                    Question1:previousValue.Question1,
                    Question2:previousValue.Question2,
                    Question3:previousValue.Question3,
                    Question4:previousValue.Question4,
                    Question5:previousValue.Question5,
                    Question6:previousValue.Question6,
                    Question7:previousValue.Question7,
                    Question8:questionValue,
                    score:previousValue.score
                 }
             })
        } 
        console.log(answerValue)
    }
    function getLength(){
        axios.post("/fulldetails",{id:ID})
        .then((response) =>{
            setAnswerIndex(response.data[0].response.length-1)
            console.log(answerIndex)
        })
    }

    function answerPostHandler(events){   

          console.log(answerValue)
        axios.post("/response",{details:{id:ID,answer:answerValue}})
        .then((response) =>{
            console.log(response.data)
            getLength()
            // const path1 = ID
            // const path2 = Index1
            // const path3 = answerIndex
            // match.history.push()

        })
        events.preventDefault()
    }

    function onChangeEventHandler(event){
        const value = event.target.value
        setInputValue(value)
        console.log(inputValue)
    }
    useEffect(()=>{
       getQuestion() 
       selectionButtonFunction2()
    })

    return(
        <div>{loading?<Preloader/> :
        <Container className="responseContainer">
        <div className="responseDiv">
        <Row xs={1} md={2}>
            <Col>
                <div>
                <h2 className="subHeading">You are responding to {userName}</h2>
                <p className="para">if you wish to create your slam,then get back to home page, create and share</p>
                <div className="createNewDiv">
                <form autoComplete="off" onSubmit={answerPostHandler}>
                    <label className="subHeading questionHeading">Enter your name :</label>
                    <TextField id="standard-basic" label="Enter your name" onChange={onChangeEventHandler} name="peopleName"  value={inputValue} />
                    <label className="subHeading questionHeading">Which Phone Do {userName} like?</label>
                        <button className="selectionButton1 appleIphone1 " type="button" onClick={answerHandler} name="q1" value="Apple Iphone" >Apple Iphone</button>
                        <button className="selectionButton1 android1 " type="button" onClick={answerHandler} name="q1" value="Android" >Android</button>
                        <button className="selectionButton1 nokia11001" type="button" onClick={answerHandler} name="q1" value="Nokia 1100" >Nokia 1100</button>
                        <button className="selectionButton1 windows1" type="button" onClick={answerHandler} name="q1" value="Windows" >Windows</button>
                    <label className="subHeading questionHeading" > Which is {userName}'s Favorite [veg or non-veg]</label>
                        <button className="selectionButton1 nonVeg1" type="button" onClick={answerHandler} name="q2" value="Non-veg">Non-Veg</button>
                        <button className="selectionButton1 veg1" type="button" onClick={answerHandler} name="q2" value="Veg">Veg</button>
                    <label className="subHeading questionHeading">Which is {userName}'s fav movie genre</label>
                        <button className="selectionButton1 romance1" type="button" onClick={answerHandler} name="q3" value="Romance" >Romance</button>
                        <button className="selectionButton1 horror1" type="button" onClick={answerHandler} name="q3" value="Horror" >Horror</button>
                        <button className="selectionButton1 action1" type="button" onClick={answerHandler} name="q3" value="Action" >Action</button>
                        <button className="selectionButton1 comedy1" type="button" onClick={answerHandler} name="q3" value="Comedy" >Comedy</button>
                        <button className="selectionButton1 fantasy1" type="button" onClick={answerHandler} name="q3" value="Fantasy" >Fantasy</button>
                        <button className="selectionButton1 anythingElse1" type="button" onClick={answerHandler} name="q3" value="Anything else" >Anything else</button>
                    <label className="subHeading questionHeading">How {userName} likes to travel in day to day life</label>
                        <button className="selectionButton1 Bike1" type="button" onClick={answerHandler} name="q4" value="Bike" >Bike</button>
                        <button className="selectionButton1 Bicycle1" type="button" onClick={answerHandler} name="q4" value="Bicycle" >Bicycle</button>
                        <button className="selectionButton1 Bus1" type="button" onClick={answerHandler} name="q4" value="Bus" >Bus</button>
                        <button className="selectionButton1 Train1" type="button" onClick={answerHandler} name="q4" value="Train" >Train</button>
                        <button className="selectionButton1 Car1" type="button" onClick={answerHandler} name="q4" value="Car" >Car</button>
                        <button className="selectionButton1 Flight1" type="button" onClick={answerHandler} name="q4" value="Flight" >Flight</button>
                    <label className="subHeading questionHeading">Which is one thing/activity that makes {userName} relax?</label>
                        <button className="selectionButton1 listeningMusic1" type="button" onClick={answerHandler} name="q5" value="Listening Music" >Listening Music</button>
                        <button className="selectionButton1 goForDrive1" type="button" onClick={answerHandler} name="q5" value="Go for Drive" >Go for Drive</button>
                        <button className="selectionButton1 Sleeping1" type="button" onClick={answerHandler} name="q5" value="Sleeping" >Sleeping</button>
                        <button className="selectionButton1 Reading1" type="button" onClick={answerHandler} name="q5" value="Reading" >Reading</button>
                    <label className="subHeading questionHeading">Do {userName} wear glasses</label>
                        <button className="selectionButton1 Yes1" type="button" onClick={answerHandler} name="q6" value="Yes" >Yes</button>
                        <button className="selectionButton1 No1" type="button" onClick={answerHandler} name="q6" value="No" >No</button>
                    <label className="subHeading questionHeading">How {userName} likes to Click Pictures</label>
                        <button className="selectionButton1 Pose1" type="button" onClick={answerHandler} name="q7" value="Pose" >Pose</button>
                        <button className="selectionButton1 Selfi1" type="button" onClick={answerHandler} name="q7" value="Selfi" >Selfi</button>
                    <label className="subHeading questionHeading">Which type of shopping {userName} prefers the most</label>
                        <button className="selectionButton1 Traditional1" type="button" onClick={answerHandler} name="q8" value="Traditional" >Traditional</button>
                        <button className="selectionButton1 onlineShopping1" type="button" onClick={answerHandler} name="q8" value="Online Shopping" >Online Shopping</button>
                        <div>
                            <Button className="customCreateNewButton" onClick={()=>{setIsSubmitted(true)}} type="submit">submit</Button>
                        </div>
                </form>

                </div>
                {isSubmitted && <Link to={`/home/${ID}/${Index1}/${answerIndex}/result`}>
                        <Button style={{backgroundColor:"purple",border:"0px"}} className="customCreateNewButton">Click me to enter</Button>
                    </Link>}
                </div>
            </Col>
            <Col>
                <img 
                    className="colImage"
                    src={responseSVG}
                    alt=""
                />
            </Col>
        </Row>
        </div>
    </Container>}
    </div>
    )
    

}

export default Response;
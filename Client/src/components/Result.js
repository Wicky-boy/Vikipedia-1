import axios from "axios";
import React, { useEffect, useState } from "react";
import {Container,Row,Col,Button} from "react-bootstrap"
import resultSVG from "../image/resultSVG.svg"
import Table from 'react-bootstrap/Table'
import {Link} from "react-router-dom"
import Preloader from "./Preloader.js"


function Result(match){
    const questionIndex = match.match.params.questionIndex 
    const answerIndex = match.match.params.answerIndex
    const ID = match.match.params.id
    const [questionValue,setQuestionValue] = useState({})
    const [answerValue,setAnswerValue] = useState({})
    const [userName,setUserName]= useState("")
    const [scoreCount,setScoreCount] = useState(0)
    const [scoreUpdateName,setScoreUpdateName] = useState("")
    const [loading ,setLoading] = useState(true)



    async function getQuestion(){
        
        await axios.post("/home",{id:ID})
        .then((response) =>{
            setUserName(response.data.username)
        })
        .then(()=>{getDetails()})
        .catch((err) =>{
            console.log("#1",err)
        })

    } 
    async function getDetails(){
        await axios.post("/fulldetails",{id:ID})
        .then((response) =>{
            const question = response.data[0].userAnswer[questionIndex]
            const answer = response.data[0].response[answerIndex]
            const name = answer.Name
            setQuestionValue(question)
            setAnswerValue(answer)
            setScoreUpdateName(name)

        })
        .then(()=>{score()})
        .catch((err) =>{
            console.log("#2",err)
        })
        
    }

    function score(){
        var i;
        var count = 0

        for(i=1;i<9;i++){
            if(i===1){
                if(questionValue.Question1===answerValue.Question1){
                    count = count + 1
                }
            }else if(i===2){
                if(questionValue.Question2===answerValue.Question2){
                    count = count + 1
                }
            }else if(i===3){
                if(questionValue.Question3===answerValue.Question3){
                    count = count + 1
                }
            }else if(i===4){
                if(questionValue.Question4===answerValue.Question4){
                    count = count + 1
                }
            }else if(i===5){
                if(questionValue.Question5===answerValue.Question5){
                    count = count + 1
                }
            }else if(i===6){
                if(questionValue.Question6===answerValue.Question6){
                    count = count + 1
                }
            }else if(i===7){
                if(questionValue.Question7===answerValue.Question7){
                    count = count + 1
                }
            }else if(i===8){
                if(questionValue.Question8===answerValue.Question8){
                    count = count + 1
                }
            }
        
        }
        
        setScoreCount(count);
        setLoading(false)
        postScore()
    }
 
    async function postScore(){
       await axios.post("/score",{id:ID,score:scoreCount,index:answerIndex,name:scoreUpdateName})
        .then((response) =>{
            console.log(response.data)
        })
        .catch((err) =>{console.log("#1",err)})
    }


    useEffect(()=>{
        getQuestion()
    })
    
    return(
        <div>
        {loading?   <Preloader />:
        <Container>
        <h1 className="heading">Thanks for visiting...</h1>
        <p className="para">if you wish to create one for you, then please head back to <a href="/">Home</a></p>
        <div className="resultDiv">
        <Row xs={1} md={2}>
            <Col>
            <img 
                    className="colImage"
                    src={resultSVG}
                    alt=""
                />
            </Col>
            <Col>
            <h1 className="heading">Back 2 Home ?</h1>
            <Link to="/">
            <Button className="btn navButton">Click me</Button>
            </Link>
            <h3 className="itemHeading scoreHead">Your Score : {scoreCount}</h3>
            <div className="resultTableDiv">
            <Table className="scrollableTable" striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Question</th>
                    <th>Answers</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Which Phone Do {userName} like?</td>
                        <td>{questionValue.Question1===answerValue.Question1? <p>{answerValue.Question1}</p> : <p>{answerValue.Question1} is wrong [Correct Ans: {questionValue.Question1}]</p> }</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Which is {userName}'s fav [veg or non-veg]</td>
                        <td>{questionValue.Question2===answerValue.Question2? <p>{answerValue.Question2}</p> : <p>{answerValue.Question2} is wrong [Correct Ans: {questionValue.Question2}]</p> }</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Which is {userName}'s fav movie genre</td>
                        <td>{questionValue.Question3===answerValue.Question3? <p>{answerValue.Question3}</p> : <p>{answerValue.Question3} is wrong [Correct Ans: {questionValue.Question3}]</p> }</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>How {userName} likes to travel in day to day life</td>
                        <td>{questionValue.Question4===answerValue.Question4? <p>{answerValue.Question4}</p> : <p>{answerValue.Question4} is wrong [Correct Ans: {questionValue.Question4}]</p>}</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Which is one thing/activity that makes {userName} relax?</td>
                        <td>{questionValue.Question5===answerValue.Question5? <p>{answerValue.Question5}</p> : <p>{answerValue.Question5} is wrong [Correct Ans: {questionValue.Question5}]</p>}</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Do {userName} wear glasses</td>
                        <td>{questionValue.Question6===answerValue.Question6? <p>{answerValue.Question6}</p> : <p>{answerValue.Question6} is wrong [Correct Ans: {questionValue.Question6}]</p>}</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>How {userName} likes to Click Pictures</td>
                        <td>{questionValue.Question7===answerValue.Question7? <p>{answerValue.Question7}</p> : <p>{answerValue.Question7} is wrong [Correct Ans: {questionValue.Question7}]</p>}</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Which type of shopping {userName} prefers the most</td>
                        <td>{questionValue.Question8===answerValue.Question8? <p>{answerValue.Question8}</p> : <p>{answerValue.Question8} is wrong [Correct Ans: {questionValue.Question8}]</p>}</td>
                    </tr>
                </tbody>
            </Table>
                
            </div>
            </Col>

        </Row>
        </div>
    </Container>}
    </div>
    );

    
}

export default Result;




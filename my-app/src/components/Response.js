import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import {Container,Row,Col,Button} from "react-bootstrap"
import responseSVG from "../image/responseSVG.svg"
import TextField from '@material-ui/core/TextField';
import Preloader from "./Preloader.js"
import Carousel from 'react-bootstrap/Carousel'

function Response(match){
    const ID = match.match.params.id
    const [userName,setUserName]= useState("")
    const [isSubmitted,setIsSubmitted] = useState(false)
    const [inputValue,setInputValue] = useState({
        name:"",
        q1:"",
        q2:"",
        q3:"",
        q4:"",
        q5:"",
        q6:"",
        q7:"",
        q8:""
    })
    const [loading ,setLoading] = useState(false)

    async function getName(){
        await axios.post("/home",{id:ID})
        .then((response) =>{
            setUserName(response.data.username)
        })
        .then((res)=>{setLoading(false)})
    } 

    function onChangeEventHandler(event){
        const name = event.target.name
        const value = event.target.value
        setInputValue((preVal) =>{
            if(name==="username"){
                return(
                    {     
                        name:value,
                        q1:preVal.q1,
                        q2:preVal.q2,
                        q3:preVal.q3,
                        q4:preVal.q4,
                        q5:preVal.q5,
                        q6:preVal.q6,
                        q7:preVal.q7,
                        q8:preVal.q8
                        
                    }
                )
            }else if(name==="Q1"){
                return(
                    {   
                        
                        name:preVal.name,
                        q1:value,
                        q2:preVal.q2,
                        q3:preVal.q3,
                        q4:preVal.q4,
                        q5:preVal.q5,
                        q6:preVal.q6,
                        q7:preVal.q7,
                        q8:preVal.q8
                        
                    })
            }else if(name==="Q2"){
                return(
                    {   
                        
                        name:preVal.name,
                        q1:preVal.q1,
                        q2:value,
                        q3:preVal.q3,
                        q4:preVal.q4,
                        q5:preVal.q5,
                        q6:preVal.q6,
                        q7:preVal.q7,
                        q8:preVal.q8
                        
                    })
            }else if(name==="Q3"){
                return(
                    {   
                        
                        name:preVal.name,
                        q1:preVal.q1,
                        q2:preVal.q2,
                        q3:value,
                        q4:preVal.q4,
                        q5:preVal.q5,
                        q6:preVal.q6,
                        q7:preVal.q7,
                        q8:preVal.q8
                        
                    })
            }else if(name==="Q4"){
                return(
                    {   
                        
                        name:preVal.name,
                        q1:preVal.q1,
                        q2:preVal.q2,
                        q3:preVal.q3,
                        q4:value,
                        q5:preVal.q5,
                        q6:preVal.q6,
                        q7:preVal.q7,
                        q8:preVal.q8
                        
                    })
            }else if(name==="Q5"){
                return(
                    {   
                        
                        name:preVal.name,
                        q1:preVal.q1,
                        q2:preVal.q2,
                        q3:preVal.q3,
                        q4:preVal.q4,
                        q5:value,
                        q6:preVal.q6,
                        q7:preVal.q7,
                        q8:preVal.q8
                        
                    })
            }else if(name==="Q6"){
                return(
                    {   
                        
                        name:preVal.name,
                        q1:preVal.q1,
                        q2:preVal.q2,
                        q3:preVal.q3,
                        q4:preVal.q4,
                        q5:preVal.q5,
                        q6:value,
                        q7:preVal.q7,
                        q8:preVal.q8
                        
                    })
            }else if(name==="Q7"){
                return(
                    {   
                        
                        name:preVal.name,
                        q1:preVal.q1,
                        q2:preVal.q2,
                        q3:preVal.q3,
                        q4:preVal.q4,
                        q5:preVal.q5,
                        q6:preVal.q6,
                        q7:value,
                        q8:preVal.q8
                        
                    })
            }else if(name==="Q8"){
                return(
                    {   
                        
                        name:preVal.name,
                        q1:preVal.q1,
                        q2:preVal.q2,
                        q3:preVal.q3,
                        q4:preVal.q4,
                        q5:preVal.q5,
                        q6:preVal.q6,
                        q7:preVal.q7,
                        q8:value
                        
                    })
            }
        })

    }

    function responsePostHandler(event){
        axios.post("/response",{id:ID,data:inputValue})
        .then((res) =>{
            console.log("Done")
        })
        .then(()=>{setIsSubmitted(true)})
        event.preventDefault()
        
    }
    

    useEffect(()=>{
       getName() 
       setInterval(setLoading(false),2000)
       // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

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
                    <form autocomplete="off" onSubmit={responsePostHandler}>
                    <Carousel fade="true" >
                    <Carousel.Item interval={10000}>
                        <div className="d-block w-100"><div className="slideDiv"> <TextField onChange={onChangeEventHandler} value={inputValue.name} name="username" color="primary" label="Enter your name" autoFocus="true" id="outlined-basic" variant="outlined" /></div></div>
                            <Carousel.Caption>
                            <h3>Detail</h3>
                            <p>Please enter your name<br/><br/></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    <Carousel.Item interval={10000}>
                        <div className="d-block w-100"><div className="slideDiv"> <TextField onChange={onChangeEventHandler} value={inputValue.Q1} name="Q1" color="primary" label="Type your answer" autoFocus="true" id="outlined-basic" variant="outlined" /></div></div>
                            <Carousel.Caption>
                            <h3>1st Question</h3>
                            <p>What will be your first act if you get 1M dollar?<br/><br/></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={10000}>
                        <div className="d-block w-100"><div  className="slideDiv"> <TextField onChange={onChangeEventHandler} value={inputValue.Q2} name="Q2" color="primary" label="Type your answer" autoFocus="true" id="outlined-basic" variant="outlined" /></div></div>
                            <Carousel.Caption>
                            <h3>2nd Question</h3>
                            <p>What will you do if you're appointed as a supreme politician?</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={10000}>
                        <div className="d-block w-100"><div className="slideDiv"> <TextField onChange={onChangeEventHandler} value={inputValue.Q3}  name="Q3" color="primary" label="Type your answer" autoFocus="true" id="outlined-basic" variant="outlined" /></div></div>
                            <Carousel.Caption>
                            <h3>3rd Question</h3>
                            <p>If god decides to give you a boon, what would you ask him?</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={10000}>
                        <div className="d-block w-100"><div className="slideDiv"> <TextField onChange={onChangeEventHandler} value={inputValue.Q4} name="Q4" color="primary" label="Type your answer" autoFocus="true" id="outlined-basic" variant="outlined" /></div></div>
                            <Carousel.Caption>
                            <h3>4th Question</h3>
                            <p>If you get a time machine, with whom you wanna spend some time?</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={10000}>
                        <div className="d-block w-100"><div className="slideDiv"> <TextField onChange={onChangeEventHandler} value={inputValue.Q5} name="Q5" color="primary" label="Type your answer" autoFocus="true" id="outlined-basic" variant="outlined" /></div></div>
                            <Carousel.Caption>
                            <h3>5th Question </h3>
                            <p>What you'll do when you're frustrated to the core<br/><br/></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={10000}>
                        <div className="d-block w-100"><div className="slideDiv"> <TextField onChange={onChangeEventHandler} value={inputValue.Q6} name="Q6" color="primary" label="Type your answer" autoFocus="true" id="outlined-basic" variant="outlined" /></div></div>
                            <Carousel.Caption>
                            <h3>6th Question</h3>
                            <p>How will you spend the last day of your life? <br/><br/> </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={10000}>
                        <div className="d-block w-100"><div className="slideDiv"> <TextField onChange={onChangeEventHandler} value={inputValue.Q7} name="Q7" color="primary" label="Type your answer" autoFocus="true" id="outlined-basic" variant="outlined" /></div></div>
                            <Carousel.Caption>
                            <h3>7th Question</h3>
                            <p>If you got a chance to sneek into a person's secret life who would it be?</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={10000}>
                        <div className="d-block w-100"><div className="slideDiv"> <TextField onChange={onChangeEventHandler} value={inputValue.Q8} name="Q8" color="primary" label="Type your answer" autoFocus="true" id="outlined-basic" variant="outlined" /></div></div>
                            <Carousel.Caption>
                            <h3>8th Question</h3>
                            <p>If you had three wishes for me, what would it be? <br/><br/></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={10000}>
                        <div className="d-block w-100"><div className="slideDiv">{isSubmitted? <Link to={`/home/${ID}/${userName}/ThankU`}> <Button type="button" className="slideButton">Next</Button> </Link>:<Button type="submit" className="slideButton">Submit</Button>}</div></div>
                            <Carousel.Caption>
                            <h3>Completed </h3>
                            <p>Yo buddy smash the submit button <br/> <br/></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    </form>
                </div>
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
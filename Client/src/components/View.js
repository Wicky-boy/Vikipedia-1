
import React,{useState,useEffect} from "react"
import {Container,Row,Col,Button} from "react-bootstrap"
import viewSVG from "../image/viewSVG.svg"
import ViewItem from "./ViewItem.js"
import axios from "axios"
import {Link} from "react-router-dom"

function View(match){
    const id = match.match.params.id
    const index = match.match.params.index
    const [userResponse,setUserResponse] = useState({})
    
    useEffect(()=>{
        getResponse()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    function getResponse(){
        axios.post("/home",{id:id})
        .then((res)=>{
            setUserResponse(res.data.response[index])
        })
    }



    return(
        <Container className="viewContainer">
        <div>
        <Row xs={1} md={2}>
                <Col>
                <div className="customPadding">
                    <h1 className="heading">{userResponse.name}'s response</h1>
                    <p className="para">hmmm, seems interesting ? </p>
                    <Link to={`/home/${id}`}><Button className="thanksButton">Back 2 Home</Button></Link>
                    <div className="viewDiv">
                        <ViewItem question="What will be your first act if you get 1M dollar?" answer={userResponse.q1} />
                        <ViewItem question="What will you do if you're appointed as a supreme politician?" answer={userResponse.q2} />
                        <ViewItem question="If god decides to give you a boon, what would you ask him?" answer={userResponse.q3} />
                        <ViewItem question="If you get a time machine, with whom you wanna spend some time?" answer={userResponse.q4} />
                        <ViewItem question="What you'll do when you're frustrated to the core" answer={userResponse.q5} />
                        <ViewItem question="How will you spend the last day of your life? " answer={userResponse.q6} />
                        <ViewItem question="If you got a chance to sneek into a person's secret life who would it be?" answer={userResponse.q7} />
                        <ViewItem question="If you had three wishes for me, what would it be?" answer={userResponse.q8} />
                    </div>

                </div>
                </Col>
                <Col>
                    <img
                    className="colImage"
                        src={viewSVG}
                        alt=""
                     />
                </Col>
            </Row> 
        </div>

        </Container>
    )
}

export default View;
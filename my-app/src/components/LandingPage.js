import React from "react";
import {Button,Container,Row,Col} from 'react-bootstrap';
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import homepageVector from "../image/homepageVector.svg";
import parthiPFP from "../image/parthi.JPG"
import DharaniPFP from "../image/Dharani.jpeg"
import {Link} from "react-router-dom";
import shareYourOpinion from "../image/shareYourOpinion.svg"
import { useState,useEffect } from "react";



function LandingPage(){

    const [userOpinion,setUserOpinion] = useState("");
    const [isSubmitted,setIsSubmitted] = useState(false)

    function onSubmitEventHandler(event){
        event.preventDefault()
        console.log(userOpinion)
        axios.post("/opinion",{opinion:userOpinion})
        .then((response)=>{
            console.log(response.data)
        })
        .catch((err) =>{console.log(err)})
        setIsSubmitted(true)
        
    }
    
    function onChangeEventHandler(event){
        
        const value = event.target.value
        console.log(value)
        setUserOpinion(value)
    }

    useEffect(()=>{
      console.log("Landing page loaded successfully")
   })

    return (
    <section>
  
   
    <section className="firstViewPage">
    <Container className="homepageContainer">
      <Row xs={1} md={2}>
        <Col>
        <div>
        <h1 className="heading homepageHeading">Vikipedia™</h1>
        <h2 className="subHeading">This new slam site</h2>
        <p className="para">Hey yo, This is new project which deals with Ultra popular React Framework , Express which is  one of the Node.js's popular Framework and MongoDB which allows you to store upto 512MB in cloud for free of costs  </p>
        <Link to="/register">
            <Button className="btn navButton" as="input" type="button" value="Register now" />
        </Link>
      </div>
      </Col>
      <Col >
      <div >
      <img className="homepageVector" src={homepageVector} alt="homeImageVector"></img>
      </div>
      </Col>
      </Row>
      </Container>
    </section>
    
    
    
    <section className="secondViewPage">
    <Container className="homepageContainer2">
      <div className="homePage2">
          <h1 className="navTitle supporters">Thanks for the supporters</h1>
      </div>
      <div className="cardRow">
      <Row  xs={1} md={2}>
        <Col>
          <div className="card1">
            <img className="cardImage" src={parthiPFP} alt="" />
            <p className="para cardHeading">Parthiban_Raj</p>
            <a className="followButton" target="_blank" rel="noreferrer" href="https://www.instagram.com/im_parthiban_raj/" ><button className="btn cardButton" as="input" type="button"><i class="fab fa-instagram"></i> Follow</button></a>
          </div>
        </Col>
        <Col>
        <div className="card1">
            <img className="cardImage1" src={DharaniPFP} alt="" />
            <p className="para cardHeading">Dharani_Dharan</p>
            <a className="followButton" target="_blank" rel="noreferrer" href="https://www.instagram.com/dharaniindira_/?igshid=1gjttfqxkec04" ><button className="btn cardButton" as="input" type="button"><i class="fab fa-instagram"></i> Follow</button></a>
            
          </div>
        </Col>
      </Row>
      </div>
      </Container>
    </section>
    
    
    
    <section className="thirdViewPage">
    <Container >
        <div>
            <Row xs={1} md={2}>
                <Col>
                    <div className="thirdViewPageContainer1">
                    <img 
                        className="shareYourOpinionSvg"
                        src={shareYourOpinion}
                        alt=""
                    />
                    </div>
                </Col>
                <Col>
                    <div className="opinionText">
                        <h1 className="heading">Thanks for visiting</h1>
                        <p className="para">If you like to help us to improve ,then feel free to share your opinion below <br/> [e.g: yourname : your opinion ]</p>
                        
                       {
                         isSubmitted?
                         
                          <p class="para">Your feedback has been recorded</p>
                         :
                         <form onSubmit={onSubmitEventHandler} autocomplete="off">
                         <TextField onChange={onChangeEventHandler} id="outlined-basic" className="opinionInputBox" label="Share your thoughts" variant="outlined" />
                         <Button className="OpinionButton" type="submit">Submit</Button>
                         </form>
                       }
                        
                    </div>
                    
                </Col>
            </Row>
        </div>
    </Container>

    </section>
  </section>)
  }

  export default LandingPage;
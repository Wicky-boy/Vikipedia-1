import axios from "axios"
import React, { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import {Container,Row,Col,Button} from "react-bootstrap"
import personalDetailsSVG from "../image/personalDetails.svg"
import Preloader from "./Preloader.js"
function Home(match){
    const ID = match.match.params.id

    const [userName,setUserName] = useState("")
    const [userAnswers,setUserAnswers] = useState([])
    const [loading ,setLoading] = useState(true)

    function getDetails(){
        axios.post("/home",{id:ID})
        .then((response) =>{
            // console.log(response.data)
            setUserName(response.data.username)
            setUserAnswers(response.data.response)
            setLoading(false)
            
        })
    }
    useEffect(() =>{
        getDetails()
    })

    return(
    <div>{loading?<Preloader/> :
     <Container className="personalDetails">
    <div>
        <Row xs={1} md={2}>
            <Col>
            <div className="customPadding">
            <h1 className="heading">Hey, Yo {userName}</h1>
            <p className="para">Now you can create new slam and share them with your firends and you could able to see their score in the table</p>
            <Link to={`/home/${ID}/${userName}/create`}>
            <Button className="btn navButton">Create New</Button>
            </Link>
            <div className="tablesDiv">
            <h2 className="subHeading responseHeading">Response </h2>
            
            {userAnswers.length>0?<div className="tablesItemDiv">
                    {
                userAnswers.map((item,index) =>{  
                return( 
                    <div className="homeResponseItemDiv" key={index}>
                    <div className="homeResponseNameDiv">
                         <h3 className="subHeading homeResponseNameText" style={{fontSize:"20px"}}>{item.name}</h3>
                    </div>
                    <div className="homeResponseViewDiv">
                        <h3  className="homeResponseViewText"><Link to={`/view/${item.name}/${ID}/${index}`}><Button className="homeResponseViewButton">View</Button></Link></h3>
                    </div>
                        
                        
                    </div>
                )
                
            })
            }
                
            </div>:<div>
            <h3 className="itemHeading"> You don't have any responses</h3>
            <p className="para">Tips : Create new slam ,Share them with your friends and then come back!</p>
            </div>}
            
            </div>
            </div>
            </Col>

            <Col>
            <div>
                <img 
                className="personalDetailsSVG"
                src={personalDetailsSVG}
                alt=""
                />
            </div>
            </Col>
        </Row>

    </div>
    
    </Container>}</div>
    );

}

export default Home;

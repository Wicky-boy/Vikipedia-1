import axios from "axios"
import React, { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import {Container,Row,Col,Button} from "react-bootstrap"
import Table from 'react-bootstrap/Table'
import personalDetailsSVG from "../image/personalDetails.svg"
import Preloader from "./Preloader.js"
function Home(match){
    const ID = match.match.params.id
    useEffect(() =>{
        getDetails()
    })
    const [userName,setUserName] = useState("")
    const [userAnswers,setUserAnswers] = useState([])
    const [loading ,setLoading] = useState(true)

    function getDetails(){
        axios.post("/home",{id:ID})
        .then((response) =>{
            // console.log(response.data)
            setUserName(response.data.username)
            setUserAnswers(response.data.response)
        
        })
        .then((res) =>{setLoading(false)})
    }
    return(
    <div>{loading?<Preloader/> :
     <Container className="personalDetails">
    <div >
        <Row xs={1} md={2}>
            <Col>
            <h1 className="heading">Hey, Yo {userName}</h1>
            <p className="para">Now you can create new slam and share them with your firends and you could able to see their score in the table</p>
            <Link to={`/home/${ID}/create`}>
            <Button className="btn navButton">Create New</Button>
            </Link>
            <div className="">
            <h2 className="subHeading responseHeading">Response </h2>
            
            {userAnswers.length>1?<div className="tablesDiv">
            <Table className="scrollableTable" striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {
                userAnswers.map((item,index) =>{  
                return( 
                    <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.Name}</td>
                    <td>{item.score}</td>
                    </tr>)
                
            })
            }
                </tbody>
            </Table>
            </div>:<div>
            <h3 className="itemHeading"> You don't have any responses</h3>
            <p className="para">Tips : Create new slam ,Share them with your friends and then come back!</p>
            </div>}
            
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

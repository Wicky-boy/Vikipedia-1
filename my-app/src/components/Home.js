import axios from "axios"
import React, { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import {Container,Row,Col,Button} from "react-bootstrap"
import Table from 'react-bootstrap/Table'
import personalDetailsSVG from "../image/personalDetails.svg"
import Preloader from "./Preloader.js"
function Home(match){
    const ID = match.match.params.id

    const [userName,setUserName] = useState("")
    const [userAnswers,setUserAnswers] = useState([])
    const [loading ,setLoading] = useState(true)
    const [singleReq,setSingleReq] =useState(true)

    function getDetails(){
        axios.post("/home",{id:ID})
        .then((response) =>{
            // console.log(response.data)
            setUserName(response.data.username)
            setUserAnswers(response.data.response)
            setLoading(false)
            setSingleReq(false)
        
        })
    }
    useEffect(() =>{
        if(singleReq){
            getDetails()
        }
    })

    return(
    <div>{loading?<Preloader/> :
     <Container className="personalDetails">
    <div >
        <Row xs={1} md={2}>
            <Col>
            <h1 className="heading">Hey, Yo {userName}</h1>
            <p className="para">Now you can create new slam and share them with your firends and you could able to see their score in the table</p>
            <Link to={`/home/${ID}/${userName}/create`}>
            <Button className="btn navButton">Create New</Button>
            </Link>
            <div className="">
            <h2 className="subHeading responseHeading">Response </h2>
            
            {userAnswers.length>0?<div className="tablesDiv">
            <Table className="scrollableTable" striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Details</th>
                    </tr>
                </thead>

                    {
                userAnswers.map((item,index) =>{  
                return( 
                    <tbody>
                        <tr>
                        <td></td>
                        </tr>
                        <tr key={index}>
                        <td>Your Name </td>
                        <td>{item.name}</td>
                        </tr>
                        <tr>
                        <td>What will be your first act if you get 1M dollar? </td>
                        <td>{item.q1}</td>
                        </tr>
                        <tr>
                        <td>What will you do if you're appointed as a supreme politician? </td>
                        <td>{item.q2}</td>
                        </tr>
                        <tr>
                        <td>If god decides to give you a boon, what would you ask him? </td>
                        <td>{item.q3}</td>
                        </tr>
                        <tr>
                        <td>If you get a time machine, with whom you wanna spend some time?</td>
                        <td>{item.q4}</td>
                        </tr>
                        <tr>
                        <td>What you'll do when you're frustrated to the core </td>
                        <td>{item.q5}</td>
                        </tr>
                        <tr>
                        <td>How will you spend the last day of your life?  </td>
                        <td>{item.q6}</td>
                        </tr>
                        <tr>
                        <td>If you got a chance to sneek into a person's secret life who would it be? </td>
                        <td>{item.q7}</td>
                        </tr>
                        <tr>
                        <td>If you had three wishes for me, what would it be?</td>
                        <td>{item.q8}</td>
                        </tr>
                        <tr>
                        <td></td>
                        </tr>
                    </tbody>)
                
            })
            }
                
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

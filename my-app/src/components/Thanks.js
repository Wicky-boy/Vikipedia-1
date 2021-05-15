import React from "react"
import {Container,Row,Col,Button} from "react-bootstrap"
import Superthankyou from "../image/Superthankyou.svg"
import {Link} from "react-router-dom"

function Thanks(){
    return(
        <Container className="thanksContainer">
            <div className="thanksDiv">
                <Row xs={1} md={2}>
                <Col>
                    <div className="thanksColDiv">
                        <img 
                            src={Superthankyou}
                            className="colImage"
                            alt=""
                        />
                    </div>
                </Col>
                <Col>
                <div className="thanksColDiv thanksColText">
                    <h1 className="subHeading">Your response has been received.</h1>
                    <p className="para">If you want to create your let me know about you app ,then get back to home page and create a account</p>
                    <Link to="/"><Button className="thanksButton">Back to Home</Button></Link>
                </div>
                </Col>
            </Row> 
            </div>

        </Container>
    )
}

export default Thanks;
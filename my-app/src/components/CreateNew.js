import axios from "axios";
import React, { useEffect, useState,useRef } from "react";
import {Link} from "react-router-dom";
import {Container,Row,Col,Button,Overlay,Tooltip } from "react-bootstrap"
import createNewSVG from "../image/createNewSVG.svg"

import Preloader from "./Preloader.js"
import Table from 'react-bootstrap/Table'       
import CopyText from "./CopyText.js"

function CreateNew(match){
    const [loading ,setLoading] = useState(true)
    const [show, setShow] = useState(false);
    const target = useRef(null);
    const id = match.match.params.id
    const userName = match.match.params.name
    const path = "https://vikipedia-1.herokuapp.com/#/home/"+String(id)+"/a/"+userName+"/b/"+String(id)+"/response"
    useEffect(()=>{
        console.log(path)
        setInterval(()=>{
            setLoading(false)
        },2000)
    })

    return (<div>{loading?<Preloader/> : <Container className="createPageContainer"> 
            <Row xs={1} md={2} className="createNewRow">
                <Col>
                <h1 className="heading">CreateNew</h1>
                <p className="para" >Click the options and then click submit, After that click next to complete your creation</p>
                <div className="linkClip">
                <div className="linkDiv">
                <input type="text" className="copyTextInput" id="copyText" name="country" value={`https://vikipedia-1.herokuapp.com/#/home/${id}/a/${userName}/b/${id}/response`} readonly></input>
                </div>
                <div >
                <Button ref={target} onClick={() =>{CopyText(path) 
                    setShow(!show)
                   }}  className="clipCopyButton"><i class="far fa-clipboard clipboard"></i></Button>
                <Overlay target={target.current} show={show} placement="top">
                {(props) => (
                    <Tooltip Tooltip id="overlay-example" {...props}>
                        Text copied to the clipboard
                    </Tooltip>
                )}
                </Overlay>

                </div>
                </div>
 
                <div className="createNewDiv">
                <Table className="createNewTable" striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Questions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>What will be your first act if you get 1M dollar?</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>What will you do if you're appointed as a supreme politician?</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>If god decides to give you a boon, what would you ask him?</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>If you get a time machine, with whom you wanna spend some time?</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>If given a chance to be an entrepreneur or placed in a highly paying job, which one you'll choose?</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>How will you spend the last day of your life?</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>If you got a chance to sneek into a person's secret life who would it be?</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>If you had three wishes for me, what would it be?</td>
                        </tr>

                    </tbody>
                </Table>
            </div>
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
import React from "react"

function ViewItem(props){
    return(
        <div className="viewItemDev">
            <div className="viewItemHeader">
                <h3 style={{marginBottom:"0px",fontSize:"18px"}}>{props.question}</h3>
                <hr />
                <p style={{marginBottom:"0px",fontSize:"15px"}}>{props.answer}</p>
            </div>               
        </div>
    )
}

export default ViewItem;
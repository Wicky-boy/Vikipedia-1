import React from "react"
import {SquareLoader} from "react-spinners";


function Preloader(){
    return(
    <div className="preLoaderContainer">
    <div class="Preloader">
        <SquareLoader loading />
    </div>  
    </div>);
}

export default Preloader;
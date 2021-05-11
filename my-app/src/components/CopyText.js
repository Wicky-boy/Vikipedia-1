import React from "react"
import $ from "jquery"

function CopyText(path){
    $(".clipboardDiv").css("background-color","#0052aa");
    const elem = document.createElement('textarea');
    elem.value = path;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
}

export default CopyText;
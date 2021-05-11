import React from "react";
import $ from "jquery"

var i = 0

function selectionButtonFunction2(){
    const item = $(".selectionButton1")
    function eventHandler(event){
        
        const questionNumber = event.path[0].name
        const options = event.path[0].innerHTML
        if(questionNumber === "q1"){
            if(options === "Apple Iphone"){
                $(".appleIphone1").addClass("selectedbutton1")
                $(".android1").attr("disabled",true)
                $(".nokia11001").attr("disabled",true)
                $(".windows1").attr("disabled",true)
            }else if(options === "Android"){
                $(".android1").addClass("selectedbutton1")
                $(".appleIphone1").attr("disabled",true)
                $(".nokia11001").attr("disabled",true)
                $(".windows1").attr("disabled",true)
            }else if(options === "Nokia 1100"){
                $(".nokia11001").addClass("selectedbutton1")
                $(".android1").attr("disabled",true)
                $(".appleIphone1").attr("disabled",true)
                $(".windows1").attr("disabled",true)
            }else if(options === "Windows"){
                $(".windows1").addClass("selectedbutton1")
                $(".android1").attr("disabled",true)
                $(".nokia11001").attr("disabled",true)
                $(".appleIphone1").attr("disabled",true)
            }
        }else if(questionNumber === "q2"){
            if(options === "Non-Veg"){
                $(".nonVeg1").addClass("selectedbutton1")
                $(".veg1").attr("disabled",true)
            }else if(options === "Veg"){
                $(".veg1").addClass("selectedbutton1")
                $(".nonVeg1").attr("disabled",true)
            }
        }else if(questionNumber === "q3"){
            if(options === "Romance"){
                $(".romance1").addClass("selectedbutton1")
                $(".horror1").attr("disabled",true)
                $(".action1").attr("disabled",true)
                $(".comedy1").attr("disabled",true)
                $(".fantasy1").attr("disabled",true)
                $(".anythingElse1").attr("disabled",true)
            }else if(options === "Horror"){
                $(".horror1").addClass("selectedbutton1")
                $(".romance1").attr("disabled",true)
                $(".action1").attr("disabled",true)
                $(".comedy1").attr("disabled",true)
                $(".fantasy1").attr("disabled",true)
                $(".anythingElse1").attr("disabled",true)
            }else if(options === "Action"){
                $(".action1").addClass("selectedbutton1")
                $(".horror1").attr("disabled",true)
                $(".romance1").attr("disabled",true)
                $(".comedy1").attr("disabled",true)
                $(".fantasy1").attr("disabled",true)
                $(".anythingElse1").attr("disabled",true)
            }else if(options === "Comedy"){
                $(".comedy1").addClass("selectedbutton1")
                $(".horror1").attr("disabled",true)
                $(".action1").attr("disabled",true)
                $(".romance1").attr("disabled",true)
                $(".fantasy1").attr("disabled",true)
                $(".anythingElse1").attr("disabled",true)
            }else if(options === "Fantasy"){
                $(".fantasy1").addClass("selectedbutton1")
                $(".horror1").attr("disabled",true)
                $(".action1").attr("disabled",true)
                $(".comedy1").attr("disabled",true)
                $(".romance1").attr("disabled",true)
                $(".anythingElse1").attr("disabled",true)
            }else if(options === "Anything else"){
                $(".anythingElse1").addClass("selectedbutton1")
                $(".horror1").attr("disabled",true)
                $(".action1").attr("disabled",true)
                $(".comedy1").attr("disabled",true)
                $(".fantasy1").attr("disabled",true)
                $(".romance1").attr("disabled",true)
            }
        }else if(questionNumber === "q4"){
            console.log(questionNumber)
            if(options === "Bike"){
                $(".Bike1").addClass("selectedbutton1")
                $(".Bicycle1").attr("disabled",true)
                $(".Bus1").attr("disabled",true)
                $(".Train1").attr("disabled",true)
                $(".Car1").attr("disabled",true)
                $(".Flight1").attr("disabled",true)
        
            }else if(options === "Bicycle"){
                $(".Bicycle1").addClass("selectedbutton1")
                $(".Bike1").attr("disabled",true)
                $(".Bus1").attr("disabled",true)
                $(".Train1").attr("disabled",true)
                $(".Car1").attr("disabled",true)
                $(".Flight1").attr("disabled",true)
            }else if(options === "Bus"){
                $(".Bus1").addClass("selectedbutton1")
                $(".Bicycle1").attr("disabled",true)
                $(".Bike1").attr("disabled",true)
                $(".Train1").attr("disabled",true)
                $(".Car1").attr("disabled",true)
                $(".Flight1").attr("disabled",true)
            }else if(options === "Train"){
                $(".Train1").addClass("selectedbutton1")
                $(".Bicycle1").attr("disabled",true)
                $(".Bus1").attr("disabled",true)
                $(".Bike1").attr("disabled",true)
                $(".Car1").attr("disabled",true)
                $(".Flight1").attr("disabled",true)
            }else if(options === "Car"){
                $(".Car1").addClass("selectedbutton1")
                $(".Bicycle1").attr("disabled",true)
                $(".Bus1").attr("disabled",true)
                $(".Train1").attr("disabled",true)
                $(".Bike1").attr("disabled",true)
                $(".Flight1").attr("disabled",true)
            }else if(options === "Flight"){
                $(".Flight1").addClass("selectedbutton1")
                $(".Bicycle1").attr("disabled",true)
                $(".Bus1").attr("disabled",true)
                $(".Train1").attr("disabled",true)
                $(".Car1").attr("disabled",true)
                $(".Bike1").attr("disabled",true)
            }
        }else if(questionNumber === "q5"){
            console.log(questionNumber)
            if(options === "Listening Music"){
                $(".listeningMusic1").addClass("selectedbutton1")
                $(".goForDrive1").attr("disabled",true)
                $(".Sleeping1").attr("disabled",true)
                $(".Reading1").attr("disabled",true)
            }else if(options === "Go for Drive"){
                $(".goForDrive1").addClass("selectedbutton1")
                $(".listeningMusic1").attr("disabled",true)
                $(".Sleeping1").attr("disabled",true)
                $(".Reading1").attr("disabled",true)
            }else if(options === "Sleeping"){
                $(".Sleeping1").addClass("selectedbutton1")
                $(".listeningMusic1").attr("disabled",true)
                $(".goForDrive1").attr("disabled",true)
                $(".Reading1").attr("disabled",true)
            }else if(options === "Reading"){
                $(".Reading1").addClass("selectedbutton1")
                $(".listeningMusic1").attr("disabled",true)
                $(".goForDrive1").attr("disabled",true)
                $(".Sleeping1").attr("disabled",true)
            }
        }else if(questionNumber === "q6"){
            console.log(questionNumber)
            if(options === "Yes"){
                $(".Yes1").addClass("selectedbutton1")
                $(".No1").attr("disabled",true)
            }else if(options === "No"){
                $(".No1").addClass("selectedbutton1")
                $(".Yes1").attr("disabled",true)
            }
        }else if(questionNumber === "q7"){
            console.log(questionNumber)
            if(options ==="Pose"){
                $(".Pose1").addClass("selectedbutton1")
                $(".Selfi1").attr("disabled",true)
            }else if(options === "Selfi"){
                $(".Selfi1").addClass("selectedbutton1")
                $(".Pose1").attr("disabled",true)
            }
        }else if(questionNumber === "q8"){
            console.log(questionNumber)
            if(options ==="Traditional"){
                $(".Traditional1").addClass("selectedbutton1")
                $(".onlineShopping1").attr("disabled",true)
            }else if(options === "Online Shopping"){
                $(".onlineShopping1").addClass("selectedbutton1")
                $(".Traditional1").attr("disabled",true)
            }
        }
    }
    for(i;i<item.length;i++){
        item[i].addEventListener("click",(event)=>{
            eventHandler(event)
        });
    }

}


export default selectionButtonFunction2;
import $ from "jquery"

var i = 0

function selectionButtonFunction(){
    const item = $(".selectionButton")
    function eventHandler(event){
        
        const questionNumber = event.path[0].name
        const options = event.path[0].innerHTML
        if(questionNumber === "q1"){
            if(options === "Apple Iphone"){
                $(".appleIphone").addClass("selectedbutton")
                $(".android").attr("disabled",true)
                $(".nokia1100").attr("disabled",true)
                $(".windows").attr("disabled",true)
            }else if(options === "Android"){
                $(".android").addClass("selectedbutton")
                $(".appleIphone").attr("disabled",true)
                $(".nokia1100").attr("disabled",true)
                $(".windows").attr("disabled",true)
            }else if(options === "Nokia 1100"){
                $(".nokia1100").addClass("selectedbutton")
                $(".android").attr("disabled",true)
                $(".appleIphone").attr("disabled",true)
                $(".windows").attr("disabled",true)
            }else if(options === "Windows"){
                $(".windows").addClass("selectedbutton")
                $(".android").attr("disabled",true)
                $(".nokia1100").attr("disabled",true)
                $(".appleIphone").attr("disabled",true)
            }
        }else if(questionNumber === "q2"){
            if(options === "Non-Veg"){
                $(".nonVeg").addClass("selectedbutton")
                $(".veg").attr("disabled",true)
            }else if(options === "Veg"){
                $(".veg").addClass("selectedbutton")
                $(".nonVeg").attr("disabled",true)
            }
        }else if(questionNumber === "q3"){
            if(options === "Romance"){
                $(".romance").addClass("selectedbutton")
                $(".horror").attr("disabled",true)
                $(".action").attr("disabled",true)
                $(".comedy").attr("disabled",true)
                $(".fantasy").attr("disabled",true)
                $(".anythingElse").attr("disabled",true)
            }else if(options === "Horror"){
                $(".horror").addClass("selectedbutton")
                $(".romance").attr("disabled",true)
                $(".action").attr("disabled",true)
                $(".comedy").attr("disabled",true)
                $(".fantasy").attr("disabled",true)
                $(".anythingElse").attr("disabled",true)
            }else if(options === "Action"){
                $(".action").addClass("selectedbutton")
                $(".horror").attr("disabled",true)
                $(".romance").attr("disabled",true)
                $(".comedy").attr("disabled",true)
                $(".fantasy").attr("disabled",true)
                $(".anythingElse").attr("disabled",true)
            }else if(options === "Comedy"){
                $(".comedy").addClass("selectedbutton")
                $(".horror").attr("disabled",true)
                $(".action").attr("disabled",true)
                $(".romance").attr("disabled",true)
                $(".fantasy").attr("disabled",true)
                $(".anythingElse").attr("disabled",true)
            }else if(options === "Fantasy"){
                $(".fantasy").addClass("selectedbutton")
                $(".horror").attr("disabled",true)
                $(".action").attr("disabled",true)
                $(".comedy").attr("disabled",true)
                $(".romance").attr("disabled",true)
                $(".anythingElse").attr("disabled",true)
            }else if(options === "Anything else"){
                $(".anythingElse").addClass("selectedbutton")
                $(".horror").attr("disabled",true)
                $(".action").attr("disabled",true)
                $(".comedy").attr("disabled",true)
                $(".fantasy").attr("disabled",true)
                $(".romance").attr("disabled",true)
            }
        }else if(questionNumber === "q4"){
            console.log(questionNumber)
            if(options === "Bike"){
                $(".Bike").addClass("selectedbutton")
                $(".Bicycle").attr("disabled",true)
                $(".Bus").attr("disabled",true)
                $(".Train").attr("disabled",true)
                $(".Car").attr("disabled",true)
                $(".Flight").attr("disabled",true)
        
            }else if(options === "Bicycle"){
                $(".Bicycle").addClass("selectedbutton")
                $(".Bike").attr("disabled",true)
                $(".Bus").attr("disabled",true)
                $(".Train").attr("disabled",true)
                $(".Car").attr("disabled",true)
                $(".Flight").attr("disabled",true)
            }else if(options === "Bus"){
                $(".Bus").addClass("selectedbutton")
                $(".Bicycle").attr("disabled",true)
                $(".Bike").attr("disabled",true)
                $(".Train").attr("disabled",true)
                $(".Car").attr("disabled",true)
                $(".Flight").attr("disabled",true)
            }else if(options === "Train"){
                $(".Train").addClass("selectedbutton")
                $(".Bicycle").attr("disabled",true)
                $(".Bus").attr("disabled",true)
                $(".Bike").attr("disabled",true)
                $(".Car").attr("disabled",true)
                $(".Flight").attr("disabled",true)
            }else if(options === "Car"){
                $(".Car").addClass("selectedbutton")
                $(".Bicycle").attr("disabled",true)
                $(".Bus").attr("disabled",true)
                $(".Train").attr("disabled",true)
                $(".Bike").attr("disabled",true)
                $(".Flight").attr("disabled",true)
            }else if(options === "Flight"){
                $(".Flight").addClass("selectedbutton")
                $(".Bicycle").attr("disabled",true)
                $(".Bus").attr("disabled",true)
                $(".Train").attr("disabled",true)
                $(".Car").attr("disabled",true)
                $(".Bike").attr("disabled",true)
            }
        }else if(questionNumber === "q5"){
            console.log(questionNumber)
            if(options === "Listening Music"){
                $(".listeningMusic").addClass("selectedbutton")
                $(".goForDrive").attr("disabled",true)
                $(".Sleeping").attr("disabled",true)
                $(".Reading").attr("disabled",true)
            }else if(options === "Go for Drive"){
                $(".goForDrive").addClass("selectedbutton")
                $(".listeningMusic").attr("disabled",true)
                $(".Sleeping").attr("disabled",true)
                $(".Reading").attr("disabled",true)
            }else if(options === "Sleeping"){
                $(".Sleeping").addClass("selectedbutton")
                $(".listeningMusic").attr("disabled",true)
                $(".goForDrive").attr("disabled",true)
                $(".Reading").attr("disabled",true)
            }else if(options === "Reading"){
                $(".Reading").addClass("selectedbutton")
                $(".listeningMusic").attr("disabled",true)
                $(".goForDrive").attr("disabled",true)
                $(".Sleeping").attr("disabled",true)
            }
        }else if(questionNumber === "q6"){
            console.log(questionNumber)
            if(options === "Yes"){
                $(".Yes").addClass("selectedbutton")
                $(".No").attr("disabled",true)
            }else if(options === "No"){
                $(".No").addClass("selectedbutton")
                $(".Yes").attr("disabled",true)
            }
        }else if(questionNumber === "q7"){
            console.log(questionNumber)
            if(options ==="Pose"){
                $(".Pose").addClass("selectedbutton")
                $(".Selfi").attr("disabled",true)
            }else if(options === "Selfi"){
                $(".Selfi").addClass("selectedbutton")
                $(".Pose").attr("disabled",true)
            }
        }else if(questionNumber === "q8"){
            console.log(questionNumber)
            if(options ==="Traditional"){
                $(".Traditional").addClass("selectedbutton")
                $(".onlineShopping").attr("disabled",true)
            }else if(options === "Online Shopping"){
                $(".onlineShopping").addClass("selectedbutton")
                $(".Traditional").attr("disabled",true)
            }
        }
    }
    for(i;i<item.length;i++){
        item[i].addEventListener("click",(event)=>{
            eventHandler(event)
        });
    }

}


export default selectionButtonFunction;
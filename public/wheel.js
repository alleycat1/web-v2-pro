var pageNum = 0;
//objNames = ["line1_", "line2_", "line3_", "mark1_", "mark2_", "image1_", "image2_", "image3_"];
var objNames = [
    "bg1", "area1", 
    "image1", "image2", "image3", "image4", "image5", "image6", "image7",
    "mark1", "mark2", 
    "label1", "label2", "label3", "label4", "label5", "label6",
    "line1", "line2", "line3", "line4"
];

var layerData = [
    {//0
        "bg1":{
            "left":"0%",
            "top":"0%"
        },
        "line1":{
            "left":"70%",
            "top":"60%"
        },
        "area1":{
            "left":"75%",
            "top":"60%"
        },
        "image1":{
            "left":"40%",
            "top":"110%"
        },
        "label1":{
            "left":"40%",
            "top":"100%"
        },
    },
    {//1
        "bg1":{
            "left":"0%",
            "top":"0%"
        },
        "line1":{
            "left":"70%",
            "top":"0%"
        },
        "area1":{
            "left":"75%",
            "top":"0%"
        },
        "image1":{
            "left":"40%",
            "top":"20%"
        },
        "label1":{
            "left":"40%",
            "top":"10%"
        },
        "label2":{
            "left":"100%",
            "top":"30%"
        },
    },
    {//2
        "bg1":{
            "left":"0%",
            "top":"0%"
        },
        "line1":{
            "left":"70%",
            "top":"0%"
        },
        "area1":{
            "left":"75%",
            "top":"0%"
        },
        "image1":{
            "left":"40%",
            "top":"10%"
        },
        "label1":{
            "left":"30%",
            "top":"-50%"
        },
        "label2":{
            "left":"45%",
            "top":"30%"
        },
        "image2":{
            "left":"100%",
            "top":"30%"
        },
        "label3":{
            "left":"130%",
            "top":"30%"
        },
    },
    {//3
        "bg1":{
            "left":"0%",
            "top":"0%"
        },
        "line1":{
            "left":"70%",
            "top":"0%"
        },
        "area1":{
            "left":"75%",
            "top":"0%"
        },
        "image1":{
            "left":"-20%",
            "top":"120%"
        },
        "label2":{
            "left":"-25%",
            "top":"100%"
        },
        "image2":{
            "left":"20%",
            "top":"10%"
        },
        "label3":{
            "left":"45%",
            "top":"30%"
        },
        "image3":{
            "left":"100%",
            "top":"30%"
        },
        "label4":{
            "left":"130%",
            "top":"30%"
        },
    },
    {//4
        "bg1":{
            "left":"0%",
            "top":"0%"
        },
        "line1":{
            "left":"70%",
            "top":"0%"
        },
        "area1":{
            "left":"75%",
            "top":"0%"
        },
        "image2":{
            "left":"-20%",
            "top":"120%"
        },
        "label3":{
            "left":"-25%",
            "top":"100%"
        },
        "image3":{
            "left":"20%",
            "top":"10%"
        },
        "label4":{
            "left":"45%",
            "top":"30%"
        },
        "image4":{
            "left":"100%",
            "top":"30%"
        },
        "label5":{
            "left":"130%",
            "top":"30%"
        },
    },
    {//5
        "bg1":{
            "left":"0%",
            "top":"0%"
        },
        "line1":{
            "left":"70%",
            "top":"0%"
        },
        "area1":{
            "left":"75%",
            "top":"0%"
        },
        "image3":{
            "left":"-20%",
            "top":"120%"
        },
        "label4":{
            "left":"-25%",
            "top":"100%"
        },
        "image4":{
            "left":"20%",
            "top":"10%"
        },
        "label5":{
            "left":"45%",
            "top":"30%"
        },
        "label6":{
            "left":"35%",
            "top":"100%"
        },
        "line2":{
            "left":"-80%",
            "top":"50%"
        },
    },
    {//6
        "bg1":{
            "left":"0%",
            "top":"-50%"
        },
        "line1":{
            "left":"70%",
            "top":"-50%"
        },
        "area1":{
            "left":"75%",
            "top":"-50%"
        },
        "image4":{
            "left":"20%",
            "top":"-40%"
        },
        "label5":{
            "left":"45%",
            "top":"-40%"
        },
        "label6":{
            "left":"35%",
            "top":"70%"
        },
        "image5":{
            "left":"100%",
            "top":"80%"
        },
        "line2":{
            "left":"-40%",
            "top":"50%"
        },
        "line3":{
            "left":"65%",
            "top":"-50%"
        },
        "line4":{
            "left":"65%",
            "top":"0%"
        },
        "mark1":{
            "left":"-50%",
            "top":"50%"
        },
        "mark2":{
            "left":"100%",
            "top":"80%"
        },
    },
    {//7
        "bg1":{
            "left":"0%",
            "top":"-110%"
        },
        "line1":{
            "left":"70%",
            "top":"-110%"
        },
        "area1":{
            "left":"75%",
            "top":"-110%"
        },
        "image4":{
            "left":"20%",
            "top":"-100%"
        },
        "label5":{
            "left":"45%",
            "top":"-80%"
        },
        "label6":{
            "left":"45%",
            "top":"-50%"
        },
        "image5":{
            "left":"35%",
            "top":"25%"
        },
        "line2":{
            "left":"0%",
            "top":"0%"
        },
        "line3":{
            "left":"35%",
            "top":"0%"
        },
        "line4":{
            "left":"65%",
            "top":"0%"
        },
        "mark1":{
            "left":"5%",
            "top":"50%"
        },
        "mark2":{
            "left":"15%",
            "top":"80%"
        },
        "image6":{
            "left":"100%",
            "top":"25%"
        },
    },
    {//8
        "image5":{
            "left":"-160%",
            "top":"25%"
        },
        "line2":{
            "left":"10%",
            "top":"10%"
        },
        "line3":{
            "left":"25%",
            "top":"0%"
        },
        "line4":{
            "left":"75%",
            "top":"20%"
        },
        "mark1":{
            "left":"35%",
            "top":"50%"
        },
        "mark2":{
            "left":"5%",
            "top":"80%"
        },
        "image6":{
            "left":"35%",
            "top":"25%"
        },
        "image7":{
            "left":"100%",
            "top":"25%"
        },
    },
    {//8
        "image6":{
            "left":"-160%",
            "top":"25%"
        },
        "line2":{
            "left":"0%",
            "top":"0%"
        },
        "line3":{
            "left":"35%",
            "top":"0%"
        },
        "line4":{
            "left":"65%",
            "top":"0%"
        },
        "mark1":{
            "left":"35%",
            "top":"50%"
        },
        "mark2":{
            "left":"5%",
            "top":"80%"
        },
        "image7":{
            "left":"35%",
            "top":"25%"
        },
    },
    {//9
        "image7":{
            "left":"35%",
            "top":"-100%"
        },
        "line2":{
            "left":"0%",
            "top":"-100%"
        },
        "line3":{
            "left":"35%",
            "top":"-100%"
        },
        "line4":{
            "left":"65%",
            "top":"-100%"
        },
        "mark1":{
            "left":"15%",
            "top":"-120%"
        },
        "mark2":{
            "left":"25%",
            "top":"-120%"
        },
    },
];

var rollCount = 0;
function wheel(event) {
    event.preventDefault();
    var className;
    var isNext = event.wheelDeltaY < 0;
    if(isNext)
        rollCount++;
    else 
        rollCount --;
    if( rollCount*rollCount < 9 )
        return;
    rollCount = 0;
    
    if (isNext) {
        if (pageNum <= 9)
            pageNum++;
    }
    else {
        if (pageNum > 0)
            pageNum--;
    }
    for(var i=0; i<objNames.length; i++)
    {
        if(isNext && layerData[pageNum][objNames[i]] && pageNum >= 1)
            className = objNames[i] + "_" + (pageNum-1) + "_" + pageNum;
        else if(!isNext&& (layerData[pageNum+1][objNames[i]]||layerData[pageNum][objNames[i]]) && pageNum <= 9 && pageNum >= 0)//if(!isNext && layerData[pageNum+1][objNames[i]] && pageNum < 9 && pageNum >= 1)
            className = objNames[i] + "_" + (pageNum+1) + "_" + pageNum;
        else className = "motionElement";
        if(objNames[i] == 'bg1' && pageNum<6)
            className = "bg1";
        else if(document.getElementById(objNames[i]))
        {
            if(className == "motionElement")
                document.getElementById(objNames[i]).className = className;
            else
            {
                document.getElementById(objNames[i]).className = "motionElement " + className;
            }
        }   
    }
    /*
    if (pageNum == 1) {
        if (isNext) {
            for (var i = 0; i < objNames.length - 3; i++)
                if (document.getElementsByClassName(objNames[i] + pageNum).length > 0)
                    document.getElementsByClassName(objNames[i] + pageNum)[0].className = objNames[i] + "move1";
            if (document.getElementsByClassName("image1_1").length > 0)
                document.getElementsByClassName("image1_1")[0].className = "image1_move1";
            if (document.getElementsByClassName("image2_1").length > 0)
                document.getElementsByClassName("image2_1")[0].className = "image2_1";
            if (document.getElementsByClassName("image3_1").length > 0)
                document.getElementsByClassName("image3_1")[0].className = "image3_1";
        }
        else {
            for (var i = 0; i < objNames.length - 3; i++)
                if (document.getElementsByClassName(objNames[i] + "move2").length > 0)
                    document.getElementsByClassName(objNames[i] + "move2")[0].className = objNames[i] + "move1";
            if (document.getElementsByClassName("image1_move2").length > 0)
                document.getElementsByClassName("image1_move2")[0].className = "image1_1";
            if (document.getElementsByClassName("image2_move2").length > 0)
                document.getElementsByClassName("image2_move2")[0].className = "image2_1";
            if (document.getElementsByClassName("image3_1").length > 0)
                document.getElementsByClassName("image3_1")[0].className = "image3_1";
        }
    }
    else if (pageNum == 2) {
        if (isNext) {
            for (var i = 0; i < objNames.length - 3; i++)
                if (document.getElementsByClassName(objNames[i] + "move1").length > 0)
                    document.getElementsByClassName(objNames[i] + "move1")[0].className = objNames[i] + "move2";
            if (document.getElementsByClassName("image1_move1").length > 0)
                document.getElementsByClassName("image1_move1")[0].className = "image1_move2";
            if (document.getElementsByClassName("image2_1").length > 0)
                document.getElementsByClassName("image2_1")[0].className = "image2_move2";
            if (document.getElementsByClassName("image3_1").length > 0)
                document.getElementsByClassName("image3_1")[0].className = "image3_1";
        }
        else {
            for (var i = 0; i < objNames.length - 3; i++)
                if (document.getElementsByClassName(objNames[i] + "move3").length > 0)
                    document.getElementsByClassName(objNames[i] + "move3")[0].className = objNames[i] + "move2";
            if (document.getElementsByClassName("image1_move1").length > 0)
                document.getElementsByClassName("image1_move1")[0].className = "image1_1";
            if (document.getElementsByClassName("image2_2").length > 0)
                document.getElementsByClassName("image2_2")[0].className = "image2_1";
            if (document.getElementsByClassName("image3_move3").length > 0)
                document.getElementsByClassName("image3_move3")[0].className = "image3_1";
        }
    }
    else if (pageNum == 3) {
        if (isNext) {
            for (var i = 0; i < objNames.length - 3; i++)
                if (document.getElementsByClassName(objNames[i] + "move2").length > 0)
                    document.getElementsByClassName(objNames[i] + "move2")[0].className = objNames[i] + "move3";
            if (document.getElementsByClassName("image1_move2").length > 0)
                document.getElementsByClassName("image1_move2")[0].className = "image1_1";
            if (document.getElementsByClassName("image2_move2").length > 0)
                document.getElementsByClassName("image2_move2")[0].className = "image2_1";
            if (document.getElementsByClassName("image3_1").length > 0)
                document.getElementsByClassName("image3_1")[0].className = "image3_move3";
        }
    }
    */
}

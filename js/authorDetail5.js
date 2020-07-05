
setX = 142;
setY= 235;
function setPositionLeft()
{ 

setX = setX - 5;

// leftRight(setX);
var x = document.getElementById("input").value; 

context.drawImage(imageObj, 10, 10);
     context.fillText(x, setX, 235);


funny(setX);
 
}

//   right

function setPositionRight()
{ 
setX = setX + 5;
// leftRight(setX);
var x = document.getElementById("input").value; 

context.drawImage(imageObj, 10, 10);
     context.fillText(x, setX, setY);

funny(setX);
}

//   set in y axis ++
function setPositionUp()

{ 
setY = setY - 5;
// topDown(setY)
var x = document.getElementById("input").value; 

context.drawImage(imageObj, 10, 10);


     context.fillText(x, setX, setY);

    funny(setY);
}

//   y axis --
function setPositionDown()
{ 
setY = setY + 5;

var x = document.getElementById("input").value; 

context.drawImage(imageObj, 10, 10);

     context.fillText(x, setX, setY);

funny(setY);

}


      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
      var imageObj = new Image();

      imageObj.onload = function() {
        context.drawImage(imageObj, 10, 10);
      };
      imageObj.src =  "../../Images/imgs2.webp";
     
      function charDisp(){
// var colors= document.getElementById("colorInput").value;
var x = document.getElementById("input").value; 

context.drawImage(imageObj, 10, 10);

     context.fillText(x, setX, setY);


 };

// json post
 function funny(mm)
 {
    // alert(mm);
    var xAxis = setX;
    var yAxis = setY;

//     alert("x: "+ setX);
//     alert("y: "+ setY);
    

    if(mm == 1){
        myObject={
            "xAxisValue": xAxis,
            "yAxisValue": yAxis,
            "maxCharecter":max
           }
      console.log(myObject) // {firstName: "", lastName: "", email: "", number: ""}
      
      dbParam = JSON.stringify(myObject);
      xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
             // myObj = JSON.parse(this.responseText);
              console.log(this.responseText);
              //document.getElementById("demo").innerHTML = "jkasdhajjk  jkasdk";
          }
      };
      xmlhttp.open("POST", "https://run.mocky.io/v3/f46aa559-c6af-4189-9c5e-a5b375cc2c6b/engravingDetail5",true );
      xmlhttp.setRequestHeader("Content-type","application/json");
      xmlhttp.send(dbParam);
    }

    
    
   
 }  

 // MAX Char Input
function maxChar(maxchar){
    max = parseInt(maxchar);
    document.getElementById("input").maxLength = max;
 }
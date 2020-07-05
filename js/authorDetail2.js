
setX = 142;
setY= 235;
function setPositionLeft()
{ 

setX = setX - 5;

// leftRight(setX);
var x = document.getElementById("input").value; 

context.drawImage(imageObj, 10, 10, imageObj.width/2.6,imageObj.height/2.6);


 
     context.fillText(x, setX, setY);

    funny(setX);
}
function setPositionRight()
{ 

setX = setX + 5;

// leftRight(setX);
var x = document.getElementById("input").value; 

context.drawImage(imageObj, 10, 10, imageObj.width/2.6,imageObj.height/2.6);


 
     context.fillText(x, setX, setY);

    funny(setX);
}

//   y axis --
function setPositionUp()
{ 
setY = setY - 5;

var x = document.getElementById("input").value; 

context.drawImage(imageObj, 10, 10, imageObj.width/2.6,imageObj.height/2.6);


     context.fillText(x, setX, setY);

funny(setY);

}
function setPositionDown()
{ 
setY = setY + 5;

var x = document.getElementById("input").value; 

context.drawImage(imageObj, 10, 10, imageObj.width/2.6,imageObj.height/2.6);


     context.fillText(x, setX, setY);

funny(setY);

}


      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
      var imageObj = new Image();

      imageObj.onload = function() {
          context.drawImage(imageObj, 10, 10, imageObj.width/2.6,imageObj.height/2.6);
      };
      imageObj.src =  "../../Images/imgs.webp";
      

      function charDisp(){
// var colors= document.getElementById("colorInput").value;
var x = document.getElementById("input").value; 

context.drawImage(imageObj, 10, 10, imageObj.width/2.6,imageObj.height/2.6);

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
      xmlhttp.open("POST", " https://run.mocky.io/v3/f46aa559-c6af-4189-9c5e-a5b375cc2c6b/engravingDetail2",true );
      xmlhttp.setRequestHeader("Content-type","application/json");
      xmlhttp.send(dbParam);
    }

    
    
   
 }  

 // MAX Char Input
function maxChar(maxchar){
    max = parseInt(maxchar);
    document.getElementById("input").maxLength = max;
 }

setX = 150;
setY= 150;
// left
function setPositionLeft()
{ 

setX = setX - 5;

// leftRight(setX);
var xx = document.getElementById("input").value; 
//   start
CanvasRenderingContext2D.prototype.fillVerticalText = function(text, x, y, verticalSpacing) {
for (var i = 0; i < text.length; i++) {
this.fillText(text[i], x, y + i * verticalSpacing);
}
}

// end

context.drawImage(imageObj, 10, 10,imageObj.width/1.5,imageObj.height/1.5);


context.fillVerticalText(xx, setX, setY,24);

funny(setX);
 
}
// Right
function setPositionRight()
{ 

setX = setX + 5;

// leftRight(setX);
var xx = document.getElementById("input").value; 
//   start
CanvasRenderingContext2D.prototype.fillVerticalText = function(text, x, y, verticalSpacing) {
for (var i = 0; i < text.length; i++) {
this.fillText(text[i], x, y + i * verticalSpacing);
}
}

// end

context.drawImage(imageObj, 10, 10,imageObj.width/1.5,imageObj.height/1.5);
context.fillVerticalText(xx, setX, setY,24);

funny(setX);
 
}

// Top UP
function setPositionUp()
{ 

setY = setY - 5;

// leftRight(setX);
var xx = document.getElementById("input").value; 
//   start
CanvasRenderingContext2D.prototype.fillVerticalText = function(text, x, y, verticalSpacing) {
for (var i = 0; i < text.length; i++) {
this.fillText(text[i], x, y + i * verticalSpacing);
}
}

// end

context.drawImage(imageObj, 10, 10,imageObj.width/1.5,imageObj.height/1.5);

  

context.fillVerticalText(xx, setX, setY,24);
funny(setY);
}
//  Down

function setPositionDown()
{ 

setY = setY + 5;

// leftRight(setX);
var xx = document.getElementById("input").value; 
//   start
CanvasRenderingContext2D.prototype.fillVerticalText = function(text, x, y, verticalSpacing) {
for (var i = 0; i < text.length; i++) {
this.fillText(text[i], x, y + i * verticalSpacing);
}
}

// end

context.drawImage(imageObj, 10, 10,imageObj.width/1.5,imageObj.height/1.5);

 

context.fillVerticalText(xx, setX, setY,24);
funny(setY);

}
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var imageObj = new Image();

imageObj.onload = function() {
    context.drawImage(imageObj, 10, 10,imageObj.width/1.5,imageObj.height/1.5);
};
imageObj.src =  "../../Images/lipstickclose.jpg";

function charDisp(){
    var xx = document.getElementById("input").value; 
    //   start
    CanvasRenderingContext2D.prototype.fillVerticalText = function(text, x, y, verticalSpacing) {
    for (var i = 0; i < text.length; i++) {
    this.fillText(text[i], x, y + i * verticalSpacing);
    }
    }
    
    // end
    
    context.drawImage(imageObj, 10, 10,imageObj.width/1.5,imageObj.height/1.5);
    
     
    context.fillVerticalText(xx, setX, setY,24);
    
    
    
    
    
    


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
     xmlhttp.open("POST", "  https://run.mocky.io/v3/f46aa559-c6af-4189-9c5e-a5b375cc2c6b/engravingDetail3",true );
     xmlhttp.setRequestHeader("Content-type","application/json");
     xmlhttp.send(dbParam);
   }

  
  
}  

// MAX Char Input
function maxChar(maxchar){
  max = parseInt(maxchar);
  document.getElementById("input").maxLength = max;
}


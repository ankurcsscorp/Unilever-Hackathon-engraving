var Data = [];
var xAxis,yAxis;
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            Data = JSON.parse(this.responseText);
            for (var i = 0; i < Data.length; i++) {
                    xAxis=  Data[i].xAxisValue;
                    yAxis=  Data[i].yAxisValue;
                    maxLengths=Data[i].maxCharecter;
                    document.getElementById("input").maxLength = maxLengths;
                    
            }
            // document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    // xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.open("GET", "https://run.mocky.io/v3/f46aa559-c6af-4189-9c5e-a5b375cc2c6b/engravingDetail3", true);
    xhttp.send();
}

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var imageObj = new Image();

imageObj.onload = function() {
    context.drawImage(imageObj, 10, 10,imageObj.width/1.5,imageObj.height/1.5);
};
imageObj.src =  "../../Images/lipstickclose.jpg";

function charDisp(){
// var colors= document.getElementById("colorInput").value;
var xx = document.getElementById("input").value; 
//   start
CanvasRenderingContext2D.prototype.fillVerticalText = function(text, x, y, verticalSpacing) {
for (var i = 0; i < text.length; i++) {
this.fillText(text[i], x, y + i * verticalSpacing);
}
}

// end

context.drawImage(imageObj, 10, 10,imageObj.width/1.5,imageObj.height/1.5);

  // context.font='bold 20px Verdana';  
//  context.fillStyle = colors;
//  context.fillVerticalText(xx, 80, 330,24);

if(xx.length<=2)
{
context.fillVerticalText(xx, xAxis, yAxis+45,24);
}
else if(xx.length>=3 && xx.length<=4)
{
context.fillVerticalText(xx, xAxis, yAxis+20,24);
}

else if (xx == xx.toUpperCase()) {
context.fillVerticalText(xx, xAxis, yAxis+-3,24);
}
else if (xx == xx.toLocaleLowerCase()) {
context.fillVerticalText(xx, xAxis, yAxis+1,24);
}
else
{
context.fillVerticalText(xx, xAxis, yAxis,24);
}

};


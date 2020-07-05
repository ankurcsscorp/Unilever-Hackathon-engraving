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
    xhttp.open("GET", "https://run.mocky.io/v3/f46aa559-c6af-4189-9c5e-a5b375cc2c6b/engravingDetail5", true);
    xhttp.send();
}
// up side get data from json
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



if(x.length<=2)
{
context.fillText(x, xAxis+40, yAxis);

}

else if(x.length>=3 && x.length<=5)
{
context.fillText(x, xAxis+20 , yAxis);  
}
else if (x == x.toUpperCase()) {
context.fillText(x, xAxis-12, yAxis);
}
else if (x == x.toLocaleLowerCase()) {
context.fillText(x, xAxis+3, yAxis);
}
else
{
context.fillText(x, xAxis, yAxis);
}

};

function lengthLimit()
{
    document.getElementById("input").maxLength = maxLengths;
}

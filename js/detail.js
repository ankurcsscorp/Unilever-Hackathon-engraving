   var count = 1;
    var countEl = document.getElementById("count");
    function plus(){
        count++;
        countEl.value = count;
    }
    function minus(){
      if (count > 1) {
        count--;
        countEl.value = count;
      }  
    }
    
    function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it

document.getElementById("defaultOpen").click();


// popup 


$(document).ready(function() {
  $('.add-to-engrave').click(function(e) {
    $('.popup-wrap').fadeIn(500);
    $('.popup-box').removeClass('transform-out').addClass('transform-in');

    e.preventDefault();
  });

  $('.popup-close').click(function(e) {
    $('.popup-wrap').fadeOut(500);
    $('.popup-box').removeClass('transform-in').addClass('transform-out');

    e.preventDefault();
  });
  
});

// engrave
var cc;
             // font selection
             function fontSelection1()
             {
              context.font='500 20px Helvetica'; 
 
             }
             function fontSelection2()
             {  
                 context.font='500 20px Comic Sans MS'; 
             }
             // color selection
             function colorSelection()
             {  
              cc= document.getElementById("asss").value;
              context.fillStyle = cc;
             }
             function colorSelection1()
             {
                 cc= document.getElementById("asss2").value;
                 context.fillStyle = cc;
             }
             function colorSelection3()
             {  
              cc= document.getElementById("asss3").value;
              context.fillStyle = cc;
             }
             function colorSelection4()
             {  
              cc= document.getElementById("asss4").value;
              context.fillStyle = cc;
             }
            //  function textTest(){
            //   var x = document.getElementById("input").value;
            //   if(x == ""){
            //     document.getElementById("input").style.border = "1px solid red";
            //     alert("Plz Enter Engraving Text")
            //   }else{
            //    alert("Your Engraved Images has been saved successfully");
            //    window.location="detail.html";
            //   }
            // }

function callErrorHandlerMsg(){
  document.getElementById("success-msg").style.display = "block";
  document.getElementById("input").style.border = "1px solid black";
  document.getElementById("error-msg").style.display = "none";
}   

function textTest(){
  var x = document.getElementById("input").value;
  if(x == ""){
    document.getElementById("input").style.border = "1px solid red";
    document.getElementById("error-msg").style.display = "block";
  }else{
   callErrorHandlerMsg();    
  //  confirm("")
   setTimeout(function(){ window.location = "user.html" }, 5000);         
  }
  
}


// Done Msg print
function printMsg(){
  document.getElementById("doneMsg").style.display="block";
}


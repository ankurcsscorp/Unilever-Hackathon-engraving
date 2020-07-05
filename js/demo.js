
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
document.getElementById("myBtn").style.display = "block";
} else {
document.getElementById("myBtn").style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}

// pop up js for login
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  
  function loginFun(){
      var username = document.getElementById("input").value;
      var password = document.getElementById("password").value;
      document.getElementById("input").value="";
      document.getElementById("password").value="";
      if(username == "user" && password == "user"){
          
              window.location = "src/user_HTML/user.html";
         
      }
      else if(username == "author"&&password == "author")
      {
              window.location = "src/author_HTML/author.html";
          }
         
      else{
        //   alert("wrong credential");
        document.getElementById("errMsg").style.display="block";
      }
  }

    //   scroll to close login pop up
    $(window).scroll(function(){
        document.getElementById("myForm").style.display = "none";
    });
  


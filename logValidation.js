var user = document.getElementById('user');
var erruser = document.getElementById('erruser');
erruser.style.fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";


var pwd = document.getElementById('pwd');
var errpwd = document.getElementById('errpwd');
errpwd.style.fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";

function logValidate(e,myCallback) {

    if (user.value.trim() == '') {
      erruser.innerText = "User Name Cannot be Empty";
      erruser.style.color = 'red';
      erruser.style.fontSize = "large";
  
    }
    else if (user.value != "admin") {

        erruser.innerText = "Enter valid User Name.";
        erruser.style.color = 'red';
        erruser.style.fontSize = "large";
    
      }
      else{
        erruser.innerText = "";
      }

      if (pwd.value.trim() == '') {
        errpwd.innerText = "Password Cannot be Empty";
        errpwd.style.color = 'red';
        errpwd.style.fontSize = "large";
    
      }
      else if (pwd.value !="12345") {

        errpwd.innerText = "Enter valid Password.";
        errpwd.style.color = 'red';
        errpwd.style.fontSize = "large";
    
      }
      else{
        errpwd.innerText = "";
      }
        myDisplayer();
    }
    function myDisplayer() {
      
    
      if (user.value.trim() != '' && pwd.value.trim() != '' && user.value == "admin" && pwd.value== "12345") {

        //alert('You are successfully logged in');
        window.location = "home.html";
        return true;
    
      }
      else {
        
        return false;
      }

    }

    function myFunction() {
        var x = document.getElementById("pwd");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }
      
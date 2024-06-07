
// #####



let submit = document.getElementById("submit");

let inputs = document.querySelectorAll("input");






//errors elements
let erremail = document.getElementById("erremail");
let errpassword = document.getElementById("errpassword");
let verified = document.getElementById("verified");
let loader =document.querySelector(".loader");

 //Element
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let password = document.getElementById("password");
  
 function clear() {
      [ erremail, errpassword].forEach(function (e) {
        e.innerHTML = "";
        e.style.color = "red";
      });
    }
//add sing up
    let x =0;
submit.addEventListener("click", function () {

  let request = new XMLHttpRequest();
  request.open("POST", "log-in.php");
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.send(
    
      "email=" +
      email.value +
      "&phone="+
      phone.value+
      "&password=" +
      password.value 
  );
  request.onload = () => {
    let response = JSON.parse(request.response);

  console.log(response);
   if (response.msg == "emaliempty") {
  loader.style.display="none";

      clear();
      erremail.innerHTML = "email is empty!";
    }
    else if ( response.msg == "emaildb" || response.msg == "emailbad") {
     
  loader.style.display="none";
      clear();
      erremail.innerHTML = "Invalid email address!";

      //add sing up
      x++;
      if(x >= 2 ){
              let linksingup = document.getElementById("linksingup");
              linksingup.innerHTML='sing-Up';
              linksingup.setAttribute("href","sing-Up.html");

      }
    }
    

    else if (response.msg == "passwordempty") {
  loader.style.display="none";

      clear();
      errpassword.innerHTML = "password is empty!";
    }
  
    else if (response.msg == "pasworddb") {
  loader.style.display="none";
      clear();
      errpassword.innerHTML = "Invalid password !";
          x++;
      if( x >= 2){
        let linkforgot = document.getElementById("linkforgot");
        linkforgot.innerHTML='Forgot password?';
        linkforgot.setAttribute("href","forgot.html");
      }

    }
    
    else if (response.msg == "notverified") {
  loader.style.display="none";

      clear();
      verified.innerHTML = "error 404!";
      verified.style.color="red";
      verified.style.textShadow="1px 1px 12px #e7422c";
      setTimeout(function () {
        window.location.replace("error404.php");
    }, 10);
      
    }
    

    // echo json_encode(["msg"=> "verified",
    //   "userid"=>$fetch["client_id"],
    //   "username"=>$fetch["client_fullname"],
    //   "useremail"=>$fetch["client_email"],
    //   "usernumberty"=>$fetch["client_ty"],
    //   "userphone"=>$fetch["client_phone"],
    //   "userage"=>$fetch["client_age"]]);

    else if (response.msg == "verified") {


      localStorage.setItem("userid", response.userid);
      localStorage.setItem("username", response.username );
      localStorage.setItem("useremail", response.useremail );
      localStorage.setItem("usernumberty", response.usernumberty );
      localStorage.setItem("userphone", response.userphone );
      localStorage.setItem("userage", response.userage );


      loader.style.display="block";
      clear();

      let iconVerified = document.createElement("img");
      iconVerified.setAttribute("src", "imgs/check.gif");
      iconVerified.id="iconVerified";
      verified.appendChild(iconVerified);

      setTimeout(function () {
        window.location.replace("../bookFirst.html"); 
      
    }, 990);
 
    }
  }; //onload
  loader.style.display="block";}); //click

  //clear inputs
inputs.forEach(inputs => {
  inputs.addEventListener("input", function() {
clear();
});
})


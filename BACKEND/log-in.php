
<?php
session_start();

if($_SERVER['REQUEST_METHOD']=="POST"){
    include "all.php";
   if(!empty($_POST["email"]) || !empty($_POST["phone"]) ){
    
    if(!empty($_POST["password"])){
      // 
 $email = filter($_POST["email"]);
 $phone = $_POST["phone"];
 $password = filter($_POST["password"]);

 try {
  $con = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
  $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
// 

// Full texts
// client_id	
// client_fullname	
// client_email	
// client_ty	
// client_phone	
// client_age	
// client_password

  $select = $con->prepare("SELECT client_id,client_fullname,client_email,client_ty,client_phone,client_age,client_password FROM $tbname WHERE client_email = :email OR client_phone = :phone OR client_password = :password");
  $select->bindParam(":email", $email);
  $select->bindParam(":phone", $phone);
  $select->bindParam(":password", $password);
  $select->execute();
  $fetch = $select->fetch(PDO::FETCH_ASSOC);

  if ($fetch && $email == $fetch["client_email"] || $fetch["client_phone"] == $phone ) {
    
      if ($fetch &&  $fetch["client_password"] == $password ) {
    
        

 // ACCCCCCCCCCON

echo json_encode(["msg"=> "verified",
"userid"=>$fetch["client_id"],
"username"=>$fetch["client_fullname"],
"useremail"=>$fetch["client_email"],
"usernumberty"=>$fetch["client_ty"],
"userphone"=>$fetch["client_phone"],
"userage"=>$fetch["client_age"]]);

//                A CCCCCCCCCCONT


 $selectsingindb =  $con->query("SELECT singIn FROM $tbnamedashbord ");
 $signinnumber = $selectsingindb->fetch();
 $number = $signinnumber['singIn'];

  //add
  $number++;
  //indate                                  
  $updatesingin = "UPDATE $tbnamedashbord SET singIn='$number'";
  $stmt = $con->prepare($updatesingin);
  $stmt->execute();
        
      }else{ echo json_encode(["msg"=> "pasworddb"]) ; }
   }else{ echo json_encode(["msg"=> "emaildb"]) ; }
                  
} catch (PDOException $e) {
   echo json_encode(["msg"=> "notverified"]);
}
//  
     }else{
       echo json_encode(["msg"=> "passwordempty"]) ;
     }
    
   }else{
     echo json_encode(["msg"=> "emaliempty"]) ;
   }
}

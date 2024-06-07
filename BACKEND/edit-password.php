<?php

 session_start();
if($_SERVER['REQUEST_METHOD']=="POST"){
include "all.php";
    if(!empty($_POST['password'])){
        if(strlen($_POST['password']) >=5){
            $password = filter($_POST["password"]);
        if(!empty($_POST['cpassword']) && $_POST['cpassword'] === $_POST['password'] ){
            $cpassword = filter($_POST["cpassword"]);
            //session 
            $email = $_SESSION['emailsession'];
            //###sesion

            
// Full texts
// client_id	
// client_fullname	
// client_email	
// client_ty	
// client_phone	
// client_age	
// client_password
                    try{
                        $con = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
                        $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                        $select = $con->query("SELECT client_password,client_email FROM $tbname   WHERE client_email='$email'");
                        $slt = $select->fetch();
                        if($slt && $email == $slt["client_email"]){

                            if($slt && $password !== $slt["client_password"] && strlen( $password ) >= 5){

                                $sql = "UPDATE $tbname SET client_password='$password' WHERE client_email='$email'";
                                $stmt = $con->prepare($sql);
                                $stmt->execute();

                                
                               
                                $verified = "verified";
                                 echo json_encode(["msg" =>$verified,"email" =>$email]);
                                //select view 
                                $select = $con->query("SELECT editpassword FROM $tbnamedashbord ");
                                $fetcheditpassword = $select->fetch();
                                $number = $fetcheditpassword["editpassword"];
                                if($verified == "verified"){
                                 $number++;
                                 $update = "UPDATE $tbnamedashbord SET editpassword='$number'";
                                 $updateeditpassword = $con->prepare($update);
                                 $updateeditpassword->execute();
                                 
                                } 

                            }else{
                               echo json_encode(["msg"=>"passwordbad"]);
                            }

                        }else{
                            echo json_encode(["msg"=>"emaildb"]);
                        }

                    }catch(PDOException $e){echo json_encode(["msg"=>"notverified" ]);}
        }else{
            echo json_encode(["msg"=>"notmatch"]);
        }
    }else{echo json_encode(["msg"=>"paasswordlenght"]);}
    }else{
        echo json_encode(["msg"=>"passwordempty"]);
    }
}

  
    

<?php


function filter($data){
    $data = htmlspecialchars($data);
    $data =trim($data);
    $data= stripslashes($data);
    return $data ;
}
function filter_phone($phone) {
    $phone = preg_replace('/\D/', '', $phone);
    return $phone;
}
$host = "localhost";
$user = "SAMIR";
$pass="samir123";
$dbname="booking";
$tbname="client";
$tbnamedashbord = "view";
 
//mailer

$code = mt_rand(99999,999999);

$usernamemailer = "germanysamir1@gmail.com";
$passwordmailer = "cbky ooci pmbx zhmh";

//sign up database


<?php
require_once 'vendor/autoload.php';

$clientID = '27634668984-5ooshfi469quhah2nmbaj6jpcdot12hd.apps.googleusercontent.com';
$clientSecret = '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';
$redirectUri = 'http://localhost/SAMIR/BOKINGG8/singGoogle/google.php';

$client = new Google_Client();
$client->setClientId($clientID);
$client->setClientSecret($clientSecret);
$client->setRedirectUri($redirectUri);
$client->addScope("email");
$client->addScope("profile");

if (isset($_GET['code'])) {
    $token = $client->fetchAccessTokenWithAuthCode($_GET['code']);
    $client->setAccessToken($token['access_token']);

    $google_oauth = new Google_Service_Oauth2($client);
    $google_account_info = $google_oauth->userinfo->get();
    $email = $google_account_info->email;
    $name = $google_account_info->name;

    // Use the obtained user info here

} else {
    $authUrl = $client->createAuthUrl();
    echo json_encode(['link' => $authUrl]);
}
?>

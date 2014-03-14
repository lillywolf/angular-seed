<?php

$clientId = "c171e68d9fb74f4b9d0f2a2d1a4f82e6";
$redirectURI = "http://lilly-ignore.herokuapp.com/auth/instabox/auth_user.php";
$url = 'https://api.instagram.com/oauth/authorize/?client_id=" . $clientId . "&redirect_uri=" . $redirectURI . "&response_type=code';
header("Location: " . $url);

?>

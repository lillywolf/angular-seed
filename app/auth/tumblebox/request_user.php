<html xmlns="http://www.w3.org/1999/xhtml">
<head>
</head>	
<body>
<?php

$consumerKey = "O7RJnnfPcv3K2h0nt7dnb8Tm406cITIzQDTQYm2yoifK6HEAG2";
$secretKey  = "uUsblqN1RYVgtHPfwm5ltATwSkMOJdGZqbOG7YwFw5fzA0vvxm";
$url = "http://www.tumblr.com/oauth/request_token?api_key=" . $consumerKey;
header("Location: " . $url);

?>
</body>
<?php
  $first_name = filter_input(INPUT_POST,'first_name',FILTER_SANITIZE_STRING);
  $last_name = filter_input(INPUT_POST,'last_name', FILTER_SANITIZE_STRING);
  $email = filter_input(INPUT_POST,'email', FILTER_SANITIZE_EMAIL);
  $from = 'no-reply@dantegalindocruz.com';
  $subject = htmlspecialchars_decode(filter_input(INPUT_POST,'subject', FILTER_SANITIZE_STRING), ENT_QUOTES);
  
  $body= "<html><body>";
  $body.= "<table width='100%'>";
  $body.= "<tr><td><strong>$first_name $last_name</strong> sent you a message:</td></tr>";
  $body.= "<tr><td>".filter_input(INPUT_POST,'message', FILTER_SANITIZE_STRING)."</td></tr>";
  $body.= "<tr><td><img src='https://danteknits.com/staging/imgs/email-banner.jpg'</td></tr>";
  $body.= "</table>";
  $body.="</body></html>";
  
  $message = htmlspecialchars_decode(wordwrap($body, 411, "\r\n", true), ENT_QUOTES|ENT_HTML5);
  $send;

  $to = "me@dantegalindocruz.com";
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8\r\n";
  $headers .= "From: $from\r\nReply-to:$email";
 
  $send= mail($to, $subject, $message, $headers);

  if($send){
    header("Location:https://danteknits.com/staging/#contact-section");
    echo "Thank you for your message.";
  } else {
    echo "Mail sending failed";
  }

?>

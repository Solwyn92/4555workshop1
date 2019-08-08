<?php
$to = "sol.labrador@gmail.com"; // Student e-mail
$from = $_POST['mail']; // This is the sender's Email address.. tiene que ser el name del campo en mi html
$first_name = $_POST['nombre']; // This is the sender's Name.. tiene que ser el name del campo en mi html
$subject = "Email de Star Wars API"; //yo defino con que asunto me llega el mail
$comments = $first_name . ' te dijo: ' . $_POST['msg'];//.. tiene que ser el name del campo en mi html
$headers = "From:" . $from;
$email = mail($to,$subject,$comments,$headers);
if(!$email){
  echo "Hubo un error al procesar tu email, detallle del error". $email; 
}
?>
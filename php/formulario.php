<?php
  
  $fecha = date("d-m-Y");
  $hora = date("H:i:s");
  $destino = "info@tecnoreparaciones.com.ar";
  $asunto = "Correo Web Tecnoreparaciones SA";
  $desde = 'From: ' .$_POST[email];
  /*$comentario = "
  \n
  Nombre: $_POST[nombre]\n
  Telefono: $_POST[telefono]\n
  Email: $_POST[email]\n
  Consulta: $_POST[texto]\n
  Enviado: $fecha a las $hora\n
  \n";*/
  
   // Aquí se deberían validar los datos ingresados por el usuario
if(
	!isset($_POST['nombre']) ||
    !isset($_POST['correo']) ||
    !isset($_POST['tel']) ||
    !isset($_POST['texto']) ) {

echo "<b>Ocurrio un error y el formulario no ha sido enviado. </b><br />";
echo "Por favor, vuelva atras y verifique la informacion ingresada<br />";
die();
}


  $email_message = "Detalles del formulario de contacto:\n\n";
  $email_message .= "Nombre: " . $_POST['nombre'] . "\n";
  $email_message .= "Correo: " . $_POST['correo'] . "\n";
  $email_message .= "Telefono: " . $_POST['tel'] . "\n";
  $email_message .= "Comentarios: " . $_POST['texto'] . "\n\n";
  
  // Ahora se envía el e-mail usando la función mail() de PHP
  $headers = 'From: '.$desde."\r\n".
  'Reply-To: '.$desde."\r\n" .
  'X-Mailer: PHP/' . phpversion();  

  //Enviar el correo
	if(mail($destino, $asunto, $email_message, $headers)){
		echo "Correo enviado";
	}else{
		echo "Error de envio";
	}
  
?>
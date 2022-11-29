<?php



	$nome			= filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING);
	$whatsapp			= filter_input(INPUT_POST, 'whatsapp', FILTER_SANITIZE_STRING);
	$email		= filter_input(INPUT_POST, 'email', FILTER_SANITIZE_STRING);
	$mensagem		= filter_input(INPUT_POST, 'mensagem', FILTER_SANITIZE_STRING);
	


	ini_set('display_errors', 1);
	error_reporting(E_ALL);
	
	
	$from = $email;
	$to = "contato@argenbras.com.br";
	//$to = "fesites@gmail.com";
	$subject = "Mensagem enviada pelo site";
	$headers = "De:" . $from;
	mail($to, $subject, $message, $headers);
	
	header("Location: index.php#contato?msg=1");
	

?>
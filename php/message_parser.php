<?php
if( isset($_POST['patientName']) && isset($_POST['patientEmail']) && isset($_POST['patientMessage']) ){
	$patientName = $_POST['patientName']; // HINT: use preg_replace() to filter the data
	$patientEmail = $_POST['patientEmail'];
	$patientMessage = nl2br($_POST['patientMessage']);
	$to = "gaytan.app@gmail.com";
	$from = $patientEmail;
	$subject = 'Contact Form Message';
	$message = '<b>Name:</b> '.$patientName.' <br><b>Email:</b> '.$patientEmail.' <p>'.$patientMessage.'</p>';
	$headers = "From: $from\n";
	$headers .= "MIME-Version: 1.0\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\n";
	if( mail($to, $subject, $message, $headers) ){
		echo "success";
	} else {
		echo "The server failed to send the message. Please try again later.";
	}
}
?>

<?php

      ini_set('display_errors', 1);
      ini_set('display_startup_errors', 1);
      error_reporting(E_ALL);

      require_once('/usr/share/php/libphp-phpmailer/class.phpmailer.php');
      $mail = new PHPMailer(); // defaults to using php "mail()"
      $mail->AddReplyTo($_POST['fullName']); //Form var must be 'fullName'
      $mail->SetFrom($_POST['email']); //form var must be email
      $mail->AddAddress("d.ivy.withers@gmail.com");
      $mail->Subject    = "PORTFOLIO MAIL!! FROM - ". $_POST['fullName'];

      // $mail->MsgHTML($_POST['company']."\n".$_POST['phone']."\n").$_POST['body']); //var must be the textarea from your form
      $mail->Body = "COMPANY: ".$_POST['company']."\n";
      $mail->Body .= "FULL NAME: ".$_POST['fullName']."\n";
      $mail->Body .= "PHONE: ".$_POST['phone']."\n";
      $mail->Body .= "EMAIL: ".$_POST['email']."\n";
      $mail->Body .= "MESSAGE: ".$_POST['body'];


      if(!$mail->Send()) {
            echo "Mailer Error: " . $mail->ErrorInfo;
      } 
      //       echo "Message sent!";
      // }
      
      // header('location: /#contact');

?>
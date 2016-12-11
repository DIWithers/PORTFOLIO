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
      $mail->MsgHTML($_POST['company']);
      $mail->MsgHTML($_POST['phone']);
      $mail->MsgHTML($_POST['company,phone,body']); //var must be the textarea from your form

      if(!$mail->Send()) {
            echo "Mailer Error: " . $mail->ErrorInfo;
      } 
      //       echo "Message sent!";
      // }
      
      // header('location: /#contact');

?>
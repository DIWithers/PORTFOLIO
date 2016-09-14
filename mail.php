<<<<<<< HEAD


<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
=======
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
<?php

>>>>>>> fea2b897619683abf7add4ff5df6dcd722547411

      require_once('/usr/share/php/libphp-phpmailer/class.phpmailer.php');
      $mail = new PHPMailer(); // defaults to using php "mail()"
      $mail->AddReplyTo($_POST['fullName']); //Form var must be 'fullName'
      $mail->SetFrom($_POST['email']); //form var must be email
<<<<<<< HEAD
      $mail->AddAddress("d.ivy.withers@gmail.com");
=======
      $mail->AddAddress("email_addr_you_want_it_to_go_to");
>>>>>>> fea2b897619683abf7add4ff5df6dcd722547411
      $mail->Subject    = "The Subject Line Goes Here. FROM - ". $_POST['fullName'];
      $mail->MsgHTML($_POST['body']); //var must be the textarea from your form

      if(!$mail->Send()) {
            echo "Mailer Error: " . $mail->ErrorInfo;
      } else {
            echo "Message sent!";
      }
      
<<<<<<< HEAD
      // header('location: /#contact');
=======
      header('location: /#contact');
>>>>>>> fea2b897619683abf7add4ff5df6dcd722547411

?>
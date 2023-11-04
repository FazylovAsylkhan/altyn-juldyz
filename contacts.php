<?php

  $_POST['name'] = htmlspecialchars(stripslashes($_POST['name']));
  $_POST['email'] = htmlspecialchars(stripslashes($_POST['email']));
  $_POST['message'] = htmlspecialchars(stripslashes($_POST['message']));
  $_POST['phone'] = htmlspecialchars(stripslashes($_POST['phone']));
  
  $subj = 'Message from contact page [goldenstar.kz]';
  $mail_to = 'info@goldenstar.kz';
  

  $mess = 'Name: ' . $_POST['name'] . PHP_EOL . 'E-mail: ' . $_POST['email'] . PHP_EOL . 'Message: ' . $_POST['message'] . PHP_EOL . 'Phone: ' . $_POST['phone'];
  if(!mail($mail_to, $subj, $mess)){
      echo "ERROR"; exit();
  }

  function send_mail($to, $subj, $html, $path){
    $path2 = '/'.$path;

    $fp = fopen($path,"r");
    if (!$fp){
      echo "ERROR"; exit();
    }
    
    $file = fread($fp, filesize($path));
    fclose($fp);
  
    $boundary = "--".md5(uniqid(time()));
    $headers .= "MIME-Version: 1.0\n";
    $headers .="Content-Type: multipart/mixed; boundary=\"$boundary\"\n";
    $multipart .= "--$boundary\n";
    $multipart .= "Content-Type: text/html; charset=utf-8\n";
    $multipart .= "Content-Transfer-Encoding: Quot-Printed\n\n";
    $multipart .= "$html\n\n";
    $message_part = "--$boundary\n";
    $message_part .= "Content-Type: application/octet-stream\n";
    $message_part .= "Content-Transfer-Encoding: base64\n";
    $message_part .= "Content-Disposition: attachment; filename = \"".$path."\"\n\n";
    $message_part .= chunk_split(base64_encode($file))."\n";
    $multipart .= $message_part."--$boundary--\n";

    if(!mail($to, $subj, $multipart, $headers)){ 
      echo "ERROR"; exit();
    }

    unlink($path);
    echo 'OK'; exit();
  }

?>
<?php
  if (isset($_POST['submit']))  {
  
    //Email information
    $admin_email = "sarahswebdev@gmail.com";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
  
  //send email
  mail($admin_email, "New Form Submission", $name . ' - ' . $message . ' - ' . "From:" . $email);


}
?>
    
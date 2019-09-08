<?php
if (isset($_POST['submit'])) 
{
    $name = $_POST['name'];
    $title = $_POST['title'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    $concat_msg = "Title:".$title."Name:".$name."Email:".$mailFrom."Message:".$message;
    $filename = "contact.txt";
    fopen($filename, 'a');
    fwrite($filename,$concat_msg);
    fclose($filename);
    
    echo "<script type='text/javascript'>window.alert('You message has been sent succefully!!!!')</script>";
    echo "<script type='text/javascript'>document.location='index.html'</script>";

}
?>
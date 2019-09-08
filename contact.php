<?php
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['title'];
    $mailFrom = $_POST['email'];
    $message = $_POST['yourMessage'];
    
    echo "<pre>Thank you for contacting me " .$name. ", your message has been received.Expect my reply withhin the next 24HRS.</pre>";
}
?>
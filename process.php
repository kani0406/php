<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST["name"]));
    if (empty($name)) {
        echo "Name is required.";
        exit;
    }
    
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }
    $message = htmlspecialchars(trim($_POST["message"]));
    if (empty($message)) {
        echo "Message is required.";
        exit;
    }

    echo "Form submitted successfully!<br>";
    echo "Name: $name<br>";
    echo "Email: $email<br>";
    echo "Message: $message<br>";
}
?>

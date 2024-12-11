<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST["message"]));

    if (strlen($name) < 3) {
        echo "Error: Name must be at least 3 characters long.<br>";
        exit;
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Error: Invalid email format.<br>";
        exit;
    }
    if (strlen($message) < 10) {
        echo "Error: Message must be at least 10 characters long.<br>";
        exit;
    }

    header("Location: success.html");
    exit;
}
?>


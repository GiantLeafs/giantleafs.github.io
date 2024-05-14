<?php
session_start();
$conn = new mysqli("localhost", "root", "root", "XO");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$loginEmail = $_POST['user'];
$loginPassword = $_POST['password'];

$sql = "SELECT * FROM users WHERE email = '$loginEmail'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    if (password_verify($loginPassword, $row['password'])) {
        $_SESSION['email'] = $loginEmail;
        echo "Успех";
        $_SESSION['logged_in'] = true;
    } else {
        echo "Неверный пароль";
    }
} else {
    echo "Пользователь с такой почтой не найден";
}

$conn->close();
?>

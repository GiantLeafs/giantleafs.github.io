<?php
session_start();
$conn = new mysqli("localhost", "root", "root", "XO");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$email = $_SESSION['email'];

$stmt = $conn->prepare("SELECT name, surname, lastname FROM users WHERE email=?");
$stmt->bind_param("s", $email);
$stmt->execute();

$result = $stmt->get_result();
if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();

    echo json_encode($row);
} else {
    echo json_encode(['error' => 'Пользователь не найден']);
}

$stmt->close();
$conn->close();
?>
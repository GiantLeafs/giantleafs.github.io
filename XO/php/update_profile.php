<?php
session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['nameinput'];
    $surname = $_POST['surnameinput'];
    $lastname = $_POST['lastnameinput'];

    $conn = new mysqli("localhost", "root", "root", "XO");
    $email = $_SESSION['email'];
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "UPDATE users SET name='$name', surname='$surname', lastname='$lastname' WHERE email='$email'";

    // Выполнение запроса
    if ($conn->query($sql) === TRUE) {
        echo "Данные пользователя успешно обновлены.";
    } else {
        echo "Ошибка при обновлении данных пользователя: " . $conn->error;
    }

    $sql2 = "SELECT name, surname, lastname FROM users WHERE email='$email'";
    $result = $conn->query($sql2);
    if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo json_encode($row);
    } else {
    echo json_encode(['error' => 'Пользователь не найден']);
    $conn->close();
    }

    // Закрытие подключения
    $conn->close();
} 
else {
    echo "Недопустимый метод запроса";
}

?>


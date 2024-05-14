<?php
    $conn = new mysqli("localhost", "root", "root", "XO");
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
if (empty($_POST['regemail']) || empty($_POST['regpassword'])) {
    die("Ошибка: Все поля формы должны быть заполнены");
}
    $email = $_POST['regemail'];
    $password = password_hash($_POST['regpassword'], PASSWORD_DEFAULT);
    $sql = "INSERT INTO users (email, password) 
            VALUES ('$email', '$password')";
    $sql2 = "SELECT * FROM users WHERE email = '$email'";
    $resultsql2 = $conn->query($sql2);
    if ($resultsql2->num_rows > 0) {
        echo "Email уже зарегистрирован";
    }
    else {
        if ($conn->query($sql) === TRUE) {
            echo "Успех";
        } else {
            echo "Ошибка: " . $sql . "<br>" . $conn->error;
        }
    }
    
    $conn->close();
?>

<?php
session_start();
if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    header('Location: ../php/error.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>XO | Игра</title>
    <link rel="stylesheet" href="game.css">
    <link rel="shortcut icon" href="../images/icon.png" type="image/png">
</head>
<body>
        <div id="newgamemodal" class="newgamemodal">
            <div class = "result"></div>
            <div class = "image"></div>
            <button class="newgame">Новая игра</button>
        </div>

        <div id="profilemodal" class="profilemodal">
        <div class="profilemodal-content"> 
        <span class="close"></span>
            <div id = "name"></div>
            <div id = "surname"></div>
            <div id = "lastname"></div>
            <h2>Обновить данные:</h1>
            <form id="update_profileForm" action="update_profile.php" method="POST">
                <label>Имя:</label>
                <input type="text" id="nameinput" name="nameinput" required oninput="checkinputs()"><br>
                <label>Фамилия:</label>
                <input type="text" id="surnameinput" name="surnameinput" required oninput="checkinputs()"><br>
                <label>Отчество:</label>
                <input type="tel" id="lastnameinput" name="lastnameinput" required oninput="checkinputs()"><br>
                <br>
                <input disabled id = "submitupdateprofile" class = "button" type="submit" value="Отправить">
            </form>
            </div>
        </div>

        <div class="statistic">
        <table>
        <th colspan="2">Статистика</th>
        <tr>
            <td>X</td>
            <td><span id="sX">0</span></td>
        </tr>
        <tr>
            <td>O</td>
            <td><span id="sO">0</span></td>
        </tr>
        <tr>
            <td>Ничьи</td>
            <td><span id="sD">0</span></td>
        </tr>
        </table>
        </div>

        <div class="Time">
            <table>
            <th colspan="2">Последние 5 игр</th>
            <tr>
                <td><span id="TimeIndex1">0</span></td>
                <td><span id="Time1">0:00</span></td>
            </tr>
            <tr>
                <td><span id="TimeIndex2">0</span></td>
                <td><span id="Time2">0:00</span></td>
            </tr>
            <tr>
                <td><span id="TimeIndex3">0</span></td>
                <td><span id="Time3">0:00</span></td>
            </tr>
            <tr>
                <td><span id="TimeIndex4">0</span></td>
                <td><span id="Time4">0:00</span></td>
            </tr>
            <tr>
                <td><span id="TimeIndex5">0</span></td>
                <td><span id="Time5">0:00</span></td>
            </tr>
            </table>
            </div>

        <p class = "timer">0:00</p>

        <div class="game">
            <div class ="field"></div>
            <div class ="field"></div>
            <div class ="field"></div>
            <div class ="field"></div>
            <div class ="field"></div>
            <div class ="field"></div>
            <div class ="field"></div>
            <div class ="field"></div>
            <div class ="field"></div>
        </div>
        <p class = "PlayerActive" id = "PlayerA"> Сейчас ходит: X</p>
    </div>
    </div>
    <a href="../php/logout.php"><button id = "logout">Выйти</button></a>
    <br>
    <button id = "profilebtn" class = "profilebtn">Профиль</button>
    <script src="game.js"></script>
</body>
</html>
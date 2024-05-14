//ИГРОВОЕ ПОЛЕ
const newgamemodal = document.querySelector('#newgamemodal');
const profilemodal = document.querySelector('#profilemodal');
let game = document.querySelector('.game'),
result = document.querySelector('.result'),
image = document.querySelector('.image'),
fields = document.querySelectorAll('.field'),
btnGame = document.querySelector('.newgame'),
step = false,
circle = `<svg class = "circle"> <circle r="45" cx="58" cy="58" stroke-width="10" fill = "none" stroke-linecap="round"/> </svg>`,
cross =  `<svg class = "cross"> <line class = "one" x1="15" y1="15" x2="100" y2="100" stroke-width="10" stroke-linecap="round" /><line class = "two" x1="100" y1="15" x2="15" y2="100" stroke-width="10" stroke-linecap="round" /> </svg>`,
count = 0;
statx = 0;
stato = 0;
statd = 0;
var time1 = "0:00";
var time2 = "0:00";
var time3 = "0:00";
var time4 = "0:00";
var time5 = "0:00";
timeIndex1 = 0;
timeIndex2 = 0;
timeIndex3 = 0;
timeIndex4 = 0;
timeIndex5 = 0;
timerstart = 0;
playerstatus = 0;
let crossWin = new Audio('audio/XWin.mp3');
let circleWin = new Audio('audio/OWin.mp3');
let XOWin = new Audio('audio/XOWin.mp3');

function updateStat() {
    document.getElementById('sX').innerHTML = statx;
    document.getElementById('sO').innerHTML = stato;
    document.getElementById('sD').innerHTML = statd;
    document.getElementById('Time1').innerHTML = time1;
    document.getElementById('Time2').innerHTML = time2;
    document.getElementById('Time3').innerHTML = time3;
    document.getElementById('Time4').innerHTML = time4;
    document.getElementById('Time5').innerHTML = time5;
    document.getElementById('TimeIndex1').innerHTML = timeIndex1;
    document.getElementById('TimeIndex2').innerHTML = timeIndex2;
    document.getElementById('TimeIndex3').innerHTML = timeIndex3;
    document.getElementById('TimeIndex4').innerHTML = timeIndex4;
    document.getElementById('TimeIndex5').innerHTML = timeIndex5;
}

function stepCross(target) {
    if(target.tagName == 'svg' || target.tagName == 'line' || target.tagName == 'circle') {
        return;
    }
    result.innerText = "";
    target.innerHTML = cross;
    target.classList.add('x');
    let crossAudio = new Audio('audio/cross.mp3');
    crossAudio.play();
    count++;
    step = true;
    if (timerstart == 0) {
        timer();
        timerstart++;
    }
    if (playerstatus == 0) {
        PlayerA.innerText = "Сейчас ходит: O"
        playerstatus++;
    }
}

function stepCircle(target) {
    if(target.tagName == 'svg'|| target.tagName == 'line' || target.tagName == 'circle') {
        return;
    }
    result.innerText = "";
    target.innerHTML = circle;
    target.classList.add('o');
    let circleAudio = new Audio('audio/circle.mp3');
    circleAudio.play();
    count++;
    step = false;
    if (timerstart == 0) {
        timer();
        timerstart++;
    }
    if (playerstatus == 1) {
        PlayerA.innerText = "Сейчас ходит: X"
        playerstatus--;
    }
}

function newGame() {
    circleWin.currentTime = 0;
    crossWin.currentTime = 0;
    XOWin.currentTime = 0;
    circleWin.pause();
    crossWin.pause();
    XOWin.pause();
    step = false;
    if (result.innerText == "Ничья")
    {statd++;}
    sec = 0;
    min = 0;
    time5 = time4;
    time4 = time3;
    time3 = time2;
    time2 = time1;
    time1 = p.textContent;
    timeIndex5 = timeIndex4;
    timeIndex4 = timeIndex3;
    timeIndex3 = timeIndex2;
    timeIndex2 = timeIndex1;
    timeIndex1++;
    timerstart = 0;
    PlayerA.innerText = "Сейчас ходит: X"
    playerstatus = 0;


    p.textContent = "0:00";
    updateStat();

    count = 0;
    result.innerText = '';
    fields.forEach(item => {
        item.innerHTML = '';
        item.classList.remove('x', 'o', 'activeO', 'activeX');
    });
    newgamemodal.style.display = 'none';
    profilemodal.style.display = 'none';
    game.addEventListener('mouseup', init);
};

function init(e) {
 if (!step) stepCross(e.target);
 else stepCircle(e.target);
 win();
}

function win() {
  let comb = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

for (let i = 0; i < comb.length; i++) {
    if (fields[comb[i][0]].classList.contains('x') 
    && fields[comb[i][1]].classList.contains('x')
    && fields[comb[i][2]].classList.contains('x')) {
    setTimeout(() => {
        fields[comb[i][0]].classList.add('activeX');
        fields[comb[i][1]].classList.add('activeX');
        fields[comb[i][2]].classList.add('activeX');
        result.innerText = "Выиграл X";
        image.innerHTML = '<img src="images/win.png" alt="Победил O">';
        crossWin.play();
        statx++;
        clearTimeout(t);
    });
    game.removeEventListener('click', init);
    newgamemodal.style.display = 'block';
    return;
}

else if (fields[comb[i][0]].classList.contains('o') 
    && fields[comb[i][1]].classList.contains('o')
    && fields[comb[i][2]].classList.contains('o')) {
    setTimeout(() => {
        fields[comb[i][0]].classList.add('activeO');
        fields[comb[i][1]].classList.add('activeO');
        fields[comb[i][2]].classList.add('activeO');
        result.innerText = "Выиграл O";
        image.innerHTML = '<img src="images/win.png" alt="Победил O">';
        circleWin.play();
        stato++;
        clearTimeout(t);
    });
    game.removeEventListener('click', init);
    newgamemodal.style.display = 'block';
    return;
}
}
for (let i = 0; i < comb.length; i++) {
if (count == 9) {
    result.innerText = "Ничья";
    image.innerHTML = '<img src="images/lose.png" alt="Ничья">';
    game.removeEventListener('click', init);
    newgamemodal.style.display = 'block';
    XOWin.play();
    clearTimeout(t);
    return;
}
}
}
btnGame.addEventListener('click', newGame);
game.addEventListener('mouseup', init);

  

function add() {
    tick();
    p.textContent = + (min > 9 ? min : "0" + min)
       		 + ":" + (sec > 9 ? sec : "0" + sec);
    timer();
}


//ТАЙМЕР
p = document.getElementsByTagName('p')[0];
sec = 0;
min = 0;
var t;

function tick(){
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
    }
}

function add() {
    tick();
    p.textContent = + (min > 9 ? min : "0" + min)
       		 + ":" + (sec > 9 ? sec : "0" + sec);
    timer();
}

function timer() {
    t = setTimeout(add, 1000);
}

document.getElementById("update_profileForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../php/update_profile.php", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                alert("Ваш запрос успешно отправлен"); 
                document.getElementById("update_profileForm").reset(); 
            } else {
                console.error("Произошла ошибка при отправке запроса");
            }
        }
    };
    xhr.send(formData);
    fetch('../php/get_profile.php')
    .then(response => response.json())
    .then(data => {
      document.getElementById('name').textContent = "Имя: " + data.name;
      document.getElementById('surname').textContent = "Фамилия: " + data.surname;
      document.getElementById('lastname').textContent = "Отчество: " + data.lastname;
    })
    .catch(error => {
      console.error('Ошибка при получении данных пользователя:', error);
    });
});
function checkinputs() {
    var text1 = document.getElementById('lastnameinput').value;
    var text2 = document.getElementById('nameinput').value;
    var text3 = document.getElementById('surnameinput').value;

    if(text1.length >= 2 && text2.length >= 2 && text3.length >= 2) {
        document.getElementById('submitupdateprofile').disabled = false;
    } else {
        document.getElementById('submitupdateprofile').disabled = true;
    }
}


document.getElementById('profilebtn').addEventListener('click', function() {
    fetch('../php/get_profile.php')
      .then(response => response.json())
      .then(data => {
        document.getElementById('name').textContent = data.name;
        document.getElementById('surname').textContent = data.surname;
        document.getElementById('lastname').textContent = data.lastname;
        if (document.getElementById('name').textContent == "") {
        document.getElementById('name').textContent = "Имя: Нет данных";
        document.getElementById('surname').textContent = "Фамилия: Нет данных";
        document.getElementById('lastname').textContent = "Отчество: Нет данных";
        }
        else {
        document.getElementById('name').textContent = "Имя: " + data.name;
        document.getElementById('surname').textContent = "Фамилия: " + data.surname;
        document.getElementById('lastname').textContent = "Отчество: " + data.lastname;
        }
        profilemodal.style.display = 'block';
      })
      .catch(error => {
        console.error('Ошибка при получении данных пользователя:', error);
      });
  });

 //Крестик модального окна
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
      profilemodal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      profilemodal.style.display = "none";
    }
  }
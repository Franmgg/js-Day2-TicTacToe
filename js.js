window.onload = function () {
    Window.playerTurn = "Jugador 1"
    window.Game = []
    document.getElementById("playerTurn").innerText = Window.playerTurn
    var tds = document.querySelectorAll('td')
    console.log(tds)
    tds.forEach(e => {
        e.addEventListener('click', function (i) {
            if (e.className != "p1" && e.className != "p2") if (Window.playerTurn == "Jugador 1") { e.className = "p1"; Window.playerTurn = "Jugador 2"; document.getElementById("playerTurn").innerText = Window.playerTurn } else {
                e.className = "p2"; Window.playerTurn = "Jugador 1"; document.getElementById("playerTurn").innerText = Window.playerTurn
            }
            check();
        });
    })
}

function check() {
    var tds = document.querySelectorAll('td')
    tds.forEach((e, i) => {
        e.className == "p1" ? window.Game[i] = 1 : e.className == "p2" ? window.Game[i] = 5 : window.Game[i] = 0
    });
    checkDraw ()
    checkRows()
    checkCol()
    checkDia()
    
}
function checkRows() {
    var row = 0
    for (var i = 0; i < 3; i++) {
        row = row + Game[i];
        win(row)
    }
    row = 0
    for (var i = 3; i < 6; i++) {
        row = row + Game[i];
        win(row)
    }

    row = 0
    for (var i = 6; i < 9; i++) {
        row = row + Game[i];
        win(row)
    }

}

function checkCol() {
    var col = 0;
    for (var i = 0; i <= 6; i = i + 3) {
        col = col + Game[i]
        win(col)
    }
    var col = 0;
    for (var i = 1; i <= 7; i = i + 3) {
        col = col + Game[i]
        win(col)
    }
    var col = 0;
    for (var i = 2; i <= 8; i = i + 3) {
        col = col + Game[i]
        win(col)
    }
}

function checkDia() {
    var dia = 0 ;
    for(var i = 0;i<=8;i=i+4){
        dia = dia + Game[i]
        win(dia)
    }
    var dia = 0 ;
    for(var i = 2;i<=6;i=i+2){
        dia = dia + Game[i]
        win(dia)
    }
}
function checkDraw () { 
    var num = 0;
    for(var i = 0 ; i < 9;i++){
       if(Game[i]==0)num++
    } 
    num==0? document.getElementById("playerTurn").innerText="Empate":"";
 }


function win(n) {
    if (n == 3) document.getElementById("playerTurn").innerText = "has ganado jugador 1"
    if (n == 15) document.getElementById("playerTurn").innerText = "has ganado jugador 2"
}
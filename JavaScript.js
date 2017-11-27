function hora() {
    var mihora = new Date();
    var horas = mihora.getHours().toString();
    var minutos = mihora.getMinutes().toString();
    if (minutos.lenght == 1) {
        minutos = "0" + minutos;
    }
    var segundos = mihora.getSeconds().toString();
    if (minutos.lenght == 1) {
        segundos = "0" + segundos;
    }
    document.forms[0].mireloj.value = horas + ":" + minutos + ":" + segundos;
}

var r = setInterval("hora()");

var lista = [""];
var valores = 1;
function apuesta() {
    if (document.getElementById(1.1).checked) {
        lista.push("Barcelona");
        valores = valores * 1.5;

    }
    if (document.getElementById(1.2).checked) {
        lista.push("Empate");
        valores = valores * 3.5;
    }
    if (document.getElementById(1.3).checked) {
        lista.push("Real Madrid");
        valores = valores * 2.5;
    }
    if (document.getElementById(2.1).checked) {
        lista.push("Bayern");
        valores = valores * 1.13;
    }
    if (document.getElementById(2.2).checked) {
        lista.push("Empate");
        valores = valores * 7.8;

    }
    if (document.getElementById(2.3).checked) {
        lista.push("Dortmunt");
        valores = valores * 3.5;
    }
    if (document.getElementById(3.1).checked) {
        lista.push("Inter");
        valores = valores * 2.33;
    }
    if (document.getElementById(3.2).checked) {
        lista.push("Empate");
        valores = valores * 5.7;
    }
    if (document.getElementById(3.3).checked) {
        lista.push("Milan");
        valores = valores * 2.54;
    }
    if (document.getElementById(4.1).checked) {
        lista.push("Chelsea");
        valores = valores * 1.7;
    }
    if (document.getElementById(4.2).checked) {
        lista.push("Empate");
        valores = valores * 7.4;
    }
    if (document.getElementById(4.3).checked) {
        lista.push("Leicester");
        valores = valores * 2.6;
    }
    if (document.getElementById(5.1).checked) {
        lista.push("PSG");
        valores = valores * 1.03;
    }
    if (document.getElementById(5.2).checked) {
        lista.push("Empate");
        valores = valores * 16.3;
    }
    if (document.getElementById(5.3).checked) {
        lista.push("Monaco");
        valores = valores * 5.6;
    }
    if (document.getElementById(6.1).checked) {
        lista.push("Ajax");
        valores = valores * 1.12;
    }
    if (document.getElementById(6.2).checked) {
        lista.push("Empate");
        valores = valores * 8.7;
    }
    if (document.getElementById(6.3).checked) {
        lista.push("Feyenord");
        valores = valores * 8.2;
    }
    if (document.getElementById(7.1).checked) {
        lista.push("Manchester City");
        valores = valores * 2.4;
    }
    if (document.getElementById(7.2).checked) {
        lista.push("Empate");
        valores = valores * 4.5;
    }
    if (document.getElementById(7.3).checked) {
        lista.push("Manchester United");
        valores = valores * 2.8;
    }
}


function ganancia() {
    apuesta();
    var ingresos = document.getElementById('ingresos').value;
    if (ingresos >= 1000) {
        
        var cambio = "";
        var x = ingresos * valores;
        cambio = valores.toString();
        cambio = x.toString();
        myFunction(valores.toString(), cambio);
        document.getElementById("ingresos").innerHTML = "";
        valores = 1;
        ingresos = 0;
    } else {
        alert("Ingrese una cantidad mayor a $1000");
    }
}

function myFunction(CUOTA, gana) {
    if (confirm("Desea realizar la apuesta con una cuota de " + CUOTA + " y ganancia de "+ gana +"?") == true) {
        alert("Apuesta Realizada");
    }
}

function verApuesta()
{
    alert("Tu apuesta es: " + lista);
}
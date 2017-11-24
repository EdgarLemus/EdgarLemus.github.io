function funcionApostar() {
    //1. Encontrar el elemento que necesito
    var caja = document.getElementById("apuesta").value;
    //2. Usar la propiedad que necesito
    if (caja < 1000) {
        alert('El monto mínimo es de 1000 pesos');
    } else if (caja >= 1000) {
        alert('Seguro que quieres hacer la apuesta de ' + caja + ' pesos ?');
    }
    var valorTotalAApostar = apuesta();
    alert('La ganancia de apuesta es de' + valorTotalAApostar);
    
}


var misApuestasGanada = ['x','1','2','2','1','x','1'];
var misApuestasPerdida = ['x','1','1','x','1','2','1'];

function apuesta() {
    var caja1 = document.getElementById("apuesta").value;
    var sumatoria1 = sumatoria();
    var ganancia = caja1 * sumatoria1;
    return ganancia;
}

function mostrarPerdida()
{
    if(misApuestasPerdida[0] == "x")
    {
        document.getElementById("1").innerHTML= "Ganada";
    }else{
        document.getElementById("1").innerHTML= "Perdida";
    }

    if(misApuestasPerdida[1] == "1")
    {
        document.getElementById("2").innerHTML= "Ganada";
    }else{
        document.getElementById("2").innerHTML= "Perdida";
    }

    if(misApuestasPerdida[2] == "1")
    {
        document.getElementById("3").innerHTML= "Ganada";
    }else{
        document.getElementById("3").innerHTML= "Perdida";
    }

    if(misApuestasPerdida[3] == "x")
    {
        document.getElementById("4").innerHTML= "Ganada";
    }else{
        document.getElementById("4").innerHTML= "Perdida";
    }

    if(misApuestasPerdida[4] == "1")
    {
        document.getElementById("5").innerHTML= "Ganada";
    }else{
        document.getElementById("5").innerHTML= "Perdida";
    }

    if(misApuestasPerdida[5] == "2")
    {
        document.getElementById("6").innerHTML= "Ganada";
    }else{
        document.getElementById("6").innerHTML= "Perdida";
    }

    if(misApuestasPerdida[6] == "1")
    {
        document.getElementById("7").innerHTML= "Ganada";
    }else{
        document.getElementById("7").innerHTML= "Perdida";
    }

    document.getElementById("estado").innerHTML = "Ganada";
}

function mostrarGanada()
{
    if(misApuestasGanada[0] == "x")
    {
        document.getElementById("1").innerHTML= "Ganada";
    }else{
        document.getElementById("1").innerHTML= "Perdida";
    }

    if(misApuestasGanada[1] == "1")
    {
        document.getElementById("2").innerHTML= "Ganada";
    }else{
        document.getElementById("2").innerHTML= "Perdida";
    }

    if(misApuestasGanada[2] == "1")
    {
        document.getElementById("3").innerHTML= "Ganada";
    }else{
        document.getElementById("3").innerHTML= "Perdida";
    }

    if(misApuestasGanada[3] == "x")
    {
        document.getElementById("4").innerHTML= "Ganada";
    }else{
        document.getElementById("4").innerHTML= "Perdida";
    }

    if(misApuestasGanada[4] == "1")
    {
        document.getElementById("5").innerHTML= "Ganada";
    }else{
        document.getElementById("5").innerHTML= "Perdida";
    }

    if(misApuestasGanada[5] == "2")
    {
        document.getElementById("6").innerHTML= "Ganada";
    }else{
        document.getElementById("6").innerHTML= "Perdida";
    }

    if(misApuestasGanada[6] == "1")
    {
        document.getElementById("7").innerHTML= "Ganada";
    }else{
        document.getElementById("7").innerHTML= "Perdida";
    }

    document.getElementById("estado").innerHTML = "Perdida";
}

function ganancia()
{
    var sumatoria = 0;
    var v1 = document.getElementById("1.2.2").innerHTML;
    var v2 = document.getElementById("2.1.1").innerHTML;
    var v3 = document.getElementById("3.3.3").innerHTML;
    var v4 = document.getElementById("4.3.3").innerHTML;
    var v5 = document.getElementById("5.1.1").innerHTML;
    var v6 = document.getElementById("6.2.2").innerHTML;
    var v7 = document.getElementById("7.1.1").innerHTML;

    sumatoria = sumatoria + parseInt(v1);
    sumatoria = sumatoria + parseInt(v2);
    sumatoria = sumatoria + parseInt(v3);
    sumatoria = sumatoria + parseInt(v4);
    sumatoria = sumatoria + parseInt(v5);
    sumatoria = sumatoria + parseInt(v6);
    sumatoria = sumatoria + parseInt(v7);

    document.getElementById("valor").innerHTML = sumatoria.toString();
    var ganancia = 5000 * sumatoria;
    document.getElementById("ganancia").innerHTML = "$" + ganancia.toString();
    document.getElementById("resultado").innerHTML = misApuestas[1];
}

function resultado()
{
    for(var i =0; i<misApuestas.length; i++)
    {
        
    }
}

function sumatoria() {
    alert('entro');
    var sumatoria = 0;

    if (document.formu1.d1[0].checked) {
        sumatoria = sumatoria + document.getElementById("1.1.1").innerHTML;
    }
    if (document.formu1.d1[1].checked) {
        sumatoria = sumatoria + document.getElementById("1.2.2").innerHTML;
    }
    if (document.formu1.d1[2].checked) {
        sumatoria = sumatoria + document.getElementById("1.3.3").innerHTML;
    }
    if (document.formu2.d2[0].checked) {
        sumatoria = sumatoria + document.getElementById("2.1.1").innerHTML;
    }
    if (document.formu2.d2[1].checked) {
        sumatoria = sumatoria + document.getElementById("2.2.2").innerHTML;
    }
    if (document.formu2.d2[2].checked) {
        sumatoria = sumatoria + document.getElementById("2.3.3").innerHTML;
    }
    if (document.formu3.d3[0].checked) {
        sumatoria = sumatoria + document.getElementById("3.1.1").innerHTML;
    }
    if (document.formu3.d3[1].checked) {
        sumatoria = sumatoria + document.getElementById("3.2.2").innerHTML;
    }
    if (document.formu3.d3[2].checked) {
        sumatoria = sumatoria + document.getElementById("3.3.3").innerHTML;
    }
    if (document.formu4.d4[0].checked) {
        sumatoria = sumatoria + document.getElementById("4.1.1").innerHTML;
    }
    if (document.formu4.d4[1].checked) {
        sumatoria = sumatoria + document.getElementById("4.2.2").innerHTML;
    }
    if (document.formu4.d4[2].checked) {
        sumatoria = sumatoria + document.getElementById("4.3.3").innerHTML;
    }
    if (document.formu5.d5[0].checked) {
        sumatoria = sumatoria + document.getElementById("5.1.1").innerHTML;
    }
    if (document.formu5.d5[1].checked) {
        sumatoria = sumatoria + document.getElementById("5.2.2").innerHTML;
    }
    if (document.formu5.d5[2].checked) {
        sumatoria = sumatoria + document.getElementById("5.3.3").innerHTML;
    }
    if (document.formu6.d6[0].checked) {
        sumatoria = sumatoria + document.getElementById("6.1.1").innerHTML;
    }
    if (document.formu6.d6[1].checked) {
        sumatoria = sumatoria + document.getElementById("6.2.2").innerHTML;
    }
    if (document.formu6.d6[2].checked) {
        sumatoria = sumatoria + document.getElementById("6.3.3").innerHTML;
    }
    if (document.formu7.d7[0].checked) {
        sumatoria = sumatoria + document.getElementById("7.1.1").innerHTML;
    }
    if (document.formu7.d7[1].checked) {
        sumatoria = sumatoria + document.getElementById("7.2.2").innerHTML;
    }
    if (document.formu7.d7[2].checked) {
        sumatoria = sumatoria + document.getElementById("7.3.3").innerHTML;
    }

    return sumatoria;
}

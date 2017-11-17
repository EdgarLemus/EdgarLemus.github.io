function hora()
{
    var mihora= new Date();
    var horas = mihora.getHours().toString();
    var minutos = mihora.getMinutes().toString();
    if(minutos.lenght == 1)
       {
           minutos="0"+minutos;
       }
    var segundos = mihora.getSeconds().toString();
    if(minutos.lenght == 1)
       {
           segundos="0"+segundos;
       }
    document.forms[0].mireloj.value = horas+":"+minutos+":"+segundos;
}

var r = setInterval("hora()");

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

$(function() {
    $.ajax({
      url: '//connect.facebook.net/es_ES/all.js',
      dataType: 'script',
      cache: true,
      success: function() {
        FB.init({
          appId: '335324360274138',
          xfbml: true
        });
        FB.Event.subscribe('auth.authResponseChange', function(response) {
          if (response && response.status == 'connected') {
            FB.api('/me', function(response) {
              alert('Nombre: ' + data.name);
            });
          }
        });
      }
    });
  });

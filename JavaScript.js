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

window.fbAsyncInit = function () {
    FB.init({
        appId: '335324360274138',
        cookie: true,  
        xfbml: true,  
        version: 'v2.11' 
    });
    FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
            document.getElementById().innerHTML = 'Okay you are connected';
        } else if (response.status === 'not_authorized') {
            document.getElementById().innerHTML = 'You are not connected';
        } else {
            document.getElementById().innerHTML = 'Okay you are logged in to any facebook account';
        }
    });
    FB.AppEvents.logPageView();
}

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

function login() {
    FB.login(function (response) {
        if (response.status === 'connected') {
            document.getElementById('demo').innerHTML = 'Okay you are connected';
        } else if (response.status === 'not_authorized') {
            document.getElementById('demo').innerHTML = 'You are not connected';
        } else {
            document.getElementById('demo').innerHTML = 'Okay you are logged in to any facebook account';
        }
    })
}

function info(){
    FB.api('/me','GET',{fileds:'first_name,last_name_name_id'},function(response){
        document.getElementById('demo').innerHTML=response.name;
    });
}


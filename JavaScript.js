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

function info() {
    FB.api('/me', 'GET', { fileds: 'first_name,last_name_name_id' }, function (response) {
        document.getElementById('firstR').innerHTML = response.first_name;
        document.getElementById('lastR').innerHTML = response.last_name;
        document.getElementById('emailR').innerHTML = response.email;
    });
}

function easerLogin() {
    document.getElementById('emailL').innerHTML = '';
    document.getElementById('passwordL').innerHTML = '';
}

function easerSignup() {
    document.getElementById('emailR').innerHTML = '';
    document.getElementById('passwordR').innerHTML = '';
    document.getElementById('passwordRR').innerHTML = '';
    document.getElementById('firstR').innerHTML = '';
    document.getElementById('lastR').innerHTML = '';
    document.getElementById('documents').innerHTML = '';
    document.getElementById('birthdate').innerHTML = '';
}

function save() {

    if(equalPassword() === true)
    {
    var usuario = {};
    usuario.first_name = document.getElementById('firstR').value;
    usuario.last_name = document.getElementById('lastR').value;
    usuario.password = document.getElementById('passwordR').value;
    usuario.email = document.getElementById('emailR').value;
    usuario.documents = document.getElementById('documents').value;
    usuario.birthdate = document.getElementById('birthdate').value;
    return usuario;
    easerSignup();
    }
}

function equalPassword()
{
    var val = false;
    var pass = document.getElementById('passwordR').value;
    var passR = document.getElementById('passwordRR').value;
    if(pass === passR)
    {
        val = true;
    }

    return val;
}

function registrerUser() {
    if (data()) {
        console.log("User already exists");
        alert("User already exists")

    }
    else {
        var user = save();
        var serializado = "";
        serializado = JSON.stringify(user);
        window.alert(serializado);
        var request = new XMLHttpRequest();        
        request.open("POST", "/registro", false);
        request.send(serializado);
        console.log("Complete Record");
    }
}

function loadData() {
    var xml = new XMLHttpRequest();
    xml.open("GET", "/usuarios", false);
    xml.send();
    var res = xml.responseText;
    console.log(res);
    return JSON.parse(res);
}

function data() {
    var dato = loadData();
    console.log(dato);
    var loginn = save();
    var found = false;
    for (var i = 0; i < dato.length; i++) {
        var nombre = dato[i].user;
        console.log(nombre);
        if (nombre == loginn.user) {
            found = true;
        }
    }
    return found;
}

function saveField(){
    var usuario = {};
    usuario.usuario = document.getElementById( "email" ).value ;
    usuario.clave = document.getElementById( "clave" ).value ;
    return usuario;
}

function signIn(){
    if (checkData()){
        easerLogin();
      console.log("Welcome");
      alert("Welcome")
    }
    else{
		var usuario=saveField();

		var serializado = "";
		serializado = JSON.stringify( usuario );
		window.alert( serializado );

		var xmlhttp = new XMLHttpRequest();
		var url = "/login";
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			alert("Welcome");
			}
			if (xmlhttp.readyState == 4 && xmlhttp.status != 200) {
			alert("Email and Password Faill");
			}
		};
		xmlhttp.open("POST", url, true);
		xmlhttp.send(serializado);

    }
    
    function cargarDatos() {
        var xmlhttp = new XMLHttpRequest();
        var url = "/login";
        xmlhttp.open("GET", url, false);
        xmlhttp.send();
        var res = xml.responseText;
        console.log(res);
        return JSON.parse(res);
        }

function checkData() {
    var dato = cargarDatos();
    console.log(dato);
    var logeo = saveField();
    var encontrado = false;
    for (var i = 0; i < dato.length; i++){
      var nombre = dato[i].usuario;
      var clave = dato[i].clave;
      console.log(nombre);
      if (nombre == logeo.usuario && clave == logeo.clave) {
        encontrado = true;
      }
    }
    return encontrado;
    }
}
var xhr = new XMLHttpRequest();

// Forme générale du lien :
// http://api.openweathermap.org/data/2.5/weather?q=Metz&3c084bd74c2f77f02d6d6c30c2018bf0

var base_url = "http://api.openweathermap.org/data/2.5/";
var base = "weather";
var base_forecast = "forecast";
var city = "Metz";
var units = "metric";
var appid = "dd8984d9d3055c049aa688cc2dc715b7";
var urlforecast = "http://api.openweathermap.org/data/2.5/forecast";

function get_url() {
    return base_url + base + "?"
        + "q=" + city + "&"
        + "units=" + units + "&"
        + "appid=" + appid;
}

// api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml
function get_url_forecast(){
    return base_url + base_forecast + "?"
        + "q=" + city + "&"
        + "units=" + units + "&"
        + "appid=" + appid;
}

function get_urlforecast(){
    return urlforecast + "?"
    + "q=" + city + "&" 
    + "units=" + units + "&"
    + "appid=" + appid;
}

function init_page() {
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("url").innerHTML = get_url();
            document.getElementById("url").innerHTML = get_urlforecast();

            var response = JSON.parse(this.responseText);
            var temperature = response.main.temp;

            var icon = response.weather[0].icon;
            var src = "http://openweathermap.org/img/w/" + icon + ".png";
            var response = JSON.parse(this.responseText);
            var tempforecast = response.list.main.temp;
            document.getElementById("meteo").innerHTML = temperature;
            document.getElementById("icon").src = src;
        }
    };
    
    xhr.open("GET", get_url(), true);
    xhr.send();

    get_D1();
    

}

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
}

function get_temperature() {
    city = document.getElementById("ville").value;

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("url").innerHTML = get_url();

            if(document.getElementById("url_visibility").checked) {
                document.getElementById("url").style.display = "block";
            }
            else {
                document.getElementById("url").style.display = "none";
            }

            var response = JSON.parse(this.responseText);
            var temperature = response.main.temp;

            var icon = response.weather[0].icon;
            var src = "http://openweathermap.org/img/w/" + icon + ".png";
            
            document.getElementById("tempNow").innerHTML = temperature;
            document.getElementById("icon").src = src;

        }
    };
    
    xhr.open("GET", get_url(), true);
    xhr.send();
}

function get_D1() {
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var temp = response.list[8].main.temp;
            document.getElementById("TempD1").innerHTML = temp;

            var tempmin = response.list[8].main.temp_min;
            document.getElementById("TempMinD1").innerHTML = tempmin;

            var tempmax = response.list[8].main.temp_max;
            document.getElementById("TempMaxD1").innerHTML = tempmax;
            
            var date = response.list[8].dt
            console.log(timeConverter(date));
            document.getElementById("DateD1").innerHTML = date;
           
            var icon=response.list[8].weather.icon;
            document.getElementById("IconD1").innerHTML = icon;
            
        }
    };
    
    xhr.open("GET", get_url_forecast(), true);
    xhr.send();
}

function get_D2() {
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var temp = response.list[16].main.temp;
            document.getElementById("TempD2").innerHTML = temp;

            var tempmin = response.list[16].main.temp_min;
            document.getElementById("TempMinD2").innerHTML = tempmin;

            var tempmax = response.list[16].main.temp_max;
            document.getElementById("TempMaxD2").innerHTML = tempmax;
            
            var date = response.list[16].dt;
            document.getElementById("DateD2").innerHTML = date;
            
            var icon=response.list[16].weather.icon;
            document.getElementById("IconD2").innerHTML = icon;
        }
    };
    
    xhr.open("GET", get_url_forecast(), true);
    xhr.send();
}

function get_D3() {
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var temp = response.list[24].main.temp;
            document.getElementById("TempD3").innerHTML = temp;

            var tempmin = response.list[24].main.temp_min;
            document.getElementById("TempMinD3").innerHTML = tempmin;

            var tempmax = response.list[24].main.temp_max;
            document.getElementById("TempMaxD3").innerHTML = tempmax;
            
            var date = response.list[24].dt;
            document.getElementById("DateD3").innerHTML = date;
            
            var icon=response.list[24].weather.icon;
            document.getElementById("IconD3").innerHTML = icon;
        }
    };
    
    xhr.open("GET", get_url_forecast(), true);
    xhr.send();
}

function get_D4() {
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var temp = response.list[32].main.temp;
            document.getElementById("TempD4").innerHTML = temp;

            var tempmin = response.list[32].main.temp_min;
            document.getElementById("TempMinD4").innerHTML = tempmin;

            var tempmax = response.list[32].main.temp_max;
            document.getElementById("TempMaxD4").innerHTML = tempmax;
            
            var date = response.list[32].dt;
            document.getElementById("DateD4").innerHTML = date;
            
            var icon=response.list[32].weather.icon;
            document.getElementById("IconD4").innerHTML = icon;
        }
    };
    
    xhr.open("GET", get_url_forecast(), true);
    xhr.send();
}

function get_D5() {
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var temp = response.list[40].main.temp;
            document.getElementById("TempD5").innerHTML = temp;

            var tempmin = response.list[40].main.temp_min;
            document.getElementById("TempMinD5").innerHTML = tempmin;

            var tempmax = response.list[40].main.temp_max;
            document.getElementById("TempMaxD5").innerHTML = tempmax;
            
            var date = response.list[40].dt;
            document.getElementById("DateD5").innerHTML = date;
            
            var icon=response.list[40].weather.icon;
            document.getElementById("IconD5").innerHTML = icon;
        }
    };
    
    xhr.open("GET", get_url_forecast(), true);
    xhr.send();
}

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
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("url").innerHTML = get_url();
            document.getElementById("url").innerHTML = get_urlforecast();

            var response = JSON.parse(this.responseText);
            var temperature = response.main.temp;

            var icon = response.weather[0].icon;
            var src = "http://openweathermap.org/img/w/" + icon + ".png";
            var response = JSON.parse(this.responseText);
            document.getElementById("meteo").innerHTML = temperature;
            document.getElementById("icon").src = src;
        }
    };
    
    xhr.open("GET", get_url(), true);
    xhr.open("GET", get_urlforecast(),true);
    get_Forecast();
    xhr.send;
}

function get_temperature() {
    var xhr = new XMLHttpRequest();
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

function get_Forecast() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);

            //D1

            var tempD1 = response.list[7].main.temp;
            document.getElementById("TempD1").innerHTML = tempD1;

            var tempminD1 = response.list[7].main.temp_min;
            document.getElementById("TempMinD1").innerHTML = tempminD1;

            var tempmaxD1 = response.list[7].main.temp_max;
            document.getElementById("TempMaxD1").innerHTML = tempmaxD1;
            
            var dateD1 = response.list[7].dt_txt;
            document.getElementById("DateD1").innerHTML = dateD1;
           
            var iconD1 = response.list[7].weather.icon;
            document.getElementById("IconD1").innerHTML = iconD1;
            
            //D2

            var tempD2 = response.list[15].main.temp;
            document.getElementById("TempD2").innerHTML = tempD2;

            var tempminD2 = response.list[15].main.temp_min;
            document.getElementById("TempMinD2").innerHTML = tempminD2;

            var tempmaxD2 = response.list[15].main.temp_max;
            document.getElementById("TempMaxD2").innerHTML = tempmaxD2;
            
            var dateD2 = response.list[15].dt_txt;
            document.getElementById("DateD2").innerHTML = dateD2;
            
            var iconD2 = response.list[15].weather.icon;
            document.getElementById("IconD2").innerHTML = iconD2;
            
            //D3

            var tempD3 = response.list[23].main.temp;
            document.getElementById("TempD3").innerHTML = tempD3;

            var tempminD3 = response.list[23].main.temp_min;
            document.getElementById("TempMinD3").innerHTML = tempminD3;

            var tempmaxD3 = response.list[23].main.temp_max;
            document.getElementById("TempMaxD3").innerHTML = tempmaxD3;
            
            var dateD3 = response.list[23].dt_txt;
            document.getElementById("DateD3").innerHTML = dateD3;
            
            var iconD3 = response.list[23].weather.icon;
            document.getElementById("IconD3").innerHTML = iconD3;
        
            //D4

            var tempD4 = response.list[31].main.temp;
            document.getElementById("TempD4").innerHTML = tempD4;

            var tempminD4 = response.list[31].main.temp_min;
            document.getElementById("TempMinD4").innerHTML = tempminD4;

            var tempmaxD4 = response.list[31].main.temp_max;
            document.getElementById("TempMaxD4").innerHTML = tempmaxD4;
            
            var dateD4 = response.list[31].dt_txt;
            document.getElementById("DateD4").innerHTML = dateD4;
            
            var iconD4 = response.list[31].weather.icon;
            document.getElementById("IconD4").innerHTML = iconD4;
            
            //D5

            var tempD5 = response.list[39].main.temp;
            document.getElementById("TempD5").innerHTML = tempD5;

            var tempminD5 = response.list[39].main.temp_min;
            document.getElementById("TempMinD5").innerHTML = tempminD5;

            var tempmaxD5 = response.list[39].main.temp_max;
            document.getElementById("TempMaxD5").innerHTML = tempmaxD5;
            
            var dateD5 = response.list[39].dt_txt;
            document.getElementById("DateD5").innerHTML = dateD5;
            
            var iconD5 = response.list[39].weather.icon;
            document.getElementById("IconD5").innerHTML = iconD5;
        }
    };
    
    xhr.open("GET", get_urlforecast(), true);
    xhr.send();
}

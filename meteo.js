var xhr = new XMLHttpRequest();

// Forme générale du lien :
// http://api.openweathermap.org/data/2.5/weather?q=Metz&3c084bd74c2f77f02d6d6c30c2018bf0

var base_url = "http://api.openweathermap.org/data/2.5/";
var base = "weather";
var base_forecast = "forecast";
var city = "Metz";
var units = "metric";
var appid = "dd8984d9d3055c049aa688cc2dc715b7";

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

function init_page() {
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("url").innerHTML = get_url();

            var response = JSON.parse(this.responseText);
            var temperature = response.main.temp;

            var icon = response.weather[0].icon;
            var src = "http://openweathermap.org/img/w/" + icon + ".png";

            document.getElementById("meteo").innerHTML = temperature;
            document.getElementById("icon").src = src;
        }
    };
    
    xhr.open("GET", get_url(), true);
    xhr.send();

    get_temperatureD1();
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

function get_temperatureD1() {
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var temp = response.list[0].main.temp;
            var eltDate = document.getElementById("TempD1").innerHTML = temp;;
        }
    };
    
    xhr.open("GET", get_url_forecast(), true);
    xhr.send();
}
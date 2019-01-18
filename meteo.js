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
            var tempminforecast = response.list.main.temp_min;
            var tempmaxforecast = response.list.main.temp_max;
            var iconforecast = response.list.weather.icon;

            var src = "http://openweathermap.org/img/w/" + icon + ".png";

            document.getElementById("iconforecast").src = src;
            document.getElementById("tempforecast").innerhtml = tempforecast;
            document.getElementById("tempmin").innerhtml = tempminforecast;
            document.getElementById("tempmax").innerhtml = tempmaxforecast;
            document.getElementById("meteo").innerHTML = temperature;
            document.getElementById("icon").src = src;
        }
    };
    
    xhr.open("GET", get_url(), true);
    xhr.send();
    xhr.open("GET", get_urlforecast(), true);
    xhr.send();
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

function get_forecast(){
    city = document.getElementById("ville").value;
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("url").innerHTML = get_urlforecast();

            if(document.getElementById("url_visibility").checked) {
                document.getElementById("url").style.display = "block";
            }
            else {
                document.getElementById("url").style.display = "none";
            }

            var response = JSON.parse(this.responseText);
            var tempforecast = response.list.main.temp;
            var tempminforecast = response.list.main.temp_min;
            var tempmaxforecast = response.list.main.temp_max;
            var iconforecast = response.list.weather.icon;

            var src = "http://openweathermap.org/img/w/" + icon + ".png";

            document.getElementById("iconforecast").src = src;
            document.getElementById("tempforecast").innerhtml = tempforecast;
            document.getElementById("tempmin").innerhtml = tempminforecast;
            document.getElementById("tempmax").innerhtml = tempmaxforecast;
        }
        xhr.open("GET", get_urlforecast(), true);
        xhr.send();
    }    
}
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
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("url").innerHTML = get_url();

            var response = JSON.parse(this.responseText);
            var temperature = response.main.temp;

            var icon = response.weather[0].icon;
            var src = "http://openweathermap.org/img/w/" + icon + ".png";

            document.getElementById("tempNow").innerHTML = temperature+ "<span class=\"celsius\">\u2103</span>";
            document.getElementById("icon").src = src;
        }
    };
    xhr.open("GET", get_url(), true);
    xhr.send();

    var countDay = 0;
    for(i=1; i<41; i+=8){
        countDay += 1;
        get_weather(countDay, i);
    }
}

function get_temperature() {
    city = document.getElementById("ville").value;
    let xhr = new XMLHttpRequest();
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
    var countDay = 0;
    for(i=1; i<41; i+=8){
        countDay += 1;
        get_weather(countDay, i);
    };
}

function get_weather(day, nextDay) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var temp = response.list[nextDay].main.temp;
            var dt_txt = response.list[nextDay].dt_txt;
            var tempMin = response.list[nextDay].main.temp_min;
            var tempMax = response.list[nextDay].main.temp_max;
            var icon = response.list[nextDay].weather[0].icon;
            document.getElementById("TempD" + day ).innerHTML = temp;
            document.getElementById("TempMinD" + day ).innerHTML = tempMin + "/" + tempMax;
            document.getElementById("DateD" + day).innerHTML = dt_txt;
            document.getElementById("iconImgD" + day).src = "http://openweathermap.org/img/w/" + icon + ".png";
        }
    };
    xhr.open("GET", get_url_forecast(), true);
    xhr.send();
}

function more_Info(){
    var nameCity =document.getElementById("ville");
    window.location.href = "./Template/Essai.html?"+ nameCity.value;
}

/* function get_weatherD2(day) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var temp = response.list[8].main.temp;
            var dt_txt = response.list[8].dt_txt;
            var tempMin = response.list[8].main.temp_min;
            var tempMax = response.list[8].main.temp_max;
            var icon = response.list[8].weather[0].icon;
            document.getElementById("TempD2").innerHTML = temp;
            document.getElementById("TempMinD2").innerHTML = tempMin + "/" + tempMax;
            document.getElementById("DateD2").innerHTML = dt_txt;
            document.getElementById("iconImgD2").childNodes[0].src = "http://openweathermap.org/img/w/" + icon + ".png";
        }
    };
    xhr.open("GET", get_url_forecast(), true);
    xhr.send();
}*/
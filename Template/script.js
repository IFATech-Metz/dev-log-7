$(document).ready(function () {
	$('#submit').click(function () {
		var cityName = $('#input').val();
		var apikey   = '53f4e4f4801c630c849e117e72a50ab8';
		var weatherURL = 'http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&units=metric&APPID=' + apikey;
		//var weatherURL = 'https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22';- 
		console.log(weatherURL); 

		$.ajax({
			url: weatherURL,
			success: function (result) {
				console.log(result);

				var html;
				var maDate=new Date()
				var type = $('#select').val();
				var label = $('#select option:selected').text();

				switch (type) {
						case 'main':
						var main = result.main;
						html = '<ul>' + '<li><b>Température: </b>' + main.temp + '<em> (min: '+main.temp_min +', max: '+ main.temp_max +')</em></li>' +
							'<li><b>Pression: </b>' + main.pressure + '</li>' + '</ul>';
				
						break;
						case 'weather':
						html = '<ul>';
						$.each(result.weather, function (key, weather) {

							html += '<li><img class="weather-icon" src="http://openweathermap.org/img/w/' + weather.icon + '.png"/><b>' + '</b></li>' +
								'<li><b>Description: </b>' + weather.description + '</li>';
						});

						html +='</ul>'
						break;
						case 'wind':
						var wind = result.wind;
						html = '<ul>' + '<li><b>Degré: </b>' + wind.deg + '</li>' + '<li><b>Vitesse: </b>' + wind.speed + '</li>' + '</ul>';
						break;
						case 'sys':
						var sys = result.sys;
						html = '<ul>' + '<li><b>Pays: </b>' + sys.country + '</li>' + '<li><b>Coucher de soleil: </b>' + sys.sunset+'</li>' +'<li><b>Lever de soleil: </b>' + sys.sunrise+'</li>' +
									'</ul>';
						break;
						case 'coord':
						var coord = result.coord;
						html = '<ul>'+ '<li><b>Longitude: </b>' + coord.lon + '</li>' + '<li><b>Latitude: </b>' + coord.lat +'</li>' +' </ul>';
						break;


					default: return;
				}
				$('#content').prepend(
					'<article class="weather">' + '<h2>'+result.name + '<em>(' + label + ')</em></h2>' +
					'<div class ="weather-main">' + html +'</div>' +'</article>'
				);
			}

		})
	})

});
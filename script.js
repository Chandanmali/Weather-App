const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd894ff9ca5msh9ff67ff83cf7f46p1c4aeajsn774b02360129',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
	cityName.innerHTML = city
	//shanghai.innerHTML = city

       fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {


		console.log(response)

		//cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		//temp3.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		//wind_speed3.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err))
};

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Thane")  //default value


// for benjin
const other = (ben)=>{
	beijing.innerHTML = ben
	//shanghai.innerHTML = city

       fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Beijing', options)
	.then(response => response.json())
	.then((response) => {


		console.log(response)

		cloud_pct3.innerHTML = response.cloud_pct
		
		temp3.innerHTML = response.temp
		feels_like3.innerHTML = response.feels_like
		humidity3.innerHTML = response.humidity
		
		min_temp3.innerHTML = response.min_temp
		max_temp3.innerHTML = response.max_temp
		//wind_speed.innerHTML = response.wind_speed
		wind_speed3.innerHTML = response.wind_speed
		//wind_speed2.innerHTML = response.wind_speed
		wind_degrees3.innerHTML = response.wind_degrees
		sunrise3.innerHTML = response.sunrise
		sunset3.innerHTML = response.sunset
	})
	.catch(er => console.error(er))
};

   other("Beijing");  //default value




// for sydney
const other1 = (sid)=>{
	sydney.innerHTML = sid
	//shanghai.innerHTML = city

       fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Sydney', options)
	.then(response => response.json())
	.then((response) => {


		console.log(response)

		cloud_pct4.innerHTML = response.cloud_pct
		
		temp4.innerHTML = response.temp
		feels_like4.innerHTML = response.feels_like
		humidity4.innerHTML = response.humidity
		
		min_temp4.innerHTML = response.min_temp
		max_temp4.innerHTML = response.max_temp
		//wind_speed.innerHTML = response.wind_speed
		wind_speed4.innerHTML = response.wind_speed
		//wind_speed2.innerHTML = response.wind_speed
		wind_degrees4.innerHTML = response.wind_degrees
		sunrise4.innerHTML = response.sunrise
		sunset4.innerHTML = response.sunset
	})
	.catch(er1 => console.error(er1))
};

   other1("Sydney");  //default value



   // for aMERICA
const other2 = (ame)=>{
	Washington.innerHTML = ame
	//shanghai.innerHTML = city

       fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Washington', options)
	.then(response => response.json())
	.then((response) => {


		console.log(response)

		cloud_pct5.innerHTML = response.cloud_pct
		
		temp5.innerHTML = response.temp
		feels_like5.innerHTML = response.feels_like
		humidity5.innerHTML = response.humidity
		
		min_temp5.innerHTML = response.min_temp
		max_temp5.innerHTML = response.max_temp
		wind_speed5.innerHTML = response.wind_speed
		wind_degrees5.innerHTML = response.wind_degrees
		sunrise5.innerHTML = response.sunrise
		sunset5.innerHTML = response.sunset
	})
	.catch(er2 => console.error(er2))
};

   other2("Washington");  //default value




   // for aMERICA
const other3 = (eng)=>{
	London.innerHTML = eng
	//shanghai.innerHTML = city

       fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London', options)
	.then(response => response.json())
	.then((response) => {


		console.log(response)

		cloud_pct6.innerHTML = response.cloud_pct
		
		temp6.innerHTML = response.temp
		feels_like6.innerHTML = response.feels_like
		humidity6.innerHTML = response.humidity
		
		min_temp6.innerHTML = response.min_temp
		max_temp6.innerHTML = response.max_temp
		wind_speed6.innerHTML = response.wind_speed
		wind_degrees6.innerHTML = response.wind_degrees
		sunrise6.innerHTML = response.sunrise
		sunset6.innerHTML = response.sunset
	})
	.catch(er3 => console.error(er3))
};

   other3("London");  //default value


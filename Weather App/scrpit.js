const apiKey = '2f06e5aa1a49e317d138162f469c17c0' //Api key

const getWeatherButton = document.getElementById('get-weather');
const getlocationInput = document.getElementById('locationinput');
const getWeatherDetails = document.getElementById('weather-details');
const locationElement = document.getElementById('location');

 // Event listener

  getWeatherButton.addEventListener( 'click', () =>{

     const location= getlocationInput.value;
      
       if(location){

         fetchWeather(location);
       }else{
        alert('please enter the city');
       }
  } );

     // Fetching data from APIs

      function fetchWeather(location){
        
         const url='https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}';

          fetch(url)
          .then(response => response.json())
          .then (data => {
              displayWeather(data);
          } )
          .catch (error => {
               alert ('City not found, Please try again');
               console.error ('Error featching weather details');
          });
      };

       // Display the weather data

        function displayWeather(data){

            const cityName =document.getElementById('City-Name');
            const temperature = document.getElementById('Temperature');
            const description = document.getElementById('Description');
            const humidity = document.getElementById('Humidity');



              cityName.textContent = 'Weather in ${data.name}';
              temperature.textContent = 'Temprature: ${data.name.temp}°C';
              description.textContent = 'Description: ${data.weather[0].description }';
              humidity.textContent = 'Humidity: ${data.main.humidity}%';
        };

        


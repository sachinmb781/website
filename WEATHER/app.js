var search = document.getElementById("search");

search.addEventListener("keyup", e => {
  if (e.keyCode == 13) {
    //keycode of enter key is 13. onli if enter is pressed ,results is shown
    var searchText = e.target.value;
  }

  getWeather(searchText);
});

function getWeather(searchText) {
  const weatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${searchText}&&mode=json&units=metric&APPID=5dee0ec5e88c7476669591880f6b6c8f`;
  window
    .fetch(weatherApi)
    .then(data => {
      data
        .json()
        .then(weather => {
          var output = "";
          console.log(weather)
          var weatherData = weather.weather;
          for (let x of weatherData) {
            output += `
            <div class="col-md-4 offset-4 mt-4 card">
                <div class="card-body">
               <h3>LOCATION:${searchText}</h3>
               <span class="icon">
               <img src="http://openweathermap.org/img/wn/${x.icon}.png"/></span>
               <p><span class=t>Temperature :</span>
             <span class="temp">${weather.main.temp}&deg;c</span></p>
            <span class="des float-left">${x.description}</span>
            <span class="des float-right">${x.main}</span>
               </div>
            </div>
            `;
            document.getElementById("template").innerHTML = output;
          }
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
}

document.getElementById('Search').addEventListener('click',event=>{
  let city = document.getElementById('City').value 
  console.log(city);
  axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=3d312306696b0930e7fddd369a434ba3`)
  .then(res =>{
    console.log(res.data)
    let lat = res.data.city.coord.lat
    let lon = res.data.city.coord.lon
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&&appid=3d312306696b0930e7fddd369a434ba3`)
    .then(resp=>{
      console.log(resp.data);
      let uvi 
      if (resp.data.current.uvi<2 ){
        uvi = 'green'
      }else if(resp.data.current.uvi <5){
        uvi='yellow'
      }else {
        uvi = 'red'
      }
      
      document.getElementById('maindiv').innerHTML=`
      <div class="card">
      <div class= "card-image">
        <img src="http://openweathermap.org/img/wn/${res.data.list[0].weather[0].icon}@2x.png"
        <div class="card-content">
         <div class="content">
            <div class="title">${res.data.city.name}
              <p>${res.data.list[0].dt_txt}</p>
              <p> Temp: ${res.data.list[0].main.temp}°F</p>
              <p> Humidity: ${res.data.list[0].main.humidity}%</p>
              <p> Windspeed: ${res.data.list[0].wind.speed}mph</p>
              <p class= "${uvi}"> uvi: ${resp.data.current.uvi}</p>
          </div>
        </div>
      </div>
  </div>
</div>
      `
    })
  })
})
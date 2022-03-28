document.getElementById('Search').addEventListener('click',event=>{
  let city = document.getElementById('City').value 
  console.log(city);
  axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3d312306696b0930e7fddd369a434ba3`)
  .then(res =>{
    console.log(res.data)
    let lat = res.data.city.coord.lat
    let lon = res.data.city.coord.lon
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&&appid=3d312306696b0930e7fddd369a434ba3`)
    .then(resp=>{
      console.log(resp.data);
      document.getElementById('maindiv').innerHTML=`
      <div class="card">
        <div class="card-content">
         <div class="content">
            <div class="title">${res.data.city.name}
              Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
            </div>
      </div>
  </div>
</div>
      `
    })
  })
})
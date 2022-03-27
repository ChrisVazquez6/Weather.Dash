document.getElementById('Search').addEventListener('click',event=>{
  let city = document.getElementById('City').value 
  console.log(city);
  axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3d312306696b0930e7fddd369a434ba3`)
  .then(res =>{
    console.log(res.data);
  })
})
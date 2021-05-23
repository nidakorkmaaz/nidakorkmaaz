var url='https://api.openweathermap.org/data/2.5/'
var key='e74aface6c769655579117d96fd9917f'
const setQuery=(e)=>{

  if (e.keyCode=='13') {
    getResult(searcBar.value)
    
  }

}
const getResult=(cityName)=>{
  let query =`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
  console.log(query);

  fetch(query)
  .then(weather=>{
    return weather.json()
  })
  .then(displayResult)

}

const displayResult = (result)=>{
 let city =document.querySelector('.city')
 city.innerHTML= `${result.name},${result.sys.country}`

 let temp=document.querySelector('.temp');
 temp.innerHTML=`${Math.round(result.main.temp)}° C`

 let desc=document.querySelector('.desc')
 desc.innerHTML=result.weather[0].description
 
 let minmax=document.querySelector('.minmax');
 minmax.innerHTML=`${Math.round(result.main.temp_min)}°c / 
 ${Math.round(result.main.temp_max)}° C`
}
  const searcBar=document.getElementById('searchBar');
  searcBar.addEventListener('keypress',setQuery);


const weatherLine = document.createElement('h4')
const temperatureLine = document.createElement('h4')
const cityLine = document.createElement('h4')

const de = document.querySelector('.de')

document.body.append(weatherLine)
document.body.append(temperatureLine)
document.body.append(cityLine)


let city = document.querySelector('#city')

let button = document.querySelector('#changeCity')

let count = 0
let cityName = 'Jecheon'

button.addEventListener('click',func)
function func(event){
    event.preventDefault()
    count++
    
    
    if(count === 0){ cityName = 'Jecheon'}
    else{cityName =  city.value}
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=479b71bd8170440dd418a65c5c00da87`

fetch(url)
    .then(response => response.json())
    .then(data => {
        
        weatherLine.textContent = data.weather[0].main
        temperatureLine.textContent = `${(data.main.temp-273).toFixed(2)}도`
        cityLine.textContent = data.name
       
        
    })
}
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=479b71bd8170440dd418a65c5c00da87`

fetch(`https://api.openweathermap.org/data/2.5/weather?q=Jecheon&appid=479b71bd8170440dd418a65c5c00da87`)
    .then(response => response.json())
    .then(data => {
        
        weatherLine.textContent = data.weather[0].main
        temperatureLine.textContent = `${(data.main.temp-273).toFixed(2)}도`
        cityLine.textContent = data.name
       
        
    })
de.append(weatherLine)
de.append(temperatureLine)
de.append(cityLine)





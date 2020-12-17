import { settings } from "../Settings.js"

let weather = {}

export const copiedWeather = () =>  weather

export const getWeather = (latitude, longitude) => {
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&appid=${settings.weatherKey}&units=imperial`)
    .then(
        response => response.json())
        .then(
            parsedWeather => {
                console.log(parsedWeather)
                weather = parsedWeather
            }
        )    
}


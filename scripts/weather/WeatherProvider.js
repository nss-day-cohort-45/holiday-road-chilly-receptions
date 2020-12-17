import { settings } from "../Settings.js"

let weather = []

export const copiedWeather = () =>  weather.slice()

export const getWeather = () => {
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=45.5&lon=42.3&exclude=minutely,hourly,alerts&appid=${settings.weatherKey}`)
    .then(
        response => response.json())
        .then(
            parsedWeather => {
                console.table(parsedWeather)
                weather = parsedWeather
            }
        )    
}


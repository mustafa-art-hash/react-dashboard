import { useState } from "react"

function App(){

const [city,setCity] = useState("")
const [weather,setWeather] = useState(null)

async function getWeather(){

const apiKey="YOUR_API_KEY"

const res = await fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
)

const data = await res.json()

setWeather(data)

}

return(

<div>

<h1>Weather App</h1>

<input
value={city}
onChange={(e)=>setCity(e.target.value)}
placeholder="Enter city"
/>

<button onClick={getWeather}>Search</button>

{weather && (

<div>

<h2>{weather.name}</h2>

<p>{weather.main.temp} °C</p>

</div>

)}

</div>

)

}

export default App
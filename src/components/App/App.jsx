import React from 'react'
import axios from 'axios'

const App = () => {
  const [weather, setWeather] = useState(null)
  const [cityName, setCityName] = useState('')

  const getWeatherData = (e) => {
    e.preventDefault()
    axios(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e6a7555a1e288aec6dabb1a2c7353502&units=metric`)
      .then(({ data }) => {
        setWeather(data)
        setCityName('')

  })
}
const inputHandler = (e) => {
console.log(e);
setCityName(e.target.value)
}
  return (
    <div className='container' >
      <form onSubmit={getWeatherData}>
        <input type="text" placeholder='Введите город' value={cityName} onChange={inputHandler}/>
        <button type='submit'>Найти</button>
      </form>
      {
        weather &&
        <div>
          <p>Город : {weather.name}</p>
          <p>Температура : {weather.main.temp}</p>
          <p>Рассвет: {weather.sys.sunrise}</p>
          <p>Закат: {weather.sys.sunset}</p>
          <p>Время: {}</p>
        </div>
        
        }
    </div>
  )
}

export default App
import React, { useState } from 'react'

const WeatherCard = ({ weather, temp }) => {

  const [iscelsius, setIsCelsius] = useState(true)

  const handleClick = () => setIsCelsius(!iscelsius)
  return (
    <article className="card">
      <header className='card_header'>
        <h1 className='card_title'> Weather App</h1>
        <h2 className='card_subtitle'>{weather?.name} {weather?.sys.country}</h2>
        <section className='card_icon_container'>
          <h3 className='card_temp'>
            {iscelsius ? `${temp?.celsius} ºC`
              :
              `${temp?.farenheith} ºF`}
          </h3>
          <img
            className='card_icon' src={weather && `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt=""
          />
        </section>
      </header>
      <section className='card_info'>
        <h3 className='card_description'>{weather?.weather[0].description}</h3>
        <ul className='card_list'>
          <li className='card_item'><span className='card span'>Wind speed:</span> {weather?.wind.speed} m/s</li>
          <li className='card_item'><span className='card span'>Clouds:</span> {weather?.clouds.all} %</li>
          <li className='card_item'><span className='card span'>Pressure:</span> {weather?.main.pressure} hPa</li>
        </ul>
      </section>
      <footer className='card_footer'>
        <button onClick={handleClick} className='card_btn'>Change to {iscelsius ? "Farenheith" : "Celsius"}</button>
      </footer>

    </article>
  )
}

export default WeatherCard
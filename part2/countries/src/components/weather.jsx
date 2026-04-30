const Weather = ({ weather }) => {
  if (!weather) return null;

  return (
    <div>
      <h3>Weather in {weather.name}</h3>

      <p>Temperature: {weather.main.temp} Celsius</p>

      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather icon"
      />

      <p>Wind: {weather.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;

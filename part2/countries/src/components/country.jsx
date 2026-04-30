import { useState, useEffect } from "react";
import axios from "axios";
import Weather from "./weather";

export const Country = ({ country }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_WEATHER_KEY;
    const capital = country.capital[0];

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${apiKey}`,
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, [country]);

  return (
    <div>
      <h2>{country.name.common}</h2>

      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>

      <h4>Languages:</h4>
      <div>
        {Object.values(country.languages).map((lang) => (
          <p key={lang}>{lang}</p>
        ))}
      </div>

      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        width="150"
      />

      <Weather weather={weather} />
    </div>
  );
};

export const Country = ({ country }) => {
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
    </div>
  );
};

import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Countries } from "./components/countries";
import { Country } from "./components/Country";

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setSelectedCountry(null);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div>
      <div>
        Find countries:
        <input value={filter} onChange={handleFilterChange} />
      </div>

      {selectedCountry ? (
        <Country country={selectedCountry} />
      ) : (
        <Countries countries={filteredCountries} onShow={setSelectedCountry} />
      )}
    </div>
  );
}

export default App;

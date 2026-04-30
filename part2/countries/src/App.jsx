import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Countries } from "./components/countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
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

      <Countries countries={filteredCountries} />
    </div>
  );
}

export default App;

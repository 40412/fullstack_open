import { Country } from "./Country";

export const Countries = ({ countries, onShow }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  if (countries.length > 1) {
    return (
      <>
        {countries.map((c) => (
          <p key={c.cca3}>
            {c.name.common}
            <button onClick={() => onShow(c)}>Show</button>
          </p>
        ))}
      </>
    );
  }

  if (countries.length === 1) {
    return <Country country={countries[0]} />;
  }

  return <p>No matches</p>;
};

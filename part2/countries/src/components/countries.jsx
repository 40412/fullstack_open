import { Country } from "./Country";

export const Countries = ({ countries }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  if (countries.length > 1) {
    return (
      <>
        {countries.map((c) => (
          <p key={c.cca3}>{c.name.common}</p>
        ))}
      </>
    );
  }

  if (countries.length === 1) {
    return <Country country={countries[0]} />;
  }

  return <p>No matches</p>;
};

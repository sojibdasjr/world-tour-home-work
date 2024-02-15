import { useEffect } from "react";
import { useState } from "react";
import SingleCountry from "../SingleCountry/SingleCountry";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((all_data) => setCountries(all_data));
  }, []);
  return (
    <div>
      <h3>
        Total : <b style={{ color: "red" }}>{countries.length}</b> Countries
      </h3>
      <div>
        {countries.map((country) => (
          <SingleCountry
            key={country.cca3}
            countryProps={country}
          ></SingleCountry>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Countries;

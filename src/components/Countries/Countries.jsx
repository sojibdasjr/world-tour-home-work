import { useEffect } from "react";
import { useState } from "react";
import SingleCountry from "../SingleCountry/SingleCountry";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visited, setVisited] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((all_data) => setCountries(all_data));
  }, []);
  // event handler for Visited Country
  const handleMyVisit = (country) => {
    const newVisitCountry = [...visited, country];
    setVisited(newVisitCountry);
  };
  return (
    <div>
      <h3>
        Total : <b style={{ color: "red" }}>{countries.length}</b> Countries
      </h3>
      {/* My visited country */}
      <h4>My Visited Country : {visited.length} </h4>
      <div className="countries_container">
        {countries.map((country) => (
          <SingleCountry
            key={country.cca3}
            countryProps={country}
            handleMyVisit={handleMyVisit}
          ></SingleCountry>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Countries;

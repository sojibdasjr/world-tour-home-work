import { useEffect } from "react";
import { useState } from "react";

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
      <hr />
    </div>
  );
};

export default Countries;

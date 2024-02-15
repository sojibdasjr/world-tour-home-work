import { useState } from "react";
import "./SingleCountry.css";
const SingleCountry = ({ countryProps, handleMyVisit }) => {
  const { name, capital, flags, population } = countryProps;
  const [isVisit, setIsVisit] = useState(false);
  const handleVisite = () => {
    setIsVisit(!isVisit);
    handleMyVisit(countryProps);
  };
  return (
    <>
      {/* This Component for the Single Country Stacture */}
      <div
        className={
          isVisit
            ? "_singleCountry_container_afterVisit _singleCountry_container_after"
            : "_singleCountry_container"
        }
      >
        <div className="about_countries">
          <small>Country : {name.common} </small> <br />
          <small>Capital : {capital}</small> <br />
          <small>Population : {population}</small>
          <hr />
          <button onClick={handleVisite}>
            {isVisit ? "Visited" : "Visit"}
          </button>{" "}
          <br />
          <small style={isVisit ? { color: "yellow" } : { color: "" }}>
            {" "}
            {isVisit && " I have visited"}
          </small>
        </div>

        <img src={flags.png} alt="" />
      </div>
    </>
  );
};

export default SingleCountry;

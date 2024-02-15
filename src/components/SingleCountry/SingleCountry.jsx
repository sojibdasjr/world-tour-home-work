import "./SingleCountry.css";
const SingleCountry = ({ countryProps }) => {
  const { name, capital, flags, population } = countryProps;
  return (
    <>
      {/* This Component for the Single Country Stacture */}
      <div className="_singleCountry_container">
        <div>
          <h3>Country Name : {name.common} </h3>
          <h4>Capital Name : {capital}</h4>
          <h4>Total Population : {population}</h4>
        </div>

        <img src={flags.png} alt="" />
      </div>
    </>
  );
};

export default SingleCountry;

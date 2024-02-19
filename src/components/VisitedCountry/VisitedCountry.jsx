import "./VisitedCountry.css";
const VisitedCountry = ({ visitedCountry }) => {
  //flag
  const { name, flags } = visitedCountry;
  return (
    <div className="visited_country_container">
      <p> {name.common} </p>
      <img src={flags.png} alt="" />
    </div>
  );
};

export default VisitedCountry;

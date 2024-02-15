const VisitedCountry = ({ visitedCountry }) => {
  console.log(visitedCountry);
  const { name } = visitedCountry;
  return (
    <div>
      <li> {name.common} </li>
    </div>
  );
};

export default VisitedCountry;

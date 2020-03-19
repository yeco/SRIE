import theme from "../../styles/theme";
import CountryItem from "./CountryItem";

const CountrySelector = props => (
  <div className="country-selector">
    {props.countries.map(country => (
      <CountryItem country={country} />
    ))}
    <style jsx>{`
      {/* .country-selector {
        display: flex;
        flex-direction: row;
      } */}
      .country-selector{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        }
    `}</style>
  </div>
);

export default CountrySelector;

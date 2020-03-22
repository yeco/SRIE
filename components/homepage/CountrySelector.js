import theme from "../../styles/theme";
import CountryItem from "./CountryItem";

const CountrySelector = props => (
  <div className="country-selector row">
    {props.countries.map(country => (
      <CountryItem country={country} />
    ))}
    <style jsx>{`
      {/* .country-selector {
        display: flex;
        flex-direction: row;
      } */}
      .country-selector > div{
        padding: 0;
      }
    `}</style>
  </div>
);

export default CountrySelector;

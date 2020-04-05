import fetch from "isomorphic-unfetch";
import InfoSlider from "../components/homepage/InfoSlider";
import CountrySelector from "../components/homepage/CountrySelector";
import { withTranslation } from "../i18n";
import PropTypes from "prop-types";

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

const Home = ({ countries, t }) => (
  <div className="home">
    <InfoSlider />
    <h4>{t("homepage.title")}</h4>
    <CountrySelector countries={countries} />
  </div>
);

Home.getInitialProps = async function() {
  const res = await fetch(`${process.env.API_URL}/api/countries`);
  const countries = await res.json();

  return {
    namespacesRequired: ["homepage"],
    countries: countries
  };
};

Home.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation("homepage")(Home);

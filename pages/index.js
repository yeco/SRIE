import fetch from "isomorphic-unfetch";
import InfoSlider from "../components/homepage/InfoSlider";
import CountrySelector from "../components/homepage/CountrySelector";
<<<<<<< HEAD
import Header from "./../components/layout/Header";
import BannerOds from "./../components/homepage/BannerOds"
import { Container,Col,Row } from "react-bootstrap";
=======
import { withTranslation } from "../i18n";
import PropTypes from "prop-types";
>>>>>>> a5bc678bba29d64d69351fddcbbceb2316dc144f

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

<<<<<<< HEAD
const Home = props => (
  <>
    <div className="home">
      <Header path={props.pa}/>
        <Row className="justify-content-md-center px-sm-0">
          <div className="col-sm-8 px-0">
            <InfoSlider />
            <CountrySelector countries={props.countries} />
          </div>
        </Row>
    </div>
    <div className="row justify-content-md-center slider-box">
      <div className="col-sm-8">
        <BannerOds/>
      </div>
    </div>
    <style jsx>{`
    
    `}</style>
  </>
);

Home.getInitialProps = async function({pathname}) {
  let pa = pathname
  const res = await fetch("http://localhost:3000/api/countries");
  const countries = await res.json();

  return {
    countries: countries,
    pa: pa
=======
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
>>>>>>> a5bc678bba29d64d69351fddcbbceb2316dc144f
  };
};

Home.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation("homepage")(Home);

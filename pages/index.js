import fetch from "isomorphic-unfetch";
import InfoSlider from "../components/homepage/InfoSlider";
import CountrySelector from "../components/homepage/CountrySelector";
import Header from "./../components/layout/Header";
import BannerOds from "./../components/homepage/BannerOds"

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

const Home = props => (
  <>
    <div className="home">
      <Header path={props.pa}/>
        <div className="row justify-content-md-center">
          <div className="col-sm-8">
            <InfoSlider />
            <CountrySelector countries={props.countries} />
          </div>
        </div>
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
  };
};

export default Home;

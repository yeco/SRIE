import fetch from "isomorphic-unfetch";
import InfoSlider from "../components/homepage/InfoSlider";
import CountrySelector from "../components/homepage/CountrySelector";
import Header from "./../components/layout/Header";

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

const Home = props => (
  <div className="home">
    <Header path={props.pa}/>
      <div className="row justify-content-md-center">
      <div className="col-sm-8">
        <InfoSlider />
        <CountrySelector countries={props.countries} />
      </div>
    </div>
    <style jsx>{`
          .home{
            background: #0071BC;
            background-image: url(/img/home/bck.jpg);
            background-repeat: no-repeat;
          }
        `}</style>
  </div>
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

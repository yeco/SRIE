import theme from "../../styles/theme";
import Link from "next/link";

const CountryItem = props => (
  
  <div className="country-item col-6 col-md-3">
    
    <Link href="/country/[countryId]" as={`country/${props.country.countryId}`}>
      <a title={props.country.title}>
        <img src={props.country.img} />
        <span className="cy-link">{props.country.title}</span>
        <style jsx>{`
          a{
            display: block;
            text-align: center;
            color: white;
            text-decoration: none;
            margin: 0 0 20px 0;
          }
          img {
            margin: 0 auto 10px auto;
            display: block;
            border-radius: 50%;
            border: 2px solid;
          }
          span.cy-link{
            background: #1D2D49;
            background-image: url(/img/home/arrow-more-white.svg);
            background-repeat: no-repeat;
            background-position: 90%;
            background-size: 15px;
            padding: 5px 35px;
            border-radius: 15px;
            text-transform: uppercase;
            font-family: 'Raleway', sans-serif;
            font-weight: bold;
            white-space: nowrap;
            
          }
          a:hover span.cy-link{
            background: #0071BC;
            background-image: url(/img/home/arrow-more-rollover.svg);
            cursor: pointer;
            background-repeat: no-repeat;
            background-position: 90%;
            background-size: 15px;
          }
          
        `}</style>
      </a>
    </Link>
  </div>
);

export default CountryItem;

import Link from "next/link";

const CountryLink = props => (
  <Link href="/country/[id]" as={`country/${props.id}`}>
    <a title={props.title}>
      <img src={props.img} />
      <style jsx>{`
        img {
          height: 75px;
          width: 125px;
          padding: 10px;
        }
      `}</style>
    </a>
  </Link>
);

const Home = props => (
  <div className="home">
    {props.countries.map(country => (
      <CountryLink
        key={country.key}
        id={country.key}
        title={country.title}
        img={country.img}
      />
    ))}
  </div>
);

Home.getInitialProps = async function() {
  return {
    countries: [
      {
        key: "cr",
        title: "Costa Rica",
        img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Costa_Rica_%28state%29.svg/125px-Flag_of_Costa_Rica_%28state%29.svg.png"
      },
      {
        key: "es",
        title: "El Salvador",
        img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_El_Salvador.svg/150px-Flag_of_El_Salvador.svg.png"
      }
    ]
  };
};

export default Home;

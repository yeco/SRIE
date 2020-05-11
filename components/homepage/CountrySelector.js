import theme from '../../styles/theme'
import CountryItem from './CountryItem'
import { Row } from 'react-bootstrap'

<<<<<<< HEAD
export default function CountrySelector(props) {
  return (
    <div className='country-selector'>
      <Row className='py-2'>
        {props.countries.map((country) => (
          <CountryItem country={country} />
        ))}
      </Row>
=======
const CountrySelector = props => (
  <div className="country-selector">
    {props.countries.map(country => (
      <CountryItem key={country.code} country={country} />
    ))}
    <style jsx>{`
      .country-selector {
        display: flex;
        flex-direction: row;
      }
    `}</style>
  </div>
);
>>>>>>> a5bc678bba29d64d69351fddcbbceb2316dc144f

      {/* // background-color: #044A95; */}
      <style jsx>{`
        .country-selector {
        }
      `}</style>
    </div>
  )
}

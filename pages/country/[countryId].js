import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../components/layout/Header'
import NavSecundaryCountries from "../../components/layout/NavSecundaryCountries"
import {
  ButtonNav,
  ButtonNavWithIcon,
  ButtonNavIndicadores,
} from '../../components/layout/Button'

export default function Country() {
  const router = useRouter()

  return (
    <div>
      <Header />
      <NavSecundaryCountries/>
      <p>Country content for {router.query.countryId}.</p>
      <ButtonNav amarillo>Dato Pais</ButtonNav>
      <Link href='/'>
        <a>Back to home</a>
      </Link>
    </div>
  )
}

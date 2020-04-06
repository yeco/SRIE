import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../components/layout/Header'
import Button from '../../components/layout/Button'

export default function Country() {
  const router = useRouter()

  return (
    <div>
      <Header />
      <p>Country content for {router.query.countryId}.</p>
      <Link href='/'>
        <a>Back to home</a>
      </Link>
      <Button />
    </div>
  )
}
import { useRouter } from "next/router";
import Link from "next/link";
import Header from "./../../components/layout/Header";

export default function Country() {
  const router = useRouter();

  return (
    <div>
      <Header/>
      <p>Country content for {router.query.id}.</p>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  );
}

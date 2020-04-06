import Header from "./../components/layout/Header";
import Link from "next/link";

function Error({ statusCode }) {
    return (
    <div className="container">
        <Header/>
        <h3>Contenido no encontrado.</h3>
        <p>Volver al 
            <Link href="/">
                <a> inicio</a>
            </Link>
            .
        </p>
        <p className="small">
            {statusCode
            ? `Error: ${statusCode}`
            : 'An error occurred on client'}
        </p> 
    </div>
    )
  }
  
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
  
  export default Error
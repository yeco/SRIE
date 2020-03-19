import theme from "../../styles/theme";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = props => (
  <div className="layout">
    <Head>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,700;0,900;1,300&family=Roboto:ital,wght@0,300;0,400;0,700;0,900;1,300&display=swap" rel="stylesheet"/>
    </Head>
    <Header />
    <div className="content">{props.children}</div>
    <Footer />
    <style jsx>{`
      .layout {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100vh;
      }

      .content {
        flex: auto;
      }
    `}</style>
  </div>
);

export default Layout;

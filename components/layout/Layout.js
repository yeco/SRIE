import theme from "../../styles/theme";
import Header from "./Header";
import Footer from "./Footer";

const Layout = props => (
  <div className="layout">
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

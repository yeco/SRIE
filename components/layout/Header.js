import theme from "../../styles/theme";
import NavBar from "../layout/NavBar";
// import Navigation from "../layout/Navigation";
import Logo from "../layout/Logo";
import { Container, Row, Col } from "react-bootstrap";

const Header = props => (
  <div className="header">
    <Container>
      <Col className="justify-content-md-between">
        <Col sm={3}>
          <Logo path={props.path} />
        </Col>
        <Col sm="auto">
          <NavBar path={props.path}/>
          {/* <Navigation /> */}
        </Col>
      </Col>
    </Container>

    <style jsx>{`
      .header {
        border-bottom: 2px solid rgba(255, 255, 255, 0.3);
        padding-top: 10px;
      }
    `}</style>
  </div>
);

export default Header;

import theme from "../../styles/theme";
import { Container,Row,Col,Image } from "react-bootstrap";
import Link from "next/link";

const Footer = () => (
  <Col className="footer">
    <Container>
      <Row>
        <Col xs={12} sm={6}>
          <p>Con el apoyo de:</p>
          <Col className="imgfooter">
            <a href="#" target="_blank"> 
              <img src="/img/home/logo-UNESCO_UIS.png" alt="UNESCO"/></a>
            <a href="#" target="_blank"> 
              <img src="/img/home/logo-unicef.png" alt="UNICEF"/></a>
            <a href="#" target="_blank"> 
              <img src="/img/home/logo-CEPAL.png" alt="CEPAL"/></a>
          </Col>
        </Col>
        <Col xs={12} sm={2}></Col>
        <Col xs={12} sm={4}>
          <a href="#" target="_blank"> 
            <img src="/img/home/CECC-SICA.png" alt="CECC-SICA"/>
          </a>
          <br/>
          <p className="small">Adipiscing elit, sed diam nonummy nibh euismod Tincidunt ut laoreet Dolore magna aliquam erat volutpat Sed diam nonummy nibh</p>
          <a href="#" target="_blank" className="ico-fb"> 
            Facebook
          </a>
          <a href="#" target="_blank" className="ico-tw"> 
            Twitter
          </a>
        </Col>
      </Row>
    </Container>

    
    <style type="text/css">{`
      .footer {
        background-color: #cccccc;
      }
      .imgfooter{
        display: flex;
        justify-content: space-between;
      }
      
      
    `}</style>
    <style jsx>{`
    .ico-fb,.ico-tw{
        font-size: 0;
        padding: 10px;
        background-repeat: no-repeat;
      }
      .ico-fb{
        background-image: url("/img/home/social-facebook-white.svg") 
      }
      .ico-tw{
        background-image: url("/img/home/social-twitter-white.svg") 
      }
    `}</style>
  </Col>
);

export default Footer;

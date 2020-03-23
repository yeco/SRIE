import theme from "../../styles/theme";

const Footer = () => (
  <div className="footer">
    <div className="container">
      <div className="row">
        <div className="col-6">
          <p>Con el apoyo de:</p>
          <div className="imgfooter">
            <a href="#" target="_blank"> 
              <img src="/img/home/logo-UNESCO_UIS.png" alt="UNESCO"/></a>
            <a href="#" target="_blank"> 
              <img src="/img/home/logo-unicef.png" alt="UNICEF"/></a>
            <a href="#" target="_blank"> 
              <img src="/img/home/logo-CEPAL.png" alt="CEPAL"/></a>
          </div>
        </div>
        <div className="col-2"></div>
        <div className="col-4">
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
        </div>
      </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <style jsx>{`
      .footer {
        /* height: 75px; */
        background-color: ${theme.colors.primary};
      }
      .imgfooter{
        display: flex;
        justify-content: space-between;
      }
      .ico-fb,.ico-tw{
        font-size: 0;
      }
      .ico-fb{
        background-image: url("/img/home/social-facebook-white.svg") 
      }
      .ico-tw{
        background-image: url("/img/home/social-twitter-white.svg") 
      }
    `}</style>
  </div>
);

export default Footer;

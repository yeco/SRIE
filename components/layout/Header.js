import theme from "../../styles/theme";
import NavBar from "../layout/NavBar";
import Logo from "../layout/Logo";

const Header = props => (
  <div className="header">    
    <div className="container">
        <div className="row justify-content-between">
        <div className="col-3">
          <Logo path={props.path}/>
        </div>
        <div className="col-auto">
          <NavBar/>
        </div>
      </div>
    </div>
      
      
    
    <style jsx>{`
      .header {
        border-bottom: 2px solid rgba(255, 255, 255, .3);
        padding-top: 10px;
      }
    `}</style>
  </div>
);

export default Header;

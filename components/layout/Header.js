import theme from "../../styles/theme";
import LanguageSelector from "./LanguageSelector";

const Header = () => (
  <div className="header">
    <LanguageSelector />
    <style jsx>{`
      .header {
        height: 75px;
        background-color: ${theme.colors.primary};
      }
    `}</style>
  </div>
);

export default Header;

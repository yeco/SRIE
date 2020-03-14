import theme from "../../styles/theme";

const Header = () => (
  <div className="header">
    <style jsx>{`
      .header {
        height: 75px;
        background-color: ${theme.colors.primary};
      }
    `}</style>
  </div>
);

export default Header;

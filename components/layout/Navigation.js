import React from "react";

const NavItem = props => {
  const pageURI = window.location.pathname + window.location.search;
  const liClassName = props.path === pageURI ? "nav-item active" : "nav-item";
  const aClassName = props.disabled ? "nav-link disabled" : "nav-link";
  return (
    <li className={liClassName}>
      <a href={props.path} className={aClassName}>
        {props.name}
        {props.path === pageURI ? (
          <span className="sr-only">(current)</span>
        ) : (
          ""
        )}
      </a>
    </li>
  );
};

class NavDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
  }
  showDropdown(e) {
    e.preventDefault();
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    const classDropdownMenu =
      "dropdown-menu" + (this.state.isToggleOn ? " show" : "");
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="/"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={e => {
            this.showDropdown(e);
          }}
        >
          {this.props.name}
        </a>
        <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
          {this.props.children}
        </div>
      </li>
    );
  }
}

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <NavDropdown name="Sobre el SRIE">
              <a className="dropdown-item" href="/">
              ¿Que es el SRIE?
              </a>
              <a className="dropdown-item" href="/">
              Socios implementadores
              </a>
              <a className="dropdown-item" href="/">
              ¿Cómo usar el sistema?
              </a>
              <a className="dropdown-item" href="/">
              Glosario
              </a>
              <a className="dropdown-item" href="/">
              Preguntas frecuentes
              </a>
              <a className="dropdown-item" href="/">
              Equipo responsable
              </a>
            </NavDropdown>
            <NavDropdown name="Indicadores educativos">
              <a className="dropdown-item" href="/">
                Nivel
              </a>
              
            </NavDropdown>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
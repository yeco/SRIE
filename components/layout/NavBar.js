import Link from 'next/link'
import { nav } from './../../pages/api/navbar'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import LinkChild from '../layout/LinkChild'

export default class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      condition: false,
      iconActive: 'fas fa-times',
      icon: 'fas fa-bars',
    }
  }

  updateCount() {
    this.setState((prevState, props) => {
      return { condition: !this.state.condition }
    })
  }

  render() {
    const { path } = this.props

    return (
      <>
        <Navbar expand='md'>
          <Navbar.Toggle
            aria-hidden='true'
            aria-controls='basic-navbar-nav'
            className={
              this.state.condition ? this.state.iconActive : this.state.icon
            }
            onClick={() => this.updateCount()}
          />

          <Navbar.Collapse
            id='basic-navbar-nav'
            className={path == '/' ? 'CName' : ''}
          >
            <Nav className='mr-auto'>
              {nav.map((item, indexDrop) => {
                return (
                  <NavDropdown
                    title={item.label}
                    id='basic-nav-dropdown'
                    key={`nav-drop-${indexDrop}`}
                  >
                    {item.items.map((item2, index) => (
                      <LinkChild
                        id={item2.id}
                        href={item2.href}
                        label={item2.label}
                        key={`linkChild-${index}`}
                      />
                    ))}
                  </NavDropdown>
                )
              })}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <style type='text/css'>{`
           

        `}</style>
      </>
    )
  }
}

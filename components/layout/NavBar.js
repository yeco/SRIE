import Link from 'next/link'
import { nav } from './../../pages/api/navbar'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
export default class NavBar extends React.Component {
  render() {
    const { path } = this.props

    return (
      <>
        {/* {path} */}
        <Navbar expand='lg'>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
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
                      <NavDropdown.Item
                        key={`nav-${index}`}
                        href={item2.href}
                        className={path == item2.href ? 'CName-ative' : ''}
                      >
                        {item2.label}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                )
              })}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <style type='text/css'>{`
            
            .nav-link{
                font-family: 'Raleway', sans-serif;
                text-transform: uppercase;
                font-weight: bold;
                color: #1D2D49 !important;
                
            }
            .CName .nav-link{
                color: white !important;
                
            }
            .dropdown-menu{
                background-color: #1D2D49;
            }
            .dropdown-item{
                color: white;
            }
            .dropdown-item:focus, .dropdown-item:hover {
                color: #16181b;
                text-decoration: none;
                background-color: #0071BC;
                color: white;
            }
            .nav-item > .nav-link {
                border-bottom: 2px solid transparent;
            }
            .show.dropdown.nav-item > a{
                border-bottom: 2px solid #FBB03B;
            }
            a.CName-ative.dropdown-item{
                text-decoration: underline #FBB03B;
            }
            
        `}</style>
      </>
    )
  }
}

import Link from "next/link";
import { nav } from "./../../pages/api/navbar";
import Dropdown from "./../layout/Dropdown";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default class NavBar extends React.Component {
    render() {
        console.log(nav)
        return (
        <>
            <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                {
                    nav.map(item=>(
                        <Dropdown items={item} />
                    ))
                }
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                    Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                    Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                    Separated link
                    </NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </>
        );
    } 
}

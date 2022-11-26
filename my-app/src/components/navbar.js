import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">NameOfProject</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="What would you like to do today?" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Calender</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Meet-ups
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Chats</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Community Space</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.5">
                                Settings
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
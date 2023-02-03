import { Component } from "react";
import { Container, Navbar, Nav, Form, Button } from "react-bootstrap";
import { Bell, Search } from "react-bootstrap-icons";


class NetflixNavbar extends Component {
    render() {
        return (
            <Navbar expand="lg" variant="dark" className="px-5">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img src='./assets/netflix_logo.png' alt="Netflix Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">TV Shows</Nav.Link>
                            <Nav.Link href="#home">Movies</Nav.Link>
                            <Nav.Link href="#link">Recently Added</Nav.Link>
                            <Nav.Link href="#link">My List</Nav.Link>
                        </Nav>
                        <Form inline className="ml-auto">
                            <Button><Search /></Button>
                            <Button className="text-white text-decoration-none mr-2">KIDS</Button>
                            <Button className="btn my-2 my-sm-0 text-white mr-2" type="submit">
                                <Bell />
                            </Button>
                            <div className="text-white mr-2 profile d-flex align-items-center">
                                <img className="mr-2" src="./assets/avatar.png" alt="Avatar Img" />
                                <div className="triangle"></div>
                            </div>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        )
    }
}

export default NetflixNavbar
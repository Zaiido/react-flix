import { Container, Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import { Bell, Search } from "react-bootstrap-icons";
import { Link, useLocation } from "react-router-dom";


const NetflixNavbar = () => {
    const location = useLocation()

    return (
        <Navbar expand="lg" variant="dark" className="px-5">
            <Container fluid>
                <Link to={"/"}>
                    <div className="navbar-brand">
                        <img src='./assets/netflix_logo.png' alt="Netflix Logo" />
                    </div>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={"/"}>
                            <div className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</div>
                        </Link>
                        <Link to={"/tv-shows"}>
                            <div className={location.pathname === "/tv-shows" ? "nav-link active" : "nav-link"}>TV Shows</div>
                        </Link>
                        <Link>
                            <div className="nav-link">Movies</div>
                        </Link>
                        <Link>
                            <div className="nav-link">Recently Added</div>
                        </Link>
                        <Link>
                            <div className="nav-link">My List</div>
                        </Link>
                        <Link to={"/backoffice"}>
                            <div className="nav-link">Backoffice</div>
                        </Link>
                    </Nav>
                    <Form inline className="ml-auto">
                        {<FormControl type="text" placeholder={location.pathname === "/tv-shows" ? "Search in TV Shows…" : "Search..."} className="mr-sm-2" />}
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

export default NetflixNavbar
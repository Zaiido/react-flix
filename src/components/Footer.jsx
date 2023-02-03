import { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

class Footer extends Component {
    render() {
        return (
            <footer className="mt-5 mb-2">
                <Container className="px-5">
                    <Row className="mx-5 icons text-left">
                        <Col>
                            <Facebook className="footer-icon" />
                            <Instagram className="footer-icon" />
                            <Twitter className="footer-icon" />
                            <Youtube className="footer-icon" />
                        </Col>
                    </Row>
                    <Row className="mx-5 my-3">
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-2 ">
                            <Button href="">Audio Description</Button>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-2 ">
                            <Button href="">Help Center</Button>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-2 ">
                            <Button href="">Gift Cards</Button>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-2 ">
                            <Button href="">Media Center</Button>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-2 ">
                            <Button href="">Investor Relations</Button>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-2 ">
                            <Button href="">Jobs</Button>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-2 ">
                            <Button href="">Terms of Use</Button>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-2 ">
                            <Button href="">Privacy</Button>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-2 ">
                            <Button href="">Legal Notices</Button>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-2 ">
                            <Button href="">Cookie Preferences</Button>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-2 ">
                            <Button href="">Impressum</Button>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-2 ">
                            <Button href="">Contact Us</Button>
                        </div>
                    </Row>
                    <Row className="mx-5 my-3">
                        <Col>
                            <Button className="service-btn">Service Code</Button>
                        </Col>
                    </Row>
                    <Row className="mx-5 mt-3 icons">
                        <Col>
                            <span> © 1997-2023 Netflix, Inc.</span>
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
}

export default Footer
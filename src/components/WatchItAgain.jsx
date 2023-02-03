import { Component } from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import BuildingGallery from "./BuildingGallery";
class WatchItAgain extends Component {
    render() {
        return (
            <section id="watch-again">
                <Container fluid>
                    <div className="my-3 align-container">
                        <div className="d-flex align-items-center mb-3 explore">
                            <h3 className="font-weight-bolder mr-2">Watch It Again</h3>
                        </div>
                        <Carousel interval={null} indicators={false}>
                            <Carousel.Item>
                                <Row className="movies-container">
                                    <BuildingGallery query="alien" />
                                </Row>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Row className="movies-container">
                                    <BuildingGallery query="spider%20man" />
                                </Row>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Row className="movies-container">
                                    <BuildingGallery query="transformers" />
                                </Row>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </Container>
            </section>
        )
    }
}

export default WatchItAgain
import { Component } from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import BuildingGallery from "./BuildingGallery";
class NewReleases extends Component {
    render() {
        return (
            <section id="new-releases">
                <Container fluid>
                    <div className="my-3 align-container">
                        <div className="d-flex align-items-center mb-3 explore">
                            <h3 className="font-weight-bolder mr-2">New Releases</h3>
                        </div>
                        <Carousel interval={null} indicators={false}>
                            <Carousel.Item>
                                <Row className="movies-container">
                                    <BuildingGallery query="shrek" />
                                </Row>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Row className="movies-container">
                                    <BuildingGallery query="star wars" />
                                </Row>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Row className="movies-container">
                                    <BuildingGallery query="iron man" />
                                </Row>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </Container>
            </section>
        )
    }
}

export default NewReleases
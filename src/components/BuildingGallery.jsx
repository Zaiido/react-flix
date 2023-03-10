import { Component } from "react";
import { Alert, Button, Card, Col, Spinner } from "react-bootstrap";
import { PlusLg, HandThumbsUp, ChevronDown, VolumeUp, BugFill } from "react-bootstrap-icons";
import routerWrapper from "../helper/routerWrapper";

class BuildingGallery extends Component {
    state = {
        movies: [],
        isLoading: true,
        isError: false
    }

    componentDidMount() {
        this.getMovies()
    }

    getMovies = async () => {
        try {
            let response = await fetch(`${process.env.REACT_APP_BE_URL}/medias?title=${this.props.query}`);

            if (response.ok) {
                let media = await response.json()
                this.setState({ movies: media, isLoading: false })
            } else {
                this.setState({ isError: true, isLoading: false })
            }
        } catch (error) {
            this.setState({ isError: true, isLoading: false })
        }
    }

    render() {
        return (
            <>
                {this.state.isLoading && <Spinner className="spinner" animation="border" variant="danger" />}
                {this.state.isError && <Alert className="error" variant="danger">Oww snap...<BugFill /> </Alert>}
                {this.state.movies.splice(0, 6).map((movie) => {
                    return (

                        <Col className="col-12 col-sm-6 col-md-4 col-lg-2 movie-img" key={movie.imdbID}>
                            <Card className="border-0">
                                <Card.Img variant="top" src={movie.poster} />
                                <Card.Body>
                                    <Card.Title className="movie-title">{movie.title}</Card.Title>
                                    <div className="volume">
                                        <VolumeUp />
                                    </div>
                                    <div className="d-flex">
                                        <div className="d-flex">
                                            <Button className="icon mr-2 icon-special" onClick={() => { this.props.navigate("/movie-details/" + movie.imdbID) }}>
                                                <div className="right-triangle"></div>
                                            </Button>
                                            <div className="icon mr-2"><PlusLg /></div>
                                            <div className="icon mr-2"><HandThumbsUp /></div>
                                        </div>
                                        <div className="ml-auto">
                                            <div className="icon"><ChevronDown /></div>
                                        </div>
                                    </div>
                                    <div className="d-flex my-2 align-items-center">
                                        <span className="match mr-1">98% Match</span>
                                        <div className="age mr-1 px-1">16</div>
                                        <span className="limited mr-1">Limited Series</span>
                                        <i className="bi bi-badge-hd text-white"></i>
                                    </div>
                                    <div className="text-white genre">
                                        Mistery · Action
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                    )
                })}
            </>)
    }
}

export default routerWrapper(BuildingGallery)


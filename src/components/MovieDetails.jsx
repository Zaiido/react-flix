import { useEffect, useState } from "react"
import { Alert, Container, Spinner } from "react-bootstrap"
import { BugFill } from "react-bootstrap-icons"
import { Link, useParams } from "react-router-dom"

const MovieDetails = () => {
    const params = useParams()

    const [movie, setMovie] = useState(null)
    // const [comments, setComments] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)


    useEffect(() => {
        getData();
        // getComments();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getData = async () => {
        try {
            let response = await fetch(`${process.env.REACT_APP_BE_URL}/medias/${params.movieId}`)
            if (response.ok) {
                let movie = await response.json()
                setMovie(movie)
                setIsLoading(false)
            } else {
                setIsError(true)
                setIsLoading(false)
            }
        } catch (error) {
            setIsError(true)
            setIsLoading(false)
        }
    }

    // const getComments = async () => {
    //     try {
    //         let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + params.movieId, {
    //             headers: {
    //                 "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RiYWMxNTUwMWZlODAwMTU2MGMyMTIiLCJpYXQiOjE2NzUzNDA4MjIsImV4cCI6MTY3NjU1MDQyMn0.dNhuX-b-VsYhfD6A0twErLiNz3kOKX37djHyFrKqtP0"
    //             }
    //         })
    //         if (response.ok) {
    //             let comments = await response.json()
    //             setComments(comments)
    //             setIsLoading(false)
    //         } else {
    //             setIsError(true)
    //             setIsLoading(false)
    //         }

    //     } catch {
    //         setIsError(true)
    //         setIsLoading(false)

    //     }
    // }
    return (
        <Container fluid>
            <div className="align-container">
                {isLoading && <Spinner className="spinner" animation="border" variant="danger" />}
                {isError && <Alert className="error" variant="danger">Oww snap...<BugFill /> </Alert>}
                {movie ?
                    <div className="d-flex my-5">
                        <img src={movie.poster} alt="Movie Poster" />
                        <div className="text-white ml-lg-5">
                            <h2 className="mb-4">{movie.title}</h2>
                            <p>Year: {movie.year}</p>
                            <p>Type: {movie.type}</p>
                            <Link className="btn btn-primary" to={`${process.env.REACT_APP_BE_URL}/medias/${params.movieId}/pdf`}>Download PDF</Link>
                        </div>
                        {/* <div className="text-white ml-auto">
                            <h2>Comments:</h2>
                            {comments ?
                                <ListGroup>
                                    {comments.map((comment) => {
                                        return <ListGroup.Item key={comment._id}>Comment: {comment.comment} | Rating: {comment.rate}</ListGroup.Item>
                                    })}
                                </ListGroup> : <h6>No Comments</h6>}
                            {(comments === null || comments.length === 0) && <h6>No comments available</h6>}
                        </div> */}
                    </div>
                    : ""}
            </div>
        </Container>
    )
}

export default MovieDetails
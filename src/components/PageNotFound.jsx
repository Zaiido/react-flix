import { Container } from "react-bootstrap"

const PageNotFound = () => {
    return (
        <Container fluid className="page-not-found">
            <div className="align-container d-flex justify-content-center align-items center not-found-content">
                <div className="overlay"></div>
                <div className="d-flex flex-column justify-content-center align-items-center text-white">
                    <h1>Lost your way?</h1>
                    <h3>Sorry, we can't find that page. You'll find lots to explore in the other pages.</h3>
                    <h4>Error Code NSES-404</h4>
                </div>
            </div>
        </Container>
    )
}

export default PageNotFound
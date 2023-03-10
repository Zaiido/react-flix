import { useEffect, useState } from "react"
import { Button, Container, Form } from "react-bootstrap"

const Backoffice = () => {
    const [media, setMedia] = useState(null)
    const [title, setTitle] = useState("")
    const [year, setYear] = useState("")
    const [type, setType] = useState("")
    const [file, setFile] = useState(null)


    const sendMedia = async () => {
        try {

            let response = await fetch(`${process.env.REACT_APP_BE_URL}/medias`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: title,
                    year: year,
                    type: type,
                    poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg"
                })
            })
            if (response.ok) {
                let media = await response.json()
                setMedia(media)
            } else {
                console.log("error")
            }

        } catch (error) {
            console.log(error)
        }
    }

    const handlePosterUpload = async (id) => {
        try {
            const formData = new FormData()
            formData.append("poster", file)
            let response = await fetch(`${process.env.REACT_APP_BE_URL}/medias/${id}/poster`, {
                method: "POST",
                body: formData
            })
            if (response.ok) {
                console.log("Yey!")
            } else {
                console.log("Try again!")
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (file) {
            handlePosterUpload(media.imdbID)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [media])

    return (
        <>
            <Container fluid>
                <div className="my-3 align-container">
                    <Form className="text-white">
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Year</Form.Label>
                            <Form.Control type="text" placeholder="Enter year" value={year} onChange={(e) => setYear(e.target.value)} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Type</Form.Label>
                            <Form.Control type="text" placeholder="Enter type" value={type} onChange={(e) => setType(e.target.value)} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Poster</Form.Label>
                            <Form.File

                                onChange={(e) => {
                                    const files = e.target.files
                                    if (files && files.length > 0) {
                                        setFile(files[0]);
                                    } else {
                                        setFile(null);
                                    }
                                }}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={(e) => {
                            e.preventDefault()
                            sendMedia()
                        }}>
                            Submit
                        </Button>
                    </Form>
                </div>
            </Container></>
    )
}

export default Backoffice
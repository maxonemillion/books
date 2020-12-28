import React, { useEffect, useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import API from "../../utils/API";
import Return from "../Search/Search"
import "./Saved.css"

const SavedBooks = () => {
    const [books, setBooks] = useState({});

    useEffect(() => {
        API.get()
            .then(res => {
                setBooks(res.data)
                console.log(res.data)
            })
    }, [])

    const handleRemove = (index) => {
        console.log(books.data[index])
        console.log("INDEX", index)
        window.location.reload();
        API.delete(books.data[index]._id)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    return (

        <div>
            <Return />
            <h1 className="myBooks">My Books
                <Container>
                    {books.data?.map((bookData, index) => {
                        return (
                            <Row>
                                <Col>
                                    <Card style={{ width: '18rem', border: "none" }} className="card1">
                                        <img id="image" src={bookData.image} alt="poster" />
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '18rem', border: "none" }} className="card">
                                        <Card.Body className="main-card">
                                            <br></br>
                                            <Card.Title className="title">{bookData.title}</Card.Title>
                                            <Card.Text className="list">
                                                <li>
                                                    {bookData.authors}
                                                    <br></br>
                                                    <br></br>
                                                    <ul className="bookDescription">
                                                        {bookData.description}
                                                    </ul>
                                                    <br></br>
                                                    <a href={bookData.infoLink}>more</a>
                                                    <br></br>
                                                </li>
                                                <br></br>
                                                <Button className="btn"
                                                    id="save-button"
                                                    variant="light"
                                                    type="submit"
                                                    onClick={() => handleRemove(index)}
                                                // onClick={window.location.reload()}
                                                >Remove
            </Button>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        )
                    })}
                    </Container>
                    </h1>
        </div>

    )
}

export default SavedBooks;
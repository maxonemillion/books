import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import Header from "../Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import API from "../../utils/API";
import "./Main.css"


const Main = () => {
    const [books, setBooks] = useState({});
    const [searchTitle, setSearchTitle] = useState("");
    const [display, setDisplay] = useState(false);

    function searchBooks(query) {
        API.search(query)
            .then(res => {
                console.log(res.data)
                setBooks(res.data);
            })
            .catch(err => console.log(err));
    }

    //   function getBooks() {
    //     API.get()
    //       .then(res => {
    //         console.log(res.data)
    //         setBooks(res.data);
    //       })
    //       .catch(err => console.log(err));
    //   }

    //   function saveBook(book) {
    //     API.save(book)
    //       .then(res => {
    //         console.log(res.data)
    //         setBooks(res.data);
    //       })
    //       .catch(err => console.log(err));
    //   }

    //   function deleteBook(id) {
    //     API.delete(id)
    //       .then(res => {
    //         console.log(res.data)
    //         setBooks(res.data);
    //       })
    //       .catch(err => console.log(err));
    //   }

    const handleSubmit = e => {
        e.preventDefault();
        searchBooks(searchTitle)
        setDisplay(!display)
    };

    const handleSave = (index) => {
        console.log(books.items[index])
        console.log("INDEX", index)
        API.save({
            id: books.items[index]?.id,
            title: books.items[index]?.volumeInfo.title,
            authors: books.items[index]?.volumeInfo.authors,
            description: books.items[index]?.volumeInfo.description,
            image: books.items[index]?.volumeInfo.imageLinks.thumbnail,
            link: books.items[index]?.volumeInfo.infoLink
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }

    const handleKeypress = e => {
        if (e.keyCode === 13) {
            handleSubmit(e);
        }
    };


    return (
        <div>
            <Header />
            <Form.Group className="form">
                <Form.Control
                    autoComplete="off"
                    type="text"
                    id="book-input"
                    placeholder="Find a book"
                    onChange={(event) => setSearchTitle(event.target.value)}
                    onKeyDown={handleKeypress}
                    value={searchTitle} />
                <div className="wrapper">
                    <Button className="btn"
                        id="search-button"
                        variant="light"
                        type="submit"
                        onClick={handleSubmit}
                    >Search
            </Button>
                </div>
                <br />
            </Form.Group>

            <Container>
                {books.items?.map((bookData, index) => {
                    return (
                        <Row>
                            <Col>
                                <Card style={{ width: '18rem', border: "none" }} className="card1">
                                    <img className={display ? "display" : null} id="image" src={bookData.volumeInfo.imageLinks.thumbnail} alt="poster" />
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '18rem', border: "none" }} className="card">
                                    <Card.Body className="main-card">
                                        <br></br>
                                        <Card.Title className="title">{bookData.volumeInfo.title}</Card.Title>
                                        <Card.Text className="list">
                                            <li id="bookInfo" className={display ? "display" : null}>
                                                {bookData.volumeInfo.authors}
                                                <br></br>
                                                <br></br>
                                                <ul className="bookDescription">
                                                    {bookData.volumeInfo.description}
                                                </ul>
                                                <br></br>
                                                <a href={bookData.volumeInfo.infoLink}>more</a>
                                                <br></br>
                                            </li>
                                            <br></br>
                                            <Button className="btn"
                                                id="save-button"
                                                variant="light"
                                                type="submit"
                                                onClick={() => handleSave(index)}
                                            >Save
            </Button>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    )
                })}
            </Container>

        </div >
    )
}

export default Main;

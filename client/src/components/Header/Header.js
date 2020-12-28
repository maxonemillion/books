import React, { useEffect, useState } from "react";
import { Navbar, Form, Button } from "react-bootstrap";
import API from "../../utils/API";
import "./Header.css"

const Header = () => {
    const [books, setBooks] = useState({});

    useEffect(() => {
        API.get()
            .then(res => {
                setBooks(res.data)
                console.log(res.data)
        })
    }, [])

    return (
        <div>
                <Navbar className="justify-content-between" id="savedBtn">
                    <Form inline>
                        <Button type="submit" href="/Saved">Saved</Button>
                    </Form>
                </Navbar>
        </div>
    )
}

export default Header;
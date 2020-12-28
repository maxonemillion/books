import React from "react";
import { Navbar, Form, Button } from "react-bootstrap";
import "./Search.css"

const Return = () => {

    return (
        <div>
            <Navbar className="justify-content-between" id="savedBtn">
                <Form inline>
                    <Button type="submit" href="/">Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}

export default Return;
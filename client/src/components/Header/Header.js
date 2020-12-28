import React from "react";
import { Navbar, Form, Button } from "react-bootstrap";
import "./Header.css"

const Header = () => {

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
import React from 'react';
import { Button } from "react-bootstrap";
import API from '../api/connection';
import "./cssComponents/area.css";

class Deco extends React.Component {
    constructor(props) {
        if (API.isAuth() === false) {
            window.location = "/login"
        }
        super(props);
        this.disconnect.bind(this);
    }
    disconnect = event => {
        API.logout();
        window.location = "/login";
    }
    render() {
        return (
            <div className="Dashboard">
                <h1>Area</h1>
                <Button block bsSize="large" onClick={this.disconnect}> deconnexion </Button>
            </div>
        )
    }
}

export default Deco;

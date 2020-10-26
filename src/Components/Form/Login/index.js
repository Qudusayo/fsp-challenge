import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import './style.scss'

import logo from "./../../../assets/logo.png"
import Navbar from "../../Navbar";

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            kinEmail: "",
            errorMessages: [],
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const url = 'https://fsp-challenge.firebaseio.com/userdb.json';
        console.log(url)
        console.log(this.state);
        axios
            .post(url, { ...this.state })
            .then((res) => res.json)
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div className="Form login">
                <Navbar />
                <form onSubmit={this.onSubmit}>
                    <img className="logo" src={logo} alt="logo" />
                    <h2>Login to Dashboard</h2>
                    <div className="flex">
                        <div className="card">
                            <p>
                                Email <span className="red">*</span>
                            </p>
                            <input
                                onChange={this.onChange}
                                value={this.state.email}
                                type="text"
                                autoComplete="off"
                                name="email"
                                placeholder="freedomsynergypro@email.com"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="card">
                            <p>
                                Email <span className="red">*</span>
                            </p>
                            <input
                                onChange={this.onChange}
                                value={this.state.password}
                                type="password"
                                autoComplete="off"
                                name="password"
                                placeholder="********"
                                required
                            />
                        </div>
                    </div>
                    <div className="card confirm">
                            <span id="accept">
                                <Link to="/recover-password">Forgot your Password ?</Link>
                            </span>
                    </div>
                    <button type="submit" id="submit">
                        LOGIN
                    </button>
                </form>
                <footer>
                    <span>&copy; FREEDOM SYNERGY PRO</span>
                </footer>
            </div>
        );
    }
}

export default index;

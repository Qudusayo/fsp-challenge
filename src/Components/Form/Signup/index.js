import React, { Component } from "react";
import logo from './../../../assets/logo.png'
import axios from "axios";
import "./style.scss";

import Navbar from "../../Navbar";

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            package: "",
            userSurname: "",
            userFirstName: "",
            userMiddleName: "",
            dateOfBirth: "",
            userPhoneNumber: "",
            gender: "",
            userEmail: "",
            password: "",
            confirmPassword: "",
            address: "",
            kinSurname: "",
            kinOtherName: "",
            kinEmail: "",
            kinPhoneNumber: "",
            kinAddress: "",
            confirm: false,
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
        const url = "https://fsp-challenge.firebaseio.com/userdb.json";
        console.log(url);
        console.log(this.state);
        axios
            .post(url, { ...this.state })
            .then((res) => res.json)
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div className="Form">
                <Navbar />
                <form onSubmit={this.onSubmit}>
                    <img src={logo} alt="logo"/>
                    <h1>Create an account</h1>
                    <h2>User's Info: </h2>
                    <div className="card">
                        <p>
                            Plan <span className="red">*</span>
                        </p>
                        <select
                            name="package"
                            onChange={this.onChange}
                            value={this.state.package}
                            required
                        >
                            <option value="" hidden>
                                Please select a package
                            </option>
                            <option value="basic">Basic Plan</option>
                            <option value="standard">Standard Plan</option>
                            <option value="multiple">Multiple Plan</option>
                            <option value="premium">Premium Plan</option>
                        </select>
                    </div>
                    <div className="flex">
                        <div className="card card30">
                            <p>
                                Surname <span className="red">*</span>
                            </p>
                            <input
                                onChange={this.onChange}
                                value={this.state.userSurname}
                                required
                                type="text"
                                autoComplete="off"
                                name="userSurname"
                            />
                        </div>
                        <div className="card card30">
                            <p>
                                Firstname <span className="red">*</span>
                            </p>
                            <input
                                onChange={this.onChange}
                                value={this.state.userFirstName}
                                required
                                type="text"
                                autoComplete="off"
                                name="userFirstName"
                            />
                        </div>
                        <div className="card card30">
                            <p>Middlename</p>
                            <input
                                onChange={this.onChange}
                                value={this.state.userMiddleName}
                                type="text"
                                autoComplete="off"
                                name="userMiddleName"
                            />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="card card30">
                            <p>
                                Date Of Birth <span className="red">*</span>
                            </p>
                            <input
                                onChange={this.onChange}
                                value={this.state.dateOfBirth}
                                required
                                type="date"
                                autoComplete="off"
                                name="dateOfBirth"
                            />
                        </div>
                        <div className="card card30">
                            <p>
                                Phone Number <span className="red">*</span>
                            </p>
                            <input
                                onChange={this.onChange}
                                value={this.state.userPhoneNumber}
                                required
                                type="tel"
                                autoComplete="off"
                                name="userPhoneNumber"
                            />
                        </div>
                        <div className="card card30">
                            <p>
                                Gender <span className="red">*</span>
                            </p>
                            <select
                                name="gender"
                                onChange={this.onChange}
                                value={this.state.gender}
                                required
                            >
                                <option value="" hidden>
                                    Gender
                                </option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="card card30">
                            <p>
                                Email Address <span className="red">*</span>
                            </p>
                            <input
                                onChange={this.onChange}
                                value={this.state.userEmail}
                                required
                                type="email"
                                autoComplete="off"
                                name="userEmail"
                            />
                        </div>
                        <div className="card card30">
                            <p>
                                Password <span className="red">*</span>
                            </p>
                            <input
                                onChange={this.onChange}
                                value={this.state.password}
                                required
                                type="password"
                                autoComplete="off"
                                name="password"
                            />
                        </div>
                        <div className="card card30">
                            <p>
                                Confirm Password <span className="red">*</span>
                            </p>
                            <input
                                onChange={this.onChange}
                                value={this.state.confirmPassword}
                                required
                                type="password"
                                autoComplete="off"
                                name="confirmPassword"
                            />
                        </div>
                    </div>
                    <div className="card">
                        <p>
                            Home Address <span className="red">*</span>
                        </p>
                        <textarea
                            required
                            autoComplete="off"
                            name="address"
                            rows="3"
                            onChange={this.onChange}
                            value={this.state.address}
                        ></textarea>
                    </div>
                    <h2>Next of Kin's Info: </h2>
                    <div className="flex">
                        <div className="card card45">
                            <p>
                                Surname <span className="red">*</span>
                            </p>
                            <input
                                onChange={this.onChange}
                                value={this.state.kinSurname}
                                required
                                type="text"
                                autoComplete="off"
                                name="kinSurname"
                            />
                        </div>
                        <div className="card card45">
                            <p>
                                Other Names <span className="red">*</span>
                            </p>
                            <input
                                onChange={this.onChange}
                                value={this.state.kinOtherName}
                                required
                                type="text"
                                autoComplete="off"
                                name="kinOtherName"
                            />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="card card45">
                            <p>
                                Email <span className="red">*</span>
                            </p>
                            <input
                                onChange={this.onChange}
                                value={this.state.kinEmail}
                                required
                                type="email"
                                autoComplete="off"
                                name="kinEmail"
                            />
                        </div>
                        <div className="card card45">
                            <p>
                                Phone Number <span className="red">*</span>
                            </p>
                            <input
                                onChange={this.onChange}
                                value={this.state.kinPhoneNumber}
                                required
                                type="tel"
                                autoComplete="off"
                                name="kinPhoneNumber"
                            />
                        </div>
                    </div>
                    <div className="card">
                        <p>
                            Home Address <span className="red">*</span>
                        </p>
                        <textarea
                            required
                            autoComplete="off"
                            name="kinAddress"
                            rows="3"
                            onChange={this.onChange}
                            value={this.state.kinAddress}
                        ></textarea>
                    </div>
                    <div className="card confirm">
                        <label htmlFor="confirm">
                            <input
                                onChange={this.onChange}
                                required
                                type="checkbox"
                                name="confirm"
                                id="confirm"
                                checked={this.state.confirm}
                            />
                            <span id="accept">
                                I Agree to Submit you data to FREEDOM SYNERGY
                                PRO with these terms and conditions
                            </span>
                        </label>
                    </div>
                    <button type="submit" id="submit">
                        SUBMIT
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

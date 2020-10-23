import React, { Component } from "react";
import "./style.scss";

import Navbar from "./Navbar";

class index extends Component {
    render() {
        return (
            <div className="Form">
                <Navbar />
                <form>
                    <h2>User's Info: </h2>
                    <div className="card">
                        <p>
                            Plan <span class="red">*</span>
                        </p>
                        <select name="package" required>
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
                        <div class="card card30">
                            <p>
                                Surname <span class="red">*</span>
                            </p>
                            <input
                                required
                                type="text"
                                autocomplete="off"
                                name="userSurname"
                            />
                        </div>
                        <div class="card card30">
                            <p>
                                Firstname <span class="red">*</span>
                            </p>
                            <input
                                required
                                type="text"
                                autocomplete="off"
                                name="userFirstName"
                            />
                        </div>
                        <div class="card card30">
                            <p>Middlename</p>
                            <input
                                type="text"
                                autocomplete="off"
                                name="userMiddleName"
                            />
                        </div>
                    </div>
                    <div className="flex">
                        <div class="card card30">
                            <p>
                                Date Of Birth <span class="red">*</span>
                            </p>
                            <input
                                required
                                type="date"
                                autocomplete="off"
                                name="dateOfBirth"
                            />
                        </div>
                        <div class="card card30">
                            <p>
                                Phone Number <span class="red">*</span>
                            </p>
                            <input
                                required
                                type="tel"
                                autocomplete="off"
                                name="userPhoneNumber"
                            />
                        </div>
                        <div class="card card30">
                            <p>
                                Gender <span class="red">*</span>
                            </p>
                            <select name="gender" required>
                                <option value="" hidden>
                                    Gender
                                </option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex">
                        <div class="card card30">
                            <p>
                                Email Address <span class="red">*</span>
                            </p>
                            <input
                                required
                                type="email"
                                autocomplete="off"
                                name="userEmail"
                            />
                        </div>
                        <div class="card card30">
                            <p>
                                Password <span class="red">*</span>
                            </p>
                            <input
                                required
                                type="password"
                                autocomplete="off"
                                name="password"
                            />
                        </div>
                        <div class="card card30">
                            <p>
                                Confirm Password <span class="red">*</span>
                            </p>
                            <input
                                required
                                type="password"
                                autocomplete="off"
                                name="confirmPassword"
                            />
                        </div>
                    </div>
                    <div class="card">
                        <p>
                            Home Address <span class="red">*</span>
                        </p>
                        <textarea
                            required
                            autocomplete="off"
                            name="address"
                            rows="3"
                        ></textarea>
                    </div>
                    <h2>Next of Kin's Info: </h2>
                    <div className="flex">
                        <div class="card card45">
                            <p>
                                Surname <span class="red">*</span>
                            </p>
                            <input
                                required
                                type="text"
                                autocomplete="off"
                                name="kinSurname"
                            />
                        </div>
                        <div class="card card45">
                            <p>
                                Other Names <span class="red">*</span>
                            </p>
                            <input
                                required
                                type="text"
                                autocomplete="off"
                                name="kinOtherName"
                            />
                        </div>
                    </div>
                    <div className="flex">
                        <div class="card card45">
                            <p>
                                Email <span class="red">*</span>
                            </p>
                            <input
                                required
                                type="email"
                                autocomplete="off"
                                name="kinEmail"
                            />
                        </div>
                        <div class="card card45">
                            <p>
                                Phone Number <span class="red">*</span>
                            </p>
                            <input
                                required
                                type="tel"
                                autocomplete="off"
                                name="kinPhoneNumber"
                            />
                        </div>
                    </div>
                    <div class="card">
                        <p>
                            Home Address <span class="red">*</span>
                        </p>
                        <textarea
                            required
                            autocomplete="off"
                            name="kinAddress"
                            rows="3"
                        ></textarea>
                    </div>
                    <div class="card confirm">
                        <label for="confirm">
                            <input
                                required
                                type="checkbox"
                                name="confirm"
                                id="confirm"
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

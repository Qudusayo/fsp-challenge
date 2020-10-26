import React, { useState } from "react";
import { useFirebaseApp } from "reactfire";
import "firebase/auth";
import logo from "./../../../assets/logo.png";
import "./style.scss";

import Navbar from "../../Navbar";

function Index() {
    // User State
    const [user, setUser] = useState({
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
        error: "",
    });
    // Import firebase
    const firebase = useFirebaseApp();

    // onChange function
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
            error: "",
        });
    };

    // Submit function (Create account)
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Sign up code here.
        await firebase
            .auth()
            .createUserWithEmailAndPassword(user.userEmail, user.password)
            .then((result) => {
                // Update the nickname
                result.user.updateProfile({
                    displayName: user.userSurname,
                });

                // URL of my website.
                const myURL = { url: "fsp-challenge.vercel.app/" };

                // Send Email Verification and redirect to my website.
                result.user
                    .sendEmailVerification(myURL)
                    .then(() => {
                        setUser({
                            ...user,
                            verifyEmail: `Welcome ${user.userSurname}. To continue please verify your email.`,
                        });
                    })
                    .catch((error) => {
                        setUser({
                            ...user,
                            error: error.message,
                        });
                    });

                // Sign Out the user.
                firebase.auth().signOut();
            })
            .catch((error) => {
                // Update the error
                setUser({
                    ...user,
                    error: error.message,
                });
            });
    };

    return (
        <div className="Form">
            <Navbar />
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="logo" />
                <h1>Create an account</h1>
                <h2>User's Info: </h2>
                <div className="card">
                    <p>
                        Plan <span className="red">*</span>
                    </p>
                    <select name="package" onChange={handleChange} required>
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
                            onChange={handleChange}
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
                            onChange={handleChange}
                            required
                            type="text"
                            autoComplete="off"
                            name="userFirstName"
                        />
                    </div>
                    <div className="card card30">
                        <p>Middlename</p>
                        <input
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                        <select name="gender" onChange={handleChange} required>
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
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                        onChange={handleChange}
                    ></textarea>
                </div>
                <h2>Next of Kin's Info: </h2>
                <div className="flex">
                    <div className="card card45">
                        <p>
                            Surname <span className="red">*</span>
                        </p>
                        <input
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="card confirm">
                    <label htmlFor="confirm">
                        <input
                            onChange={handleChange}
                            required
                            type="checkbox"
                            name="confirm"
                            id="confirm"
                        />
                        <span id="accept">
                            I Agree to Submit you data to FREEDOM SYNERGY PRO
                            with these terms and conditions
                        </span>
                    </label>
                </div>
                {user.error && <h4>{user.error}</h4>}
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

export default Index;

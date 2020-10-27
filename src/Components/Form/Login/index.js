import React, { useState } from "react";
import { useFirebaseApp } from "reactfire";
import "firebase/auth";
import { Link } from "react-router-dom";
import "./style.scss";

import logo from "./../../../assets/logo.png";
import Navbar from "../../Navbar";

function Index(props) {
    // User State
    const [user, setUser] = useState({
        email: "",
        password: "",
        error: "",
    });
    const firebase = useFirebaseApp();

    // onChange function
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
            error: "",
        });
    };

    // Submit function (Log in user)
    const handleSubmit = (e) => {
        e.preventDefault();
        // Log in code here.
        firebase
            .auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .then((result) => {
                if (!result.user.emailVerified) {
                    setUser({
                        ...user,
                        error: "Please verify your email before to continue",
                    });
                    firebase.auth().signOut();
                } else {
                    props.history.push("/dashboard");
                }
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
        <div className="Form login">
            <Navbar />
            <form onSubmit={handleSubmit}>
                <img className="logo" src={logo} alt="logo" />
                <h2>Login to Dashboard</h2>
                <div className="flex">
                    <div className="card">
                        <p>
                            Email <span className="red">*</span>
                        </p>
                        <input
                            onChange={handleChange}
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
                            Password <span className="red">*</span>
                        </p>
                        <input
                            onChange={handleChange}
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
                        <Link to="/recover-password">
                            Forgot your Password ?
                        </Link>
                    </span>
                </div>
                {user.error && <h4>{user.error}</h4>}
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

export default Index;

import React from "react";
import { useFirebaseApp, useUser } from "reactfire";
import "firebase/auth";
import { NavLink } from "react-router-dom";
import logo from "./../../assets/logo.png";
import "./style.scss";

function Index() {
    // Import firebase
    const firebase = useFirebaseApp();
    const user = useUser();

    // Log out function
    const handleClick = () => {
        firebase.auth().signOut();
    };
    return (
        <div className="Navbar">
            <div>
                <small>
                    <img src={logo} alt="logo" style={{ width: "3em" }} />
                </small>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName="active-link" to="/" exact>
                            Home
                        </NavLink>
                    </li>
                    {user ? (
                        <>
                            <li>
                                <NavLink
                                    activeClassName="active-link"
                                    to="/dashboard"
                                >
                                    Dashboard
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    activeClassName="active-link"
                                    to="/login"
                                    onClick={handleClick}
                                >
                                    LogOut
                                </NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <NavLink
                                    activeClassName="active-link"
                                    to="/login"
                                >
                                    Login
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    activeClassName="active-link"
                                    to="/register"
                                >
                                    Register
                                </NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </div>
    );
}

export default Index;

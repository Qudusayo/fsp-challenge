import React, {useState} from "react";
import { authMethods } from "./../firebase/authMethods";

const AuthProvider = (props) => {
    const [inputs, setInputs] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState([]);
    const [token, setToken] = useState(null);

    const handleSignup = () => {
        // middle man between firebase and signup
        console.log("handleSignup");
        // calling signup from firebase server
        return authMethods.signup(inputs.email, inputs.password,setErrors ,setToken )
        console.log(errors, token)
    };

    return (
        <firebaseAuth.Provider
            value={{
                //replaced test with handleSignup
                handleSignup,
                inputs,
                setInputs,
            }}
        >
            {props.children}
        </firebaseAuth.Provider>
    );
};

export const firebaseAuth = React.createContext();
export default AuthProvider;

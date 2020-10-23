import React from "react";
import logo from "./../../assets/img.jpeg";
import "./style.scss";

function App(props) {
    const register = () => {
        props.history.push('/register')
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <button onClick={register}>Join Us Now</button>
            </header>
        </div>
    );
}

export default App;
import React from "react";
import loader from "./assets/preloader.gif";

function Preloader() {
    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <img src={loader} width="150px" height="150px" alt="preloader" />
        </div>
    );
}

export default Preloader;

import React from "react";
import { Link } from "react-router-dom";

const Splash = () => {

    return (

        <div className="container">
            <h2>Splash Page</h2>
            <div className="row">
                <Link to="/login" >
                <button className="waves-effect lime accent-2 black-text waves-dark btn">Login</button>
                </Link>
                <Link to="/tasks" >
                <button className="waves-effect lime accent-2 black-text waves-dark btn">Tasks</button>
                </Link>
                <Link to="/createAccount" >
                <button className="waves-effect lime accent-2 black-text waves-dark btn">Create Account</button>
                </Link>
            </div>
        </div>
    )

}

export default Splash;
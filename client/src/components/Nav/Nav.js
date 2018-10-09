import React from 'react';
import './Nav.css';
import Navbtn from "./Navbtn";

const Nav = props => {
    // function for sign in

    // function for sign up

    // functions for options

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">menuNOW</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">

                <ul className="navbar-nav">
                    <Navbtn
                        signin={props.signin}
                        name="Sign-In"
                        onClick={props.menuClick}
                    />
                    <Navbtn
                        signup={props.signup}
                        name="Sign-Up"
                        onClick={props.menuClick}
                    />
                    <Navbtn
                        openOptions={props.openOptions}
                        name="Options"
                        onClick={props.menuClick}
                    />
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
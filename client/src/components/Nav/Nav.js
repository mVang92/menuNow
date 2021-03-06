import React from "react";
import "./Nav.css";
import Navbtn from "./Navbtn";

const Nav = props => {
    // function for sign in

    // function for sign up

    // functions for options

    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
            <a className="navbar-brand underline" href="/">MenuNow</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">

                {props.loggedin === true ? (
                    <ul className="navbar-nav">
                        <Navbtn
                            name="Sign-Out"
                            onClick={props.signOut}
                        />
                        <Navbtn
                            name="Options"
                            onClick={props.menuClick}
                        />
                    </ul>

                ) : ( //If not logged in, these buttons will appear
                        <ul className="navbar-nav">
                            <Navbtn
                                name="Sign-In"
                                onClick={props.menuClick}
                            />
                            <Navbtn
                                name="Sign-Up"
                                onClick={props.menuClick}
                            />
                        </ul>
                    )
                }
            </div>
        </nav>
    );
};

export default Nav;
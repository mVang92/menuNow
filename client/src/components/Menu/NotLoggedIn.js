import React from "react";

const NotLoggedIn = () => {
    return (
        <div id="notLoggedIn">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <p>Welcome to </p>
                        <strong id="appName">menuNOW</strong>
                    </div>
                    <div className="carousel-item">
                        <p>We provide restaurant business owners </p>
                        <p>a flexible menu they can</p>
                        <p>easily update and change.</p>
                    </div>
                    <div className="carousel-item">
                        <p>Keep track of your menu</p>
                        <p>and add menu items to your list.</p>
                    </div>
                    <div className="carousel-item">
                        <p>Get started by signing up </p>
                        <p>for a new account.</p>
                    </div>
                    <div className="carousel-item">
                        <p>Already have an account?</p>
                        <p>Simply sign in with your user creditials.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotLoggedIn;
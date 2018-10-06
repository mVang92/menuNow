import React, { Component } from 'react';
import './Nav.css'

export default class Nav extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">menuNOW</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sign-In</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sign-Up</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Options</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
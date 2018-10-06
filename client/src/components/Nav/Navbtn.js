import React from 'react';

const Navbtn = props => {
    return (
        <li className="nav-item">
            <a className="nav-link" href="#">{props.name}</a>
        </li>
    )
}

export default Navbtn;
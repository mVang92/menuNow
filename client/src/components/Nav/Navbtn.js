import React from 'react';

const Navbtn = props => {
    return (
        <li {...props} className="nav-item">
            <a {...props} className="nav-link" href="#">{props.name}</a>
        </li>
    )
}

export default Navbtn;
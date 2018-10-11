import React from 'react';
import './Menu.css';
import Submenu from "./Submenu";

const Menu = props => {
    return (

        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
            </div>
            <Submenu submenu="Breakfast"/>
        </div>
    )
}

export default Menu;
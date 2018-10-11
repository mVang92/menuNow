import React from 'react';
import Item from './Item';

const Submenu = props => {
    return (
        <span>
            <div class="card-header">
                {props.submenu}
            </div>
            <ul class="list-group list-group-flush">
                <Item item="Milanesa Torta" />
            </ul>
        </span>
    );
};

export default Submenu;
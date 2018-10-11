import React from 'react';

const Item = props => {
    return (
        <li class="list-group-item">{props.item}</li>
    );
};

export default Item;
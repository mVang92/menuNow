import React from 'react';
import Row from './../../Row';
import Column from './../../Column';
import { Item } from '../Menu';

const Submenu = props => {
    return (
        <Row>
            {/* Title Column */}
            <Column size="12" className="bg-primary text-center mx-auto">
                <strong className="mx-auto my-4" id="submenuName">
                    {/* this value should change based upon the selected submenu */}
                    {props.submenus}
                </strong>
            </Column>

            {/* Items Column */}
            <Column size="12">
                {/* props.items.map(item => (...)) */}
                {/* <Item
                name=item.name
                .... etc...

            */}
            </Column>
        </Row>
    );
};
export default Submenu;
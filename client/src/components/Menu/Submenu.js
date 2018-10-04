import React from 'react';
import Row from './../../Row';
import Column from './../../Column';
import { Item } from '../Menu';

const Submenu = props => {
    return (
        <Row>
            {/* Title Column */}
            <Column size="12" className="bg-primary addRad text-center mx-auto">
                <strong className="mx-auto my-4">
                    {props.submenus}
                </strong>
            </Column>

            {/* Items Column */}
            <Column>
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
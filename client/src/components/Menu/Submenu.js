import React from "react";
import Row from "./../../Row";
import Column from "./../../Column";
import Item from "./Item";

const Submenu = props => {
    return (
        <Row>
            {/* Title Column */}
            <Column size="12" className="bg-primary text-center mx-auto">
                <div className="mx-auto my-4 text-center" id="submenuName">
                    {/* this value should change based upon the selected submenu */}
                    {props.menu.submenu ? (props.menu.submenu) : (null)}
                </div>
            </Column>

            {/* Items Column */}
            <Column size="12">
                {/* props.menu.items.map(item => (
                    if (item.submenu === selectedSubmenu} {
                        <Item
                            name=item.name,
                            ingredients=item.ingredients,
                            description= item.description,
                            price=item.price,
                            note=item.note
                        />
                    })

            */}
            </Column>
        </Row>
    );
};

export default Submenu;
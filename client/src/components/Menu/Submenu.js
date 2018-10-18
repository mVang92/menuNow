import React from "react";
import Row from "./../../Row";
import Column from "./../../Column";
import Item from "./Item";

const Submenu = props => {
    return (
        <Row>
            {/* Title Column */}
            <Column size="12">
                <div className="mx-auto my-4" id="submenuName">
                    {/* this value should change based upon the selected submenu */}
                    {props.menu.submenu ? (
                        props.menu.submenu.map(menu => (
                            <Row key={menu.toString()}>
                                <Column size="12">
                                    <u><strong><h4 className="text-center">
                                     {menu}
                                    </h4></strong></u>
                                   
                                </Column>
                                    
                                {/* Items Column */}
                                {console.log(menu)}
                                {console.log(props)}
                                <Column size="12">
                                    {props.menu.items ?
                                        (props.menu.items.map((item, i) => (
                                            (item.itemSubmenu === menu) ? (
                                                item.active === props.active ? (
                                                    <Item
                                                        key={i}
                                                        name={item.name}
                                                        ingredients={item.ingredients}
                                                        description={item.description}
                                                        price={item.price}
                                                        note={item.note}
                                                        active={item.active}
                                                    />
                                                ) : null
                                            ) : null))
                                        ) : null
                                    }
                                </Column>
                            </Row>

                        ))) : null}
                </div>
            </Column>


        </Row>
    );
};

export default Submenu;
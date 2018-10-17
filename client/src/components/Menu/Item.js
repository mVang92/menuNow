import React from "react";
import Row from "./../../Row";
import Column from "./../../Column";

const Item = props => {
    return (
        <div id="items">
            <Row>
                {/* If props.settingForAdminView 
            load all props for item
            default to a col-12 for all props other than price and item_name. These should be on the same line by default
            Ideally, col sizing should be customizable in the settings to 3,4,6,12.
            */}

                <Column size="10">
                    {props.name}
                </Column>

                <Column size="2">
                    ${props.price}
                </Column>
            </Row>
            <Row>
                {props.description ? (
                    <Column size="12">
                        Description: {props.description}
                    </Column>
                ) :
                    null
                }
            </Row>
            <Row>
                {props.ingredients ? (
                    <Column size="12">
                        Ingredients: {props.ingredients}
                    </Column>
                ) :
                    null
                }
            </Row>
            <Row>
                {props.note ? (
                    <Column size="12">
                        Notes: {props.note}
                    </Column>
                ) :
                    null
                }
            </Row>
            <Row>
                {props.active ? (
                    <Column size="12">
                        <button type="button" className=" ml-0 mkInactive btn btn-sm btn-block btn-primary">Drop</button>
                    </Column>
                ) : (
                    <Column size="12">
                        <button type="button" className=" ml-0 mkActive btn btn-sm btn-block btn-success">Add</button>
                    </Column>)
                }

                {/* If props.settingForClientView
            load only selected client props
            */}
            </Row>
        </div>
    );
};

export default Item;
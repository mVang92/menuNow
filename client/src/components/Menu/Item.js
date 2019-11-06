import React from "react";
import Row from "./../../Row";
import Column from "./../../Column";

const Item = props => {
    return (
        props.view === "admin" ? (
            <div id="items">
                <Row>
                    {/* If props.settingForAdminView 
            load all props for item
            default to a col-12 for all props other than price and item_name. These should be on the same line by default
            Ideally, col sizing should be customizable in the settings to 3,4,6,12.
            */}


                    <Column size="9">
                        <p className="itemTitle"><strong>{props.name}</strong></p>
                    </Column>

                    <Column size="3">
                        <p className="itemTitle"><strong>${props.price}</strong></p>
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
                            Notes: <i>{props.note}</i>
                        </Column>
                    ) :
                        null
                    }
                </Row>
                <Row>
                    {props.active ? (
                        <Column size="12">
                            <button type="button" data-active="false" data-name={props.name} onClick={props.updateStatus} className="ml-0 btn btn-sm btn-block btn-light">Drop</button>
                        </Column>
                    ) : (
                            <Column size="12">
                                <button type="button" data-active="true" data-name={props.name} onClick={props.updateStatus} className="ml-0 btn btn-sm btn-block btn-light">Add</button>
                            </Column>)
                    }

                </Row>
            </div>
        ) : (
                //  If props.settingForClientView load only selected client props

                <div id="items">
                    <Row>

                        <Column size="10">
                            <strong>{props.name}</strong>
                        </Column>

                        <Column size="2">
                            <strong>${props.price}</strong>
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
                                Notes: <i>{props.note}</i>
                            </Column>
                        ) :
                            null
                        }
                    </Row>
                </div>
            )
    );
};

export default Item;
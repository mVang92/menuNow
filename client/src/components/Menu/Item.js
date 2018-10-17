import React from 'react';
import Row from './../../Row';
import Column from './../../Column';

const Item = props => {
    return (
        <Row>
            {/* If props.settingForAdminView 
            load all props for item
            default to a col-12 for all props other than price and item_name. These should be on the same line by default
            Ideally, col sizing should be customizable in the settings to 3,4,6,12.
            */}

            <Column size="9">
                {props.name}
            </Column>

            <Column size="2">
                ${props.price}
            </Column>

            {props.description ? (
                <Column size="11">
                    <div className="ml-4">
                        {props.description}
                    </div>
                </Column>
            ) :
                null
            }

            {props.ingredients ? (
                <Column size="11">
                    <div className="ml-4">
                        {props.ingredients}
                    </div>
                </Column>
            ) :
                null
            }


            {props.note ? (
                <Column size="11">
                    <div className="ml-4">
                        {props.note}
                    </div>
                </Column>
            ) :
                null
            }

            {props.active ? (
                <Column size="12">

                    <button type="button" className=" ml-0 mkInactive btn btn-sm btn-block btn-primary">Drop</button>
                </Column>
            ) : (
                <Column size="12">
                    <button type="button" className=" ml-0 mkActive btn btn-sm btn-block btn-success">Add</button>
                </Column>                )
            }

            {/* If props.settingForClientView
            load only selected client props
            */}
        </Row>
    );
};

export default Item;
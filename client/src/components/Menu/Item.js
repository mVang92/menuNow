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
            
            <Column size="10">
                {props.name}
            </Column>

            <Column size="2">
                {props.price}
            </Column>

            {/* The rest of the item props should be passed in as an array that can be iterated through.
            props.altVals.map
            <Column size="12">
                {val.name}
            </Column>
        */}

            {/* If props.settingForClientView
            load only selected client props
            */}
        </Row>
    );
};
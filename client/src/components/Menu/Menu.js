import React from "react";
import Row from "./../../Row";
import Column from "./../../Column";
import "./Menu.css";
import Submenu from "./Submenu";

const Menu = props => {
    return (
        // Add some styles to this row through classes potentially
        <Row>

            {/* Only load this if the user is logged in */}
            <Column size="12">

                {/* This Row is The Menu header: Active/Inactive*/}
                <Row>
                    <Column size="12" className="bg-primary addRad text-center mx-auto">
                        <strong className="mx-auto my-4">
                            {props.menu}
                        </strong>
                    </Column>
                </Row>

                {/* This Row will fill with the submenu. */}
                <Row>
                    <Submenu
                    // pass in submenu title and submenu items as props
                    />

                </Row>
            </Column>

            {/* This row will fill instead for any users that aren"t logged in */}
            <Column size="12">

            </Column>

        </Row>

        // <div className="card">
        //     <div className="card-header">
        //         <a className="articleTitle" href={props.url} target="_blank">{props.headline}</a>
        //     </div>
        //     <div className="card-body">
        //         <div className="card-text">
        //             <p>{props.snippet}</p>
        //         </div>
        //         <div className="form-group">
        //             <label>Add a note</label>
        //             {props.textArea}
        //         </div>
        //     </div>
        //     <div className="card-footer text-muted">
        //         <p className="byline">{props.byline}</p>{props.save}
        //     </div>
        // </div>
    )
}

export default Menu;
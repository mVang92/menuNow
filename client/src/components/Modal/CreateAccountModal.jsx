import React from "react";
import ReactModal from "react-modal";

const SignUp = props => {

    return (
        <ReactModal
            isOpen={props.showModal}
            contentLabel="Minimal Modal Example"
            className="Modal__Bootstrap modal-dialog"
            shouldCloseOnOverlayClick={true}
            closeTimeoutMS={150}
        >
            <div className="modal-content border">
                <div className="modal-body">
                    <form className="modalBody" onSubmit={props.handleSignUp}>
                        <div className="modal-header">
                            Sign-Up for a New Account
                        </div>
                        <div className="modal-body text-center">
                            <input type="text" value={props.email} name="email" onChange={props.handleChange} placeholder="Email"></input>
                            <br></br>
                            <br></br>
                            <input type="password" value={props.password} name="password" onChange={props.handleChange} placeholder="Password"></input>
                            <div className="row">
                                <div id="error" className="col-12 text-danger">
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={props.handleCloseModal} data-dismiss="modal">Close</button>
                            <button className="btn btn-secondary" type="submit">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </ReactModal>
    );
};

export default SignUp;

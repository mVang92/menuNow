import React from "react";
import ReactModal from "react-modal";
import "./Modal.css";

const SignIn = props => {

    return (
        <ReactModal
            isOpen={props.showModal}
            contentLabel="Minimal Modal Example"
            className="Modal__Bootstrap modal-dialog"
            shouldCloseOnOverlayClick={true}
            closeTimeoutMS={150}
        >
            <div className="modal-content">
                <div className="modal-body">
                    <form onSubmit={props.handleSignIn}>
                        <div className="modal-header">
                            Sign-In to Your Account
                        </div>
                        <div className="modal-body text-center">
                            <input type="text" value={props.email} name="email" onChange={props.handleChange} placeholder="Email"></input>
                            <br></br>
                            <br></br>
                            <input type="text" value={props.password} name="password" onChange={props.handleChange} placeholder="Password"></input>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={props.handleCloseModal} data-dismiss="modal">Close</button>
                            <button className="btn btn-secondary" disabled={props.isInvalid} type="submit">Sign In</button>
                            {props.error && <p>{props.error.message}</p>}
                        </div>
                    </form>
                </div>
            </div>
        </ReactModal>
    );
};

export default SignIn;

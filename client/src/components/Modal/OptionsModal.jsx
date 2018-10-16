import React from "react";
import ReactModal from "react-modal";
import "./Modal.css";

const SignIn = props => {

    return (
        <ReactModal
            isOpen={props.showModal}
            className="Modal__Bootstrap modal-dialog"
            shouldCloseOnOverlayClick={true}
            closeTimeoutMS={150}
            onRequestClose={() => { props.handleCloseModal() }}
        >
            <div className="modal-content">
                <form onSubmit={props.handleSignIn}>
                    <div className="modal-header">
                        Modify Views
                    </div>
                    <div className="modal-body">
                        {/* props.menuparameters.map */}
                        <div className="row">
                            <div className="col-10 text-right">

                                <div className="optionsList">
                                    {/* return (<li className='child'> */}
                                    Option{/* id=param.name value=param.name */}

                                    {/* </li> */}
                                </div>
                            </div>
                            <div className="col-2">
                                <input type="checkbox"></input>
                            </div>
                        </div>
                        {/* end map */}
                        <div className="row">
                            <div className="col-10 form-group text-right">
                                <div className="form-check">
                                    <label>
                                        Client View
                                    </label>
                                </div>
                            </div>
                            <div className="col-2 form-group">
                                <input type="checkbox" id="gridCheck" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </ReactModal >
    );
};

export default SignIn;
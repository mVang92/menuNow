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
                <div className="modal-body">
                    <form onSubmit={props.handleSignIn}>
                        <div className="modal-header">
                            Modify Views
                        </div>
                        <div className="modal-footer">
                            <div className="form-group">

                                {/* props.menuparameters.map */}
                                <div className="form-check form-check-inline">
                                    <ul className="optionsList">
                                        {/* return (<li className='child'> */}
                                        <label>option</label>{/* id=param.name value=param.name */}
                                        <input type='checkbox'>

                                        </input>
                                        {/* </li> */}
                                    </ul>

                                </div>
                                {/* end map */}

                                <div className="form-check">
                                    <label>
                                        Client View
                                    </label>
                                    <input className="form-check-input" type="checkbox" id="gridCheck">
                                    </input>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </ReactModal>
    );
};

export default SignIn;
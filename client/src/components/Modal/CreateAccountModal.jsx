import React from 'react';
import ReactModal from 'react-modal';

const CreateAccount = props => {

    return (
        <ReactModal
            isOpen={props.showModal}
            contentLabel="Minimal Modal Example"
        >
            <div>
                <div className="modal-header text-center">
                    hello world
                    </div>
                <div className="modal-body">
                    ...
                    </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={props.handleCloseModal} data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>

            </div>

        </ReactModal >

    );
};

export default CreateAccount;
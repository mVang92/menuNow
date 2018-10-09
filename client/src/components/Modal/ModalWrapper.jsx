import React from 'react';
const {PropTypes} = React;

const ModalWrapper = props => {
  const handleBackgroundClick = e => {
    if (e.target === e.currentTarget) props.hideModal();
  };

  const onOk = () => {
    props.onOk();
    props.hideModal();
  };

  const okButton = props.showOk
    ? (
      <button
        onClick={onOk}
        disabled={props.okDisabled}
      >
        {props.okText}
      </button>
    ) : null;

  return (
    <div onClick={handleBackgroundClick}>
      <header>
        <h1>{props.title}</h1>

        <button onClick={props.hideModal}>Close</button>
      </header>

      {props.children}

      {okButton}
    </div>
  );
};

export default ModalWrapper;
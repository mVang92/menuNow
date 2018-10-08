import React from 'react';

import CreateAccountModal from './CreateAccountModal.jsx';
import SignInModal from './SignInModal.jsx';
import SignOutModal from './SignOutModal.jsx';
import OptionsModal from './OptionsModal.jsx';

const ModalConductor = props => {
  switch (props.currentModal) {

    case 'Sign-up':
      return <CreateAccountModal {...props}/>;

    case 'Sign-in':
      return <SignInModal {...props}/>;

    case 'SIGN_OUT':
      return <SignOutModal {...props}/>;

    case 'OPTIONS':
      return <OptionsModal {...props}/>;

    default:
      return null;
  };
};

export default ModalConductor;
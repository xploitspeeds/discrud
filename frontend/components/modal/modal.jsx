import React from 'react';
import AddServerForm from '../servers/add_server_form';
import CreateServerContainer from '../servers/create_server_container';
import EditServerContainer from '../servers/edit_server_container';
import Invitation from '../servers/invitation';
import JoinServerForm from '../servers/join_server_form';
import CreateChannelContainer from '../channels/create_channel_container';

// Modal names
export const ADD_SERVER = "ADD_SERVER";
export const CREATE_SERVER = "CREATE_SERVER";
export const EDIT_SERVER = "EDIT_SERVER";
export const INVITE_TO_SERVER = "INVITE_TO_SERVER";
export const JOIN_SERVER = "JOIN_SERVER";
export const CREATE_CHANNEL = "CREATE_CHANNEL";
export const EDIT_CHANNEL = "EDIT_CHANNEL";

function Modal({ modal, clearModal }) {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case ADD_SERVER:
      component = <AddServerForm />
      break;

    case CREATE_SERVER:
      component = <CreateServerContainer />
      break;

    case EDIT_SERVER:
      component = <EditServerContainer />
      break;

    case INVITE_TO_SERVER:
      component = <Invitation />
      break;

    case JOIN_SERVER:
      component = <JoinServerForm />
      break;

    case CREATE_CHANNEL:
      component = <CreateChannelContainer />
      break;

    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={clearModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

export default Modal;
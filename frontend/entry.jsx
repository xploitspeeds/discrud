import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import * as ChannelAPIUtil from './util/channel_api_util';
import { receiveModal } from './actions/ui_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let preloadedState = {};
  if (window.currentUser) {
    const { currentUser } = window;

    preloadedState =  {
      entities: {
        users: {
          [currentUser.id]: currentUser
        }
      },
      session: {
        currentUserId: currentUser.id
      }
    }

    delete window.currentUser;
  }
    
  const store = configureStore(preloadedState);
  
  ReactDOM.render(<Root store={store} />, root);

  // TESTING ONLY - FIXME
  if (process.env.NODE_ENV !== "production") {
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.ChannelAPIUtil = ChannelAPIUtil;
    window.receiveModal = receiveModal;
  }
});
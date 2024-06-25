import React, {useState, useEffect} from 'react';

import FlashMessage from 'react-native-flash-message';
import Main from './src/navigations/app-stack';

import {Provider} from 'react-redux';
import store from './src/store';
import Loader from './src/components/Loader';
import {Root} from 'native-base';

const App = () => {
  return (
    <Provider store={store}>
      <Root>
        <Main />
        <FlashMessage position="top" />
      </Root>
      <Loader />
    </Provider>
  );
};

export default App;

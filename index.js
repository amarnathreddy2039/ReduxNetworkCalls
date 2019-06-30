/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import Dashboard from './src/components/Dashboard';

import {name as appName} from './app.json';
import store from './src/redux/store';

const storeProvider = () => (
    <Provider store={store}>        
        <App/>
    </Provider>
);

AppRegistry.registerComponent(appName, () => storeProvider);

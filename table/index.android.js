/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import LeftList from './src/LeftList';
import RightList from './src/RightList';
import List from './src/List';

export default class table extends Component {
    render() {
        return <List/>

    }
}

AppRegistry.registerComponent('table', () => table);

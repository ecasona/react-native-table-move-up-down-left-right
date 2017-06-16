/**
 * Created by ecasona on 2017/6/15.
 */
import React from 'react';
import {View} from 'react-native';

import LeftList from './LeftList';
import RightList from './RightList';

export default class List extends React.Component {

    render() {

        return <View style={{flexDirection:'row',}}>
            <LeftList ref="left" goOffset={this.goWithLeft.bind(this)}/>
            <RightList ref="right" goOffset={this.goWithRight.bind(this)}/>
        </View>
    }

    goWithLeft = (offset) => {
        // this.refs.right.scrollToOffset({offset: offset});
    };

    goWithRight = (offset) => {
        this.refs.left.scrollToOffset({offset: offset});
    }
}
/**
 * Created by ecasona on 2017/6/15.
 */
import React from 'react';
import {View, ScrollView, Text, FlatList, StyleSheet, PixelRatio} from 'react-native';

import RightListCell from './RightListCell';

const data = ['title1', "title2", 'title3', "title4", "title5", 'title6', "title7", 'title8', "title9", "title10",
    'title11', "title12", 'title13', "title14", "title15", 'title16', "title17", 'title18', "title19", "title20"];

const data2 = data.map((item) => {
    return {
        title1: 1,
        title2: 2,
        title3: 3,
        title4: 4,
        title5: 5,
        title6: 6,
        title7: 7,
        title8: 8,
        title9: 9,
        title10: 10,
        title11: 11,
        title12: 12,
        title13: 13,
        title14: 14,
        title15: 15,
        title16: 16,
        title17: 17,
        title18: 18,
        title19: 19,
        title20: 20,
        key: Math.random() * 1000000,
    }
});

export default class RightList extends React.Component {

    static propTypes: {
        goOffset:React.PropTypes.func,
    };


    constructor(props) {
        super(props);
        this.state = {index: 0};
    }

    render() {

        return <View>
            <ScrollView
                horizontal={true}
            >
                <View style={{flexDirection:'column'}}>
                    <View style={{flexDirection:'row'}}>
                        {
                            data.map((item) => {
                                return <Text style={styles.title}>{item}</Text>
                            })
                        }
                    </View>


                    <FlatList
                        ref="right_list"
                        data={data2}
                        renderItem={this.renderItem.bind(this)}
                        onScroll={this.onScroll.bind(this)}
                    />
                </View>
            </ScrollView>
        </View>
    }

    renderItem = (item) => {
        console.log("RightList", item);
        return <RightListCell item={item.item}/>
    }


    onScroll = (e) => {
        console.log(e.nativeEvent.contentOffset.y);
        const {goOffset} = this.props;
        if (goOffset) {
            goOffset(e.nativeEvent.contentOffset.y);
        }
    }

    scrollToOffset = (offset) => {
        this.refs.right_list.scrollToOffset(offset);
    }
}

const
    styles = StyleSheet.create({
        title: {
            width: 30 * PixelRatio.get(),
            height: 20 * PixelRatio.get(),
            textAlign: 'center',
        },


    })
    ;
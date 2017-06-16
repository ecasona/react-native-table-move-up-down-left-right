/**
 * Created by ecasona on 2017/6/15.
 */
import React from 'react';
import {View, Text, FlatList, PixelRatio, StyleSheet} from 'react-native';

const data = ['title1', "title2", 'title3', "title4", "title5", 'title1', "title2", 'title3', "title4", "title5", 'title1', "title2", 'title3', "title4", "title5", 'title1', "title2", 'title3', "title4", "title5", 'title1', "title2", 'title3', "title4", "title5", 'title1', "title2", 'title3', "title4", "title5", 'title1', "title2", 'title3', "title4", "title5", 'title1',];

export default class LeftList extends React.Component {

    static propTypes: {
        goOffset:React.PropTypes.func,
    };

    render() {

        return <View>
            <Text style={styles.title}>名称</Text>
            <FlatList
                ref="flat_list"
                showsVerticalScrollIndicator={false}
                data={data}
                horizontal={false}
                renderItem={this.renderItem.bind(this)}
                onScroll={this.onScroll.bind(this)}
                scrollEnabled={false}
            />
        </View>;
    }

    renderItem = (item) => {
        console.log(item);
        return <View style={{justifyContent:'center',alignItems:'center'}}><Text style={styles.title}>{item.item}</Text></View>
    }

    scrollToOffset = (offset) => {
        console.log("scrollToOffset", offset);
        this.refs.flat_list.scrollToOffset(offset);
    }

    onScroll = (e) => {
        const {goOffset} = this.props;
        if (goOffset) {
            goOffset(e.nativeEvent.contentOffset.y);
        }
    }


}

const styles = StyleSheet.create({
    title: {
        width: 30 * PixelRatio.get(),
        height: 20 * PixelRatio.get(),
        textAlign: 'center',
    },


})
/**
 * Created by ecasona on 2017/6/16.
 */
import React from 'react';
import {View, Text, StyleSheet, PixelRatio} from 'react-native';

export default class RightListCell extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {item} = this.props;
        console.log("RightListCell", item);

        return <View style={styles.container }>
            <Text style={styles.title}>{item.title1}</Text>
            <Text style={styles.title}>{item.title2}</Text>
            <Text style={styles.title}>{item.title3}</Text>
            <Text style={styles.title}>{item.title4}</Text>
            <Text style={styles.title}>{item.title5}</Text>
            <Text style={styles.title}>{item.title6}</Text>
            <Text style={styles.title}>{item.title7}</Text>
            <Text style={styles.title}>{item.title8}</Text>
            <Text style={styles.title}>{item.title9}</Text>
            <Text style={styles.title}>{item.title10}</Text>
            <Text style={styles.title}>{item.title11}</Text>
            <Text style={styles.title}>{item.title12}</Text>
            <Text style={styles.title}>{item.title13}</Text>
            <Text style={styles.title}>{item.title14}</Text>
            <Text style={styles.title}>{item.title15}</Text>
            <Text style={styles.title}>{item.title16}</Text>
            <Text style={styles.title}>{item.title17}</Text>
            <Text style={styles.title}>{item.title18}</Text>
            <Text style={styles.title}>{item.title19}</Text>
            <Text style={styles.title}>{item.title20}</Text>
        </View>
    }

}

const styles = StyleSheet.create({
    container: {
        height: 20 * PixelRatio.get(),
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    title: {
        width: 30 * PixelRatio.get(),
        textAlign: 'center',
    },
});
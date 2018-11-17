import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default class Loading extends Component {
    static defaultProps = {
        animating: true,
        color: '#000',
        hidesWhenStopped: true,
        size: 'large',
    }
    render(){
        return(
            <View style={styles.container}>
                <ActivityIndicator animating={this.props.animating} color={this.props.color} hidesWhenStopped={this.props.hidesWhenStopped} size={this.props.size} />
            </View>
        )
    }
}

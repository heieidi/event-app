import React, { Component } from 'react';
import Events from '../components/Events';
import { TouchableOpacity, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class EventScreen extends Component {

    render() {
        return (
            <View>
                <Events {...this.props} />
            </View>
        )
    }
}

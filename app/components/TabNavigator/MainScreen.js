import React, {Component} from 'react';
import {Button} from 'react-native';
export default class MainScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <Button
                title="Go to Setup Tab"
                onPress={() => navigate('Setup')}
            />
        );
    }
}
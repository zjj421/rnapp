import React, {Component} from 'react';
import {Button} from 'react-native';

export default class SetupScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Setup',
    };
    render() {
        const { goBack } = this.props.navigation;
        return (
            <Button
                title="Go back to home tab"
                onPress={() => goBack()}
            />
        );
    }
}
import React, { Component } from 'react';
import { Button } from 'react-native';

export default class EditSetupScreen extends Component {
    /*static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.name,
    });*/
    static navigationOption = {
        title:'EditSetupScreenTitle',
    }
    render() {
        const { goBack } = this.props.navigation;
        return (
            <Button
                title="Go back"
                onPress={() => goBack(null)}
            />
        );
    }
}
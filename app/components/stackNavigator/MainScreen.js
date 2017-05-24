import React, { Component } from 'react';
import { Button } from 'react-native';

export default class MainScreen extends Component {
  static navigationOptions = {
    title: 'MainScreenTitle',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="This is MainScreen'Button'title"
        onPress={() =>
          navigate('Profile', { name: 'ProfileScreenTitle' })
        }
      />
    );
  }
}
import React, { Component } from 'react';
import LoginForm from '../Components/LoginForm';
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import {
    StackNavigator,
  } from 'react-navigation';

export default class LoginScreen extends Component {
    render() {
        // const { navigate } = this.props.navigation;
        return (
            <LoginForm />
        );
    }
}

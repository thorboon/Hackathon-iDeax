import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Loading from './Components/Loading';
import firebaseApp from './Utils/firebaseConfig';

// Screens
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import CalcScreen from './Screens/Calculator/index';
import ProfileScreen from './Screens/ProfileScreen/Profile';
import TipsScreen from './Screens/TipsScreen/index';
import BlogScreen from './Screens/BlogScreen/PostOverview';
import LoginForm from './Components/LoginForm';

const RootStack = DrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Calculator: {
      screen: CalcScreen
    },
    Profile: {
      screen: ProfileScreen
    },
    Blog: {
      screen: BlogScreen
    },
    Tips: {
      screen: TipsScreen
    },
    Login: {
      screen: LoginForm
    },
  },
  {
    initialRouteName: 'Login'
  }
);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.users = this.getRef().child('users');
  }
  getRef() {
    return firebaseApp.database().ref();
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('native-base/Fonts/Ionicons.ttf')
    });
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return <RootStack />
  }
}

// import React, { Component } from "react";
// import { StackNavigator } from "react-navigation";

// // SideNav
// import SideBar from "../SideBar/SideBar.js";

// // Screens
// import HomeScreen from "./HomeScreen.js";
// import BlogScreen from '../BlogScreen/index.js';
// import ProfileScreen from "../ProfileScreen/index.js";
// import TipsScreen from '../TipsScreen/index.js';
// import CalcScreen from "../Calculator/index.js";
// import LoginForm from '../../Components/LoginForm';

// const RootStack = StackNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//     },
//     Login: {
//       screen: LoginForm
//     },
//   },
//   {
//     initialRouteName: 'Login'
//   }
// );

// export default class App extends React.Component {
//   render() {
//     return <RootStack />;
//   }
// }

// const HomeScreenRouter = DrawerNavigator(
//   {
//     Home: { screen: HomeScreen },
//     Tips: { screen: TipsScreen },
//     Blog: { screen: BlogScreen },
//     Calculator: { screen:CalcScreen },
//     ProfileScreen: { screen: ProfileScreen },
//     Login: { LoginScreen }
//   },
//   {
//     contentComponent: props => <SideBar {...props} />
//   }
// );

// export default class Nav extends Component {
//   render() {
//     return <HomeScreenRouter />;
//   }
// }
// export default HomeScreenRouter;

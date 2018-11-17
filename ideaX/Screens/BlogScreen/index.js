import React, { Component } from "react";
import { StackNavigator } from "react-navigation";

// Screens
import PostOverview from './PostOverview';
import CreatePost from './CreatePost';

export default (DrawNav = StackNavigator(
  {
    PostOverview: { screen: PostOverview },
    CreatePost: { screen: CreatePost }
  },
  {
    initialRouteName: "PostOverview"
  }
));



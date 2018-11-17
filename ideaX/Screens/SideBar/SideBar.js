import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import {Button, Text, Container, List, ListItem, Content, Icon } from "native-base";

// Stylesheet
styles = require('../../Assets/styles.js');

const routes = ["Home","Tips","Blog","Calculator","Profile"];

export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Image
            source={{
              uri:
                "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png"
            }}
            style={styles.backImg}
          />
          <Image
            square
            style={styles.frontImg}
            source={
              require("../../Assets/logo.png")
            }
          />
          <List
            dataArray={routes}
            contentContainerStyle={styles.listMargin}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}

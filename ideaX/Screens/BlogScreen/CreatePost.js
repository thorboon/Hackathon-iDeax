import React from "react";
import { StatusBar, TextInput, Alert } from "react-native";
import { Button, Text, Container, Body, Content, Header, Title, Left, Icon, Right, Form, Item, Input, Label } from "native-base";
import firebaseApp from '../../Utils/firebaseConfig.js';

export default class CreatePost extends React.Component {
    constructor() {
        super();
        this.state = {
            blogTitle: "",
            blogBody: ""
        }
    }
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>Create Post</Title>
                </Body>
                <Right />
            </Header>
        )
    });
    addPost() {
        const Post = {
            "title": this.state.blogTitle,
            "body": this.state.blogBody
        }
        firebaseApp.database().ref('BlogPosts').push(Post);
        this.TextTitle.setNativeProps({ text: '' });
        this.TextBody.setNativeProps({ text: '' });
        Alert.alert(
            'Post created'
        )
    }
    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item stackedLabel>
                            <Label>Titel</Label>
                            <Input
                                onChangeText={(text) => this.setState({ blogTitle: text })} value={this.state.blogTitle}
                                ref={component => this.TextTitle = component}
                            />
                        </Item>
                        <Item stackedLabel>
                            <Label>Body</Label>
                            <Input
                                onChangeText={(text) => this.setState({ blogBody: text })} value={this.state.blogBody}
                                ref={component => this.TextBody = component}
                            />
                        </Item>
                        <Button
                            primary
                            full
                            style={{ margin: 10 }}
                            onPress={() => this.addPost()}
                        >
                            <Text>Create</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}
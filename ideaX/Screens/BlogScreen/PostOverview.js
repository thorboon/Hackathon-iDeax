import React from "react";
import { StatusBar } from "react-native";
import { Button, Text, Container, Card, CardItem, Body, Content, Header, Title, Left, Icon, Right } from "native-base";
import firebaseApp from '../../Utils/firebaseConfig.js';

export default class PostOverview extends React.Component {
    constructor() {
        super();
        this.state = {
            Posts: "",
        }
    }
    static navigationOptions = {
        title: 'Welcome',
    };
    componentWillMount() {
        const Posts = firebaseApp.database().ref('BlogPosts');
        Posts.on('value', (snapshot) => {
            this.setState({ Posts: snapshot.val() });
        })
    }
    render() {
        let _posts;
        let id = 0;
        if (this.state.Posts.length != 0) {
            let BlogArray = [];
            for (var key in this.state.Posts) {
                var obj = this.state.Posts[key];
                BlogArray.push(obj);
            }
            _posts = BlogArray.map(post => {
                id += 1;
                return (
                    <Card key={id}>
                        <CardItem>
                            <Body>
                                <Text style={styles.boldText}>{post['title']}</Text>
                                <Text>{post['body']}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                )
            })
            id = 0;
        }
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                        transparent
                        onPress={() => this.props.navigation.navigate("DrawerOpen")}
                        >
                        <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Blog</Title>
                    </Body>
                    <Right />
                </Header>
                <Content style={{flex: 1, margin:12}}>
                    <Button
                    primary
                    full
                    style={{ marginBottom: 5 }}
                        onPress={() => this.props.navigation.navigate("CreatePost")}>
                        <Text><Icon name='create' style={{ color: 'white' }} />Add Post</Text>
                    </Button>
                    {_posts}
                </Content>
            </Container>
        );
    }
}
PostOverview.navigationOptions = ({ navigation }) => {
    return {
        header: (
            <Header>
                <Left>
                    <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
                        <Icon name="menu" />
                    </Button>
                </Left>
                <Body>
                    <Title>Blog Posts</Title>
                </Body>
                <Right />
            </Header>
        )
    };
};
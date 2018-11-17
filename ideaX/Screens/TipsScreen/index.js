import React from "react";
import { StatusBar } from "react-native";
import { Button, Text, Container, Card, CardItem, Body, Content, Header, Title, Left, Icon, Right} from "native-base";
import firebaseApp from '../../Utils/firebaseConfig.js';

// Stylesheet
styles = require('../../Assets/styles.js');

export default class TipsScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            Tips: '',
        }
    }
    componentWillMount() {
        const Tips = firebaseApp.database().ref('Tips');
        Tips.on('value', (snapshot) => {
            this.setState({ Tips: snapshot.val() });
        })
    }
    render() {
        let tips;
        if (this.state.Tips) {
            tips = this.state.Tips.map(tip => {
                return (
                    <Card key={tip['title']}>
                        <CardItem>
                            <Body>
                                <Text style={styles.boldText}>{tip['title']}</Text>
                                <Text>{tip['info']}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                );
            })
        }
        return (
            <Container >
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Tips</Title>
                    </Body>
                    <Right />
                </Header>
                <Content style={{flex: 1, margin:12}}>
                    {tips}
                </Content>
            </Container>
        );
    }
}

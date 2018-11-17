import React from "react";
import { StatusBar } from "react-native";
import { Button, Text, Container, Card, CardItem, Body, Content, Header, Title, Left, Icon, Right } from "native-base";
import firebaseApp from '../../Utils/firebaseConfig.js';

// Stylesheet
styles = require('../../Assets/styles.js');

export default class CalcScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            Data: "",
            waterDif: 0,
            costDif: 0
        }
    }
    componentWillMount() {
        const calc = firebaseApp.database().ref('Calculator');
        calc.on('value', (snapshot) => {
            this.setState({ Data: snapshot.val() });
        })
    }
    render() {
        let maand_1 = <Text></Text>;
        let maand_2 = <Text></Text>;
        let save = 'saved';
        let waterML = 'more';

        if (this.state.Data != 0) {
            this.state.waterDif = this.state.Data['maand 1']['water'] - this.state.Data['maand 2']['water'];
            this.state.costDif = this.state.Data['maand 1']['Cost'] - this.state.Data['maand 2']['Cost'];
            if(this.state.costDif > 0){
                save = 'saved';
                waterML = 'less';
            }
            else{
                save = 'payed more'
                waterML = 'more'
            }
            maand_1 = <Text>Two months ago you used {this.state.Data['maand 1']['water']} liter water and you payed € {this.state.Data['maand 1']['Cost']}</Text>
            maand_2 = <Text>Last month you used {this.state.Data['maand 2']['water']} liter water and you payed € {this.state.Data['maand 2']['Cost']}</Text>
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
                        <Title>Calculator</Title>
                    </Body>
                    <Right />
                </Header>
                <Content style={{ flex: 1, margin: 12 }}>
                    <Card>
                        <CardItem>
                            <Body>
                                {maand_1}
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body>
                                {maand_2}
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text>you used {Math.abs(this.state.waterDif)} liter {waterML} water so you {save}:</Text>
                                <Text style={styles.boldCenteredText}>€ {Math.abs(this.state.costDif)}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

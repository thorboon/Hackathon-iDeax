import React, { Component } from 'react';
import firebase from 'firebase';
import TitledInput from './TitledInput';
import Loading from './Loading';
import { StackNavigator } from 'react-navigation';
import { Container, Header, Content, Form, Text, Button, Body, Title } from 'native-base';

const styles = {
    errorTextStyle: {
        color: '#E64A19',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10
    }
};

export default class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };
    onLoginPress() {
        this.setState({ error: '', loading: true });
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('Succes');
                this.setState({ error: '', loading: false });
                this.props.navigation.navigate('Home')
            })
            .catch(() => {
                //Login was not successful
                this.setState({ error: 'Authentication failed.', loading: false });
            });
    }
    renderButtonOrSpinner() {
        if (this.state.loading) {
            return <Loading />;
        }
        return <Button onPress={this.onLoginPress.bind(this)} block success>
            <Text>Log in</Text>
        </Button>;
    }
    render() {
        return (
            <Container>
                <Header>
                <Body>
                    <Title>Login</Title>
                </Body>
                </Header>
                <Content>
                    <Form>
                        <TitledInput
                            label='Email Address'
                            placeholder='Email address'
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                        />
                        <TitledInput
                            label='Password'
                            autoCorrect={false}
                            placeholder='Password'
                            secureTextEntry
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                        />
                        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                        {this.renderButtonOrSpinner()}
                    </Form>
                </Content>
            </Container>
        );
    }
}

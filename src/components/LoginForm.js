import React from 'react';
import {View, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common/';
import { connect} from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from './actions/index';

class LoginForm extends React.Component{
    onEmailChange(text) {
        this.props.emailChanged(text);
        console.log(this.props.email);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
        console.log(this.props.password);
    }
    onButtonPress(){
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }
    render() {
        return(
            <View style = {styles.container}>
            <Card >
                <CardSection>
                    <Input 
                    label = "Email"
                    placeholder = "email@gmail.com"
                    onChangeText = {this.onEmailChange.bind(this)}
                    value = {this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                    secureTextEntry
                    label = "Password"
                    placeholder = "password"
                    onChangeText = {this.onPasswordChange.bind(this)}
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>
            </Card>
            </View>
            
        )
    }

}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        width:300,
        marginLeft:30
    },
}

const mapStateToProps = state => {
    return{
       .auth.email,
        password: st email: stateate.auth.password
    };
};


export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
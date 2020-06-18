import React from 'react';
import {View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common/';
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

    renderButton(){
        if(this.props.loading){
            return(
                <Spinner size="large"/>
            )
        }
        else{
            return(
                <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                </Button>
            )
        }
    }

    renderError(){
        if(this.props.error){
            return(
                <View style={{backgroundColor:'white'}}>
                    <Text style = {styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
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
                    value = {this.props.password}
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>
                {this.renderButton()}
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
    errorTextStyle: {
        fontSize: 15,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = state => {
    return{
        email: state.auth.email,
        password: state.auth.password,
        user: state.auth.user,
        error: state.auth.error,
        loading: state.auth.loading
    };
};


export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
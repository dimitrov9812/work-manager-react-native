import React from 'react';
import { Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import { loginUser } from './components/actions';

const RouterComponent = () => {
    return(
        <Router>
            <Scene key="root">
                <Scene key="login" component={LoginForm} title = "Please Login" />
            </Scene>
        </Router>
    )
}
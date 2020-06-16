import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './components/reducers/index';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'
import LoginForm from './components/LoginForm';

class App extends React.Component {
    componentWillMount() {
        const firebaseConfig = {
            apiKey: "AIzaSyDxr82y3Kw_fSI1z8Zf9KckSXNnymODNxs",
            authDomain: "employee-managaer-react-native.firebaseapp.com",
            databaseURL: "https://employee-managaer-react-native.firebaseio.com",
            projectId: "employee-managaer-react-native",
            storageBucket: "employee-managaer-react-native.appspot.com",
            messagingSenderId: "718614470407",
            appId: "1:718614470407:web:ba2bfabe97830e31ebafa2",
            measurementId: "G-GMR4HGWQXL"
          };
          // Initialize Firebase
          
          // we use the if to check if we have another instance of firebase running
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk)) 
        return (
            <Provider store={store}>
                <LoginForm/>
            </Provider>
        );
    }
}

export default App;


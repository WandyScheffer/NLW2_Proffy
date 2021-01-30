import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
// import { createStackNavigator } from '@react-navigation/stack';

// import SignIn from '../pages/SignIn';

// const Authstack = createStackNavigator();

const PublicRoute: React.FC = ({...rest}) => {
    return (
        <>
        {/* <Switch> */}
            <Route path="/login" exact component={Login} />
            <Redirect to="/login"/>
        {/* </Switch> */}
        </> 
    );
}

export default PublicRoute;
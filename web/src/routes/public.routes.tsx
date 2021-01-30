import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Login from '../pages/Login';
// import { createStackNavigator } from '@react-navigation/stack';

// import SignIn from '../pages/SignIn';

// const Authstack = createStackNavigator();

const PublicRoute: React.FC = ({...rest}) => {
    return (
        <>
            <Route path="/login" exact component={Login} />
            <Redirect to="/login"/>
        </>
    );
}

export default PublicRoute;
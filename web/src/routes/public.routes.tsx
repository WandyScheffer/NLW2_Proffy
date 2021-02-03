import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useAuth } from '../contexts/auth-context';
import Login from '../pages/Login';
// import { createStackNavigator } from '@react-navigation/stack';

// import SignIn from '../pages/SignIn';

// const Authstack = createStackNavigator();

const PublicRoute: React.FC<Route> = ({...rest}) => {

    const { auth } = useAuth();

    return !(auth) ? (
        <>
        {/* <Switch> */}
            <Route path="/login" exact component={Login} />
            <Redirect to="/login"/>
            {/* <Route path="/" exact render={ () => {return ( <h1>hello!</h1> )} } /> */}

        {/* </Switch> */}
        </> 
    ) :  <Redirect to="/"/>
}

export default PublicRoute;
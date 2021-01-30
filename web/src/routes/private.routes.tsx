import React, { Component } from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { useAuth } from '../contexts/auth-context';
import Landing from '../pages/Landing';
import TeacherForm from '../pages/TeacherForm';
import TeacherList from '../pages/TeacherList';

// import { createStackNavigator } from '@react-navigation/stack';

// import SignIn from '../pages/SignIn';

// const Authstack = createStackNavigator();

// interface PrivateRouteProps{
//     path:string;
//     render: RouteComponentProps;
// }

const PrivateRoute: React.FC = () => {
    const { auth } = useAuth();


    return {auth} ? (
        // <Route 
        //     {...rest}
        //     render={() => auth
        //         ? <Component {...rest} />
        //         : <Redirect to="/login" />
        //     }
        // />
        <>
        {/* <Switch> */}
            <Route path="/" exact component={Landing} />
            {/* <Route path="/" exact render={() => { return <h1>Hello world!</h1> }} /> */}
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
        {/* </Switch> */}
        </>
    ) :  <Redirect to="/login"/>
}

export default PrivateRoute;
import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../contexts/auth-context';
import Landing from '../pages/Landing';
import TeacherForm from '../pages/TeacherForm';
import TeacherList from '../pages/TeacherList';

// import { createStackNavigator } from '@react-navigation/stack';

// import SignIn from '../pages/SignIn';

// const Authstack = createStackNavigator();

const PrivateRoute: React.FC = () => {
    // const { auth } = useAuth();

    return (
        // <Route 
        //     {...rest}
        //     render={() => auth
        //         ? <Component {...rest} />
        //         : <Redirect to="/login" />
        //     }
        // />
        <>
            <Route path="/" exact component={Landing} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
        </>
    );
}

export default PrivateRoute;
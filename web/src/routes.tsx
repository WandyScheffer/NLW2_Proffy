import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import Login from './pages/Login';

import { useAuth } from './contexts/auth-context';

import PrivateRoute from './routes/private.routes';
import PublicRoute from './routes/public.routes';


function Routes() {
    // const { auth } = useAuth();


    // console.log(auth);
    
    return(
        <BrowserRouter>
            <PrivateRoute path="/" exact component={Landing} />
            <PrivateRoute path="/study" component={TeacherList} />
            <PrivateRoute path="/give-classes" component={TeacherForm} /> 
            <Route path="/login" component={Login} /> 

        </BrowserRouter>
    );
}

export default Routes;
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import Login from './pages/Login';

import { AuthProvider, useAuth } from './contexts/auth-context';
import PrivateRoute from './routes/private.routes';
import PublicRoute from './routes/public.routes';


function Routes() {
    const { auth } = useAuth();
    console.log(auth);
    
    return(
        <BrowserRouter>
            <AuthProvider>
                {/* <Route path="/login" component={Login} />
                <PrivateRoute path="/"  component={Landing} />
                <PrivateRoute path="/study" component={TeacherList} />
                <PrivateRoute path="/give-classes" component={TeacherForm} /> */}
                
                {auth ? <PrivateRoute /> : <PublicRoute />}


                {/* <Route path="/login" exact component={Login} />

                <Route path="/" exact component={Landing} />
                <Route path="/study" component={TeacherList} />
                <Route path="/give-classes" component={TeacherForm} /> */}

            </AuthProvider>
        </BrowserRouter>
    );
}

export default Routes;
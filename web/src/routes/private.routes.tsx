import React, { FunctionComponent, ReactNode } from 'react';
import { Redirect, Route, RouteComponentProps, Switch, RouteProps} from 'react-router-dom';
import { JsxElement } from 'typescript';
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

interface PrivateRouteData extends RouteProps{
    // path: string;
    // component: FunctionComponent;
    component: any;
}

const PrivateRoute: React.FC<PrivateRouteData> = (props) => {
    const { auth } = useAuth();
    const { component: Component, ...rest } = props;

    return (
        <Route 
            {...rest}
            render={(routeProps) => {
                console.log("teste");
                
                console.log(auth);
                
                return auth ? (
                    <Component {...routeProps} />   
                ) : (
                    <Redirect 
                        to={{
                            pathname:"/login",
                            state: {from: routeProps.location}
                        }}
                    />
                )}
            }
        />
    );

    // return (
    //     <>
    //         <Route path={path} exact component={component} />
    //         {/* <Route path={path} exact render={ Landing } /> */}
    //     </>
    // );

    // return auth ? (
        // <Route 
        //     {...rest}
        //     render={() => auth
        //         ? <Component {...rest} />
        //         : <Redirect to="/login" />
        //     }
        // />
        // <>
        {/* <Switch> */}
            {/* <Route path={path} exact component={component} /> */}
            {/* <Route path={path} exact component={component} /> */}
            {/* <Route path={path} exact render={ () => component} /> */}
            {/* <Route path="/study" component={TeacherList} /> */}
            {/* <Route path="/give-classes" component={TeacherForm} /> */}
        {/* </Switch> */}
        // </>
    // ) :  <Redirect to="/login"/>
}

export default PrivateRoute;
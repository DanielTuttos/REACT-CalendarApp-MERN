import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import { startChecking } from '../actions/authAction';

import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    const dispatch = useDispatch();
    const { checking, uid } = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch]);


    if (checking) {
        return (<h5>Espere...</h5>)
    }

    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoute
                        exact
                        path="/login"
                        component={LoginScreen}
                        isLoggedIn={!!uid} //negacion del string vacio la doble negacion interesante
                    />
                    <PrivateRoute
                        exact
                        path="/"
                        component={CalendarScreen}
                        isLoggedIn={!!uid}
                    />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}

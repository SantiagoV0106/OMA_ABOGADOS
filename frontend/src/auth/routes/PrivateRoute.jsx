// Eslint
/* eslint-disable react/prop-types */

// React
import { Navigate } from "react-router-dom";

// CustomHooks
import { useAuth } from "../hooks/useAuth";


export function PrivateRoute({ children }) {
    const { isLogged } = useAuth()
    return isLogged ? children : <Navigate to='/oma/login' />
}
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export const useAuth = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('The component is not in the provider')
    }

    const {
        handleLogin,
        handleLogOut,
        handleInputChange,
        handleShowPassword,
        showPassword,
        formState,
        isLogged,
        loginError,
        userNotFound,
        navigate
    } = context

    return {
        handleLogin,
        handleLogOut,
        handleInputChange,
        handleShowPassword,
        showPassword,
        formState,
        isLogged,
        loginError,
        userNotFound,
        navigate
    }

}
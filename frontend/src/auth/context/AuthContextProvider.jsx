// Eslint
/* eslint-disable react/prop-types */

// Context
import { AuthContext } from "./authContext";

// React
import { useState } from "react";
import { useNavigate } from "react-router";


const initialLogState = JSON.parse(window.localStorage.getItem('isLogged')) ?? false;


const initialFormState = {
    user: '',
    pass: ''
}

export function AuthContextProvider({ children }) {

    const [showPassword, setShowPassword] = useState(false)
    const [formState, setFormState] = useState(initialFormState)
    const [isLogged, setIsLogged] = useState(initialLogState)

    const navigate = useNavigate()

    const handleInputChange = ({ target }) => {
        const { name, value } = target

        setFormState({
            ...formState,
            [name]: value
        })
    }

    // Tester2 tester123

    // Fetch y llamado al servidor
    const handleLogin = async (e) => {

        e.preventDefault()
        resetInputs()

        try {
            
            const response = await fetch('http://localhost/oma/login.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formState)
            });

            if (response.ok) {
                const data = await response.json();
                // Manejar la respuesta del servidor
                console.log('Respuesta del servidor:', data);

                if (data[0].result === 'Login exitoso') {
                    setIsLogged(!initialLogState)
                    localStorage.setItem('isLogged', JSON.stringify(true))
                    navigate('/admin/dashboard')
                }

            } else {
                console.error('Error al iniciar sesión:', response.status);
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    }

    const handleLogOut = () => {
        setIsLogged(!initialLogState)
        localStorage.setItem('isLogged', JSON.stringify(false))
    }

    const resetInputs = () => {
        setFormState(initialFormState)
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <AuthContext.Provider value={{
            handleLogin,
            handleLogOut,
            handleInputChange,
            handleShowPassword,
            showPassword,
            formState,
            isLogged,
        }}>
            {children}
        </AuthContext.Provider>
    )

}

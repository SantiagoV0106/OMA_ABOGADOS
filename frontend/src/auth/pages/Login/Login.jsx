// React
import { useState } from "react";

// Components
import { Button, Input } from "../../../ui";

// Icons
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";

// Images
import loginImg from '../../../assets/images/page/login.jpg'

// Style
import './login.css'

const initialFormState = {
    user: '',
    pass: ''
}

export function LoginPage() {

    const [showPassword, setShowPassword] = useState(false)
    const [formState, setFormState] = useState(initialFormState)

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
        console.log(formState);

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
            } else {
                console.error('Error al iniciar sesión:', response.status);
            }
        } catch (error) {
            console.error('Error de red:', error);
        }


    }

    const resetInputs = () => {
        setFormState(initialFormState)
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const bgImg = {
        backgroundImage : `url(${loginImg})`
    }


    return (
        <div className="login">
            <div className="bg-img" style={bgImg}/>
            <section className="form">
                <h1>Iniciar Sesión</h1>
                <form
                    onSubmit={handleLogin}
                    action=""
                    id="login-form">
                    <div className="input-group">
                        <Input
                            type='text'
                            id='user'
                            name='user'
                            inputChange={handleInputChange}
                            value={formState.user}
                        />
                        <label
                            htmlFor='user'>
                            Usuario
                        </label>
                    </div>
                    <div className="input-group">
                        <Input
                            type={showPassword ? 'text' : 'password'}
                            id='pass'
                            name='pass'
                            inputChange={handleInputChange}
                            value={formState.pass}
                        />
                        <label
                            htmlFor='pass'>
                            Contraseña
                        </label>
                        {
                            showPassword ?
                                <IoMdEyeOff
                                    className="password-icon"
                                    onClick={handleShowPassword}
                                />
                                :
                                <IoEye
                                    className="password-icon"
                                    onClick={handleShowPassword}
                                />
                        }
                    </div>
                    <Button
                        type='submit'
                        className='primary-btn'
                        name='Iniciar Sesión' />
                </form>
            </section>
        </div>
    )
}
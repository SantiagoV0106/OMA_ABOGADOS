// Components
import { Button, Input } from "../../../ui";

// CustomHooks
import { useAuth } from "../../hooks/useAuth";

// Icons
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { RiErrorWarningFill } from "react-icons/ri";

// Images
import loginImg from '../../../assets/Images/page/login.jpg'

// Style
import './login.css'

export function LoginPage() {

    const {
        handleLogin,
        handleInputChange,
        formState,
        showPassword,
        handleShowPassword,
        loginError,
        userNotFound,
        navigate
    } = useAuth()

    const bgImg = {
        backgroundImage: `url(${loginImg})`
    }

    const labelError = {
        color: '#F3564A'
    }

    const inputError = {
        borderColor: '#F3564A'
    }

    return (
        <div className="login">
            <div className="bg-img" style={bgImg}>
                <img
                    src="/oma-gold.png" alt="oma-logo"
                    onClick={() => navigate('/')} />
            </div>
            <section className="form">
                <h1>Iniciar Sesión</h1>
                {
                    userNotFound ?
                        <div className="msg-error">
                            <RiErrorWarningFill style={{
                                color: '#F7AB31'
                            }} />
                            <p style={{
                                color: '#F7AB31'
                            }}>
                                Usuario no registrado como admin</p>
                        </div> :
                        null
                }

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
                            style={
                                loginError ? inputError : null
                            }
                            type={showPassword ? 'text' : 'password'}
                            id='pass'
                            name='pass'
                            inputChange={handleInputChange}
                            value={formState.pass}
                        />
                        <label
                            style={
                                loginError ?
                                    labelError : null
                            }
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
                        {
                            loginError ?
                                <div
                                    className="msg-error"
                                    style={{
                                        margin: '20px 0 0'
                                    }}
                                >
                                    <RiErrorWarningFill
                                        style={{
                                            color: '#F3564A'
                                        }} />
                                    <p style={{
                                        color: '#F3564A'
                                    }}
                                    > Contraseña Incorrecta</p>
                                </div> :
                                null
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
// Components
import { Button, Input } from "../../../ui";

// CustomHooks
import { useAuth } from "../../hooks/useAuth";

// Icons
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";

// Images
import loginImg from '../../../assets/images/page/login.jpg'

// Style
import './login.css'

export function LoginPage() {

    const {
        handleLogin,
        handleInputChange,
        formState,
        showPassword,
        handleShowPassword
    } = useAuth()

    const bgImg = {
        backgroundImage: `url(${loginImg})`
    }

    return (
        <div className="login">
            <div className="bg-img" style={bgImg} />
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
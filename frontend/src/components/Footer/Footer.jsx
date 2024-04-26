// React
import { useNavigate } from 'react-router';
//Data
import footerImg from '../../assets/images/oma-silver-logo.png'
import { offices } from "../../const/offices";
import { Office } from "../Offices/Office";

//Icons
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

//Styles
import './footer.css'

export function Footer() {

    const navigate = useNavigate()

    const handleNavigateHome = () => {
        navigate('/')
    }

    return (
        <footer className='footer-container'>
            <img 
            onClick={handleNavigateHome}
            src={footerImg} alt="Logo-img" />
            <div className="footer-content-container">
                <ul>
                    <li><IoMailOutline /> luis.orjuela@omaabogados.com.co </li>
                    <li><FiPhone /> (+57 602) 308 7554 </li>
                    <li><FaWhatsapp /> (+57) 310 279 1873</li>
                </ul>
                <div className="footer-offices-container">
                    <Office
                        name={offices[0].name}
                        direction={offices[0].direction}
                        directionUrl={offices[0].directionUrl}
                    />
                    <Office
                        name={offices[1].name}
                        direction={offices[1].direction}
                        directionUrl={offices[1].directionUrl} />
                </div>
                <div className="footer-extra-container">
                    <div className="social-media-container">
                        <h3>Redes sociales</h3>
                        <FaWhatsapp className="web-icon" />
                        <FaLinkedin className="web-icon" />
                        <FaInstagram className="web-icon" />
                        <p></p>
                    </div>
                    <div className="admin-container">
                        <p>¿Eres administrador?</p>
                        <a href="#">Inicia sesión aquí</a>
                    </div>
                </div>
            </div>
            <p className='end-footer'>© 2024 OMA Abogados. Todos los derechos reservados</p>
        </footer>
    )
}
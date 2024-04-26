// React
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

// Componentes
import { FaWhatsapp } from "react-icons/fa6";
import { IoMenuOutline } from "react-icons/io5"
import { IoCloseOutline } from "react-icons/io5"
import { FaLinkedin } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';


// Data
import headerLogo from '../../assets/images/oma-gold-logo.png'
import { headerLinks } from '../../const/headerLinks';


// Styles
import './header.css'

export function Header() {

    const [active, setActive] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false)

    const navigate = useNavigate()

    const handleDropdown = () => {
        console.log(showDropdown);
        setShowDropdown(!showDropdown)
    }

    const handleActive = () => {
        setActive(!active)
    }

    const handleNavigateHome = () => {
        navigate('/')
    }

    return (
        <div className={`header-container ${active ? 'active' : ''}`}>
            <img
                className='logo-img'
                src={headerLogo}
                alt="Logo-img"
                onClick={handleNavigateHome} />
            < div className={`header-menu-container ${active ? 'active' : ''}`}>
                <div className={`header-interactions ${active ? 'active' : ''}`}>
                    <ul>
                        {
                            headerLinks.map(({ id, name, link, dropdown }) => {
                                return (
                                    <li
                                        key={id}>
                                        {
                                            dropdown ?
                                                <Link
                                                    to={link}
                                                    onMouseEnter={handleDropdown}
                                                    onMouseLeave={handleDropdown}>
                                                    {name}

                                                    {
                                                        showDropdown && (
                                                            <div className="dropdown">
                                                                {
                                                                    dropdown.map(({ id, link, service }) => (
                                                                        <Link
                                                                            key={id}
                                                                            to={link}>
                                                                            {service}
                                                                        </Link>
                                                                    ))
                                                                }
                                                            </div>
                                                        )
                                                    }

                                                </Link> :
                                                <Link
                                                    to={link}>
                                                    {name}
                                                </Link>
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className={`${active ? 'interaction-btn-container' : ''}`} >
                        <a className='terciary-btn' href="http://wa.me/3178266279"> <FaWhatsapp className='web-icon' /> (+57) 310 279 1873 </a>
                    </div>
                    <Link
                        className='header-social-links'
                        to={"http://wa.me/3178266279"}>
                        <FaLinkedin className="web-icon" />
                    </Link>
                    <Link
                        className='header-social-links'
                        to={"http://wa.me/3178266279"}>
                        <FaInstagram className="web-icon" />
                    </Link>
                </div>
            </div>
            {
                !active ?
                    <IoMenuOutline className='btn-menu' onClick={handleActive} />
                    :
                    <IoCloseOutline className='btn-close-menu' onClick={handleActive} />
            }


        </div>
    )
}
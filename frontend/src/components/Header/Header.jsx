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
import { Dropdown } from '../../ui';


// Data
import { headerLinks } from '../../const/headerLinks';


// Styles
import './header.css'

export function Header() {

    const [active, setActive] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false)

    const navigate = useNavigate()

    const handleActive = () => {
        setActive(!active)
    }

    const handleNavigateHome = () => {
        navigate('/')
    }


    const handleDropdown = (index) => {
        setShowDropdown(index);
    };

    const handleCloseDopdown = () => {
        setShowDropdown(false)
    }

    const handleSocialLinks = (link) => {
        window.open(link, '_blank');
    }

    return (
        <div className={`header-container ${active ? 'active' : ''}`}>
            <img
                className='logo-img'
                src='/oma-gold.webp'
                alt="Logo-img"
                onClick={handleNavigateHome} />
            < div className={`header-menu-container ${active ? 'active' : ''}`}>
                <div className={`header-interactions ${active ? 'active' : ''}`}>
                    <ul>
                        {
                            headerLinks.map(({ id, name, link, dropdown }, i) => {
                                return (
                                    <li
                                        key={id}>
                                        {
                                            dropdown ?
                                                <div
                                                    className='dropdown-option'
                                                    onMouseEnter={() => handleDropdown(i)}
                                                    onMouseLeave={() => setShowDropdown(null)}>
                                                    {name}

                                                    {
                                                        showDropdown === i && (

                                                            <Dropdown
                                                                dropdownItem={dropdown}
                                                                closeDropdown={handleCloseDopdown}
                                                            />
                                                        )
                                                    }

                                                </div> :
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
                        <a className='terciary-btn' href="http://wa.me/573102791873" target='_blank' rel='noopener noreferrer'> <FaWhatsapp className='web-icon' /> (+57) 310 279 1873 </a>
                    </div>
                    <div className='header-social-links'>
                        <FaLinkedin
                            onClick={() => handleSocialLinks('https://www.linkedin.com/in/oma-abogados-s-a-s-a54197309')}
                            className='social-link' />
                        <FaInstagram
                            onClick={() => handleSocialLinks('https://www.instagram.com/omaabogados/')}
                            className='social-link' />
                    </div>
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
// React
import { useState } from 'react'

// Componentes
import { FaWhatsapp } from "react-icons/fa6";
import { IoMenuOutline } from "react-icons/io5"
import { IoCloseOutline } from "react-icons/io5"


// Styles
import './header.css'

export function Header() {

    const [active, setActive] = useState(false)

    const handleActive = () => {
        setActive(!active)
    }
    
    return (
        <div className={`header-container ${active? 'active' : ''}`}>
            <img className='logo-img' src="../src/assets/Images/OMA-Logo.svg" alt="Logo-img" />
            < div className={`header-menu-container ${active ? 'active' : ''}`}>
            <div className={`header-interactions ${active? 'active' : ''}`}>
                <ul>
                    <li><a href="#">Sobre nosotros</a></li>
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Estadísticas</a></li>
                    <li><a href="#">Contáctanos</a></li>
                </ul>
                <div className={`${active? 'interaction-btn-container' : ''}`} >
                    <a className='terciary-btn' href="http://wa.me/3178266279"> <FaWhatsapp className='web-icon'/> (+57) 310 279 1873 </a>
                </div>
            </div>
            </div>
            {
                !active ?
                <IoMenuOutline className='btn-menu' onClick={handleActive} />
                :
                <IoCloseOutline className='btn-close-menu' onClick={handleActive}/>
            }


        </div>
    )
}
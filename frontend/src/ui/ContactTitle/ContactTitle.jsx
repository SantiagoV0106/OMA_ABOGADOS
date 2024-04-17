import './contacttitle.css'

import { FaWhatsapp } from 'react-icons/fa6'
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from 'react-icons/io5'

export function ContactTitle() {
    return (
        <div className={'title-container'}>
            <h3>Contacto</h3>
            <h1>Te ayudamos al instante</h1>
            <ul>
                <li><FiPhone className='web-icon' /> (+57 602) 308 7554 </li>
                <li><FaWhatsapp className='web-icon' /> (+57) 310 279 1873 </li>
                <li> <IoMailOutline className='web-icon' /> luis.orjuela@omaabogados.com.co </li>
            </ul>
        </div>
    )
}
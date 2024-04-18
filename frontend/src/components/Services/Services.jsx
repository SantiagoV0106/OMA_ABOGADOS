import { Link } from 'react-router-dom'
import { services } from "../../const/services";
import { FaAngleRight } from "react-icons/fa6";

import './services.css'

export function Services() {

    return (
        <div className="services-container">
            {
                services.map(({ id, service, link }) => {
                    return (
                        <Link key={id} className="service"
                        to={`/servicios/${link}`}>
                            <h1>{service}</h1>
                            <FaAngleRight className="web-icon" />
                        </Link>
                    )
                })
            }
        </div>
    )
}
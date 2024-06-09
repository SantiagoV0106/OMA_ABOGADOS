// Eslint
/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'

// Icons
import { CiLocationOn } from "react-icons/ci";

// Styles
import './office.css'

export function Office({ name, direction, directionUrl }) {
    return (
        <Link className="office-container" to={directionUrl} >
            <div className="office-title">
                <CiLocationOn className="web-icon" />
                <h3>{name}</h3>
            </div>
            <p>{direction}</p>
        </Link>
    )
}
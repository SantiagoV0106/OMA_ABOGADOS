// Eslint
/* eslint-disable react/prop-types */

// Icons
import { CiLocationOn } from "react-icons/ci";

// Styles
import './office.css'

export function Office({ name, direction, directionUrl }) {
    return (
        <div className="office-container">
            <div className="office-title">
                <CiLocationOn className="web-icon" />
                <h3>{name}</h3>
            </div>
            <a href={directionUrl}>{direction}</a>
        </div>
    )
}
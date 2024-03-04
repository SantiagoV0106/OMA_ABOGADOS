import { CiLocationOn } from "react-icons/ci";
import './office.css'

export function Office({ name, direction, directionUrl }) {
    return (
        <div className="office-container">
            <div className="office-title">
                <CiLocationOn className="web-icon"/>
                <h3>{name}</h3>
            </div>
            <a href={directionUrl}>{direction}</a>
        </div>
    )
}
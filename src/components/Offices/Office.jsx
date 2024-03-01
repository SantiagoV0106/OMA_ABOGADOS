import { CiLocationOn } from "react-icons/ci";
import './office.css'

export function Office({ name, direction }) {
    return (
        <div className="office-container">
            <div>
                <CiLocationOn />
                <h1>{name}</h1>
            </div>
            <p>{direction}</p>
        </div>
    )
}
import { services } from "../../const/services";
import { FaAngleRight } from "react-icons/fa6";

import './areas.css'

export function Areas() {
    
    return (
        <div className="services-container">
            {
                services.map(({ id, service }) => {
                    return (
                        <div key={id} className="service">
                            <h1>{service}</h1>
                            <FaAngleRight className="web-icon" />
                        </div>
                    )
                })
            }
        </div>
    )
}
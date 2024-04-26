// React
import { Link } from 'react-router-dom'

// Style
import { services } from '../../const/services'
import './dropdown.css'

export function DropDown() {
    return (
        <div>
            <ul>
                {
                    services.map(({ id, service, link }) => {
                        return (
                            <Link key={id}
                                to={`/servicios/${link}`}
                            >{service}</Link>
                        )
                    })
                }
            </ul>
        </div>
    )
}
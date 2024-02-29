import { clients } from '../../const/clients'

import './clients.css'

export function Clients() {
    return (
        <div className="clients-container">
            {
                clients.map(({ id, image, name }) => {
                    return (
                        <div className="client" key={id}>
                            <img src={image} alt={name} />
                        </div>
                    )
                })
            }
        </div>
    )
}
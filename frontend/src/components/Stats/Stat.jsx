// Esplint
/* eslint-disable react/prop-types */

// Styles
import './stat.css'

export function Stat({ tasa, tasasAsociadas }) {
    return (
        <div className="stats-container">
            <div className="global-stat"
            >
                <h1>{tasa}</h1>
            </div>
            <div className="stats-asociadas">
                {
                    tasasAsociadas.map(({ descripcion, porcentaje }) => {
                        return (
                            <div
                                key={crypto.randomUUID()}
                                className="stat-container">
                                <div className="stat">
                                    <h3>{porcentaje}</h3>
                                    <p>{descripcion}</p>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}
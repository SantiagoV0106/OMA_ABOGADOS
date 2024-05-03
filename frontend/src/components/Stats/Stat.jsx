// Esplint
/* eslint-disable react/prop-types */

// Styles
import './stat.css'

export function Stat({ tasa, tasasAsociadas }) {
    return (
        <div className="stats-container">
            <div className="global-stat">
                <h1>{tasa}</h1>
            </div>
            <div className="stats-asociadas">
                {
                    tasasAsociadas.map(({ id, titulo, tasa }) => {
                        return (
                            <div
                                key={id}
                                className="stat-container">
                                <div className="stat">
                                    <h3>{tasa}</h3>
                                    <p>{titulo}</p>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}
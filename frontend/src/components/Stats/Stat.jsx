// Esplint
/* eslint-disable react/prop-types */

// Styles
import './stat.css'

export function Stat({tasa}) {
    return (
        <div className="stats-container">
            <h1>{tasa}</h1>
            <div className="stat-container">
                <div className="stat">
                    <h3>100%</h3>
                    <p>Procesos</p>
                </div>
                <div className="stat">
                    <h3>100%</h3>
                    <p>Procesos</p>
                </div>
                <div className="stat">
                    <h3>100%</h3>
                    <p>Procesos</p>
                </div>
            </div>
        </div>
    )
}
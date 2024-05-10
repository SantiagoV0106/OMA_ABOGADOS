// Eslint
/* eslint-disable react/prop-types */

// Style
import './button.css'

export function Button({ icon, name, className, type, onClick, disabled }) {
    return (
        <button
            onClick={onClick}
            className={className}
            type={type}
            disabled={disabled}>
            {icon}{name}
        </button>
    )
}
// Eslint

/* eslint-disable react/prop-types */

// Style
import './button.css'

export function Button({ icon, name, className }) {
    return (
        <button className={className} type='button'>{icon}{name}</button>
    )
}
/* eslint-disable react/prop-types */
import './input.css'

export function Input({
    type,
    id,
    inputChange,
    value,
    name }) {

    return (
        <input
            type={type}
            id={id}
            onChange={inputChange}
            value={value}
            name={name}
            required />
    )
}
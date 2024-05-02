/* eslint-disable react/prop-types */
import './input.css'

export function Input({
    style,
    type,
    id,
    inputChange,
    value,
    name }) {

    return (
        <input
            style={style}
            type={type}
            id={id}
            onChange={inputChange}
            value={value}
            name={name}
            required />
    )
}
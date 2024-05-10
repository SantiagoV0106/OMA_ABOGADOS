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
            name={name}
            value={value}
            onChange={inputChange}
            required />
    )
}
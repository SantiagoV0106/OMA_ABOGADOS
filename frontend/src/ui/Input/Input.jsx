import './input.css'

export function Input({ type, id }) {

    return (
        <input type={type} id={id} required />
    )
}
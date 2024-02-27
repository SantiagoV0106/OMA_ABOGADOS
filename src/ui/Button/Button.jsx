import './button.css'

export function Button({ className, type,icon, name }) {
    return (
        <button className={className} type={type}>{icon}{name}</button>
    )
}
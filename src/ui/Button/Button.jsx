import './button.css'

export function Button({ icon, name }) {
    return (
        <button className='secondary-btn' type='button'>{icon}{name}</button>
    )
}
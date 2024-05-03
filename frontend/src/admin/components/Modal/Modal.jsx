// Eslint
/* eslint-disable react/prop-types */

// React


// Styles
import './modal.css'

export function Modal({ isOpen, children }) {
    if (!isOpen) return null

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                {children}
            </div>
        </div>
    )


}
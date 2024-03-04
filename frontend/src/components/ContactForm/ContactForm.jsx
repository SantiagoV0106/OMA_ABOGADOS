import { useRef, useState, useEffect } from 'react'
import { Input, Button } from '../../ui'
import './contactform.css'

export function ContactForm() {

    const textAreaRef = useRef(null)
    const [value, setValue] = useState('')

    const handleChange = ({ target }) => {
        setValue(target.value)
    }

    useEffect(() => {
        textAreaRef.current.style.height = '300px'
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px'
    }, [value])

    return (
        <form action="" id='contact-us-form'>
            <div className="input-group">
                <Input
                    type='text'
                    id='nombre'
                />
                <label
                    htmlFor='nombre'>
                    *Nombre
                </label>
            </div>

            <div className="input-group">
                <Input
                    type='text'
                    id='correo'
                />
                <label
                    htmlFor='correo'>
                    *Correo
                </label>
            </div>

            <div className="input-group">
                <textarea
                    id='msg-area'
                    value={value}
                    onChange={handleChange}
                    ref={textAreaRef}
                    rows={1}
                    required
                />
                <label
                    htmlFor='msg-area'>
                    *Contexto
                </label>
            </div>

            <Button
                className='primary-btn'
                type='submit'
                name='Enviar'
            />
        </form>
    )
}
import { useRef, useState, useEffect } from 'react'
import { Input, Button, CheckBox, Loader } from '../../ui'

// Icons
import { FaCheckCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";

// Styles
import './contactform.css'

const initialFormState = {
    nombre: '',
    correo: '',
    numero: '',
    mensaje: ''
}

export function ContactForm() {

    const textAreaRef = useRef({});
    const [formData, setFormData] = useState(initialFormState);
    const [isChecked, setIsChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [msgSent, setMsgSent] = useState(false)
    const [msgError, setMsgError] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    useEffect(() => {
        // Verificar si textAreaRef.current está definido antes de intentar acceder a sus propiedades
        textAreaRef.current?.style?.setProperty('height', '300px');
        textAreaRef.current?.style?.setProperty('height', textAreaRef.current?.scrollHeight + 'px');
    }, [formData.mensaje]);

    const handleClick = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        try {
            const response = await fetch('http://localhost/oma/send-email.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                console.log('Correo enviado con éxito');
                setFormData(initialFormState)
                setIsChecked(!isChecked)
                setMsgSent(true)
                setIsLoading(false)
                // Aquí puedes realizar cualquier acción adicional después de enviar el correo, como mostrar un mensaje de éxito al usuario.
            } else {
                console.error('Error al enviar el correo');
                setMsgError(true)
                // Aquí puedes manejar errores relacionados con el envío del correo.
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleCheckboxChange = () => {
        setIsChecked((prevState) => !prevState)
    }

    const handleViewPDF = () => {
        fetch('http://localhost/oma/tyc.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                filename: 'POLITICA DE TRATAMIENTO DE DATOS PERSONALES.pdf'
            })
        }).then(response => {
            if (!response.ok) {
                throw new Error('Error al abrir el PDF');
            }
            const pdfURL = 'http://localhost/pdf/' + 'POLITICA DE TRATAMIENTO DE DATOS PERSONALES.pdf'; // Ruta relativa al directorio htdocs
            // Abrir el archivo PDF en una nueva pestaña del navegador
            window.open(pdfURL, '_blank');
        }).catch(error => {
            // Manejar errores
            console.error('Error al abrir el PDF:', error);
        });
    }


    return (
        <>
            {isLoading ?
                <div className="loader-container">
                    <Loader />
                </div>
                :
                msgSent ?
                    <div className='contact-msg-status'>
                        <FaCheckCircle />
                        <p>Mensaje enviado con éxito</p>
                    </div>
                    :
                    msgError ?
                        <div className='contact-msg-status'>
                            <MdError
                                style={{
                                    color: 'red'
                                }} />
                            <p>Error al enviar correo</p>
                        </div>
                        :
                        <form id="contact-us-form">
                            <div className="input-group">
                                <Input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    value={formData.nombre}
                                    inputChange={handleChange}
                                    required />
                                <label htmlFor="nombre">*Nombre</label>
                            </div>

                            <div className="input-group">
                                <Input
                                    type="text"
                                    id="correo"
                                    name="correo"
                                    value={formData.correo}
                                    inputChange={handleChange}
                                    required />
                                <label htmlFor="correo">*Correo</label>
                            </div>

                            <div className="input-group">
                                <Input
                                    type="number"
                                    id="numero"
                                    name="numero"
                                    value={formData.numero}
                                    inputChange={handleChange}
                                    required />
                                <label htmlFor="numero">*Número</label>
                            </div>

                            <div className="input-group">
                                <textarea
                                    id="msg-area"
                                    name="mensaje"
                                    value={formData.mensaje}
                                    onChange={handleChange}
                                    ref={textAreaRef}
                                    rows={1}
                                    required />
                                <label htmlFor="msg-area">*Contexto</label>
                            </div>

                            <div className="checkbox-container">
                                <CheckBox label="Acepto la" checked={isChecked} onChange={handleCheckboxChange} />
                                <a onClick={handleViewPDF} rel="noopener noreferrer">
                                    política de tratamiento de datos
                                </a>
                            </div>

                            <Button
                                className="primary-btn"
                                type="submit"
                                name="Enviar"
                                disabled={!isChecked}
                                onClick={handleClick} />
                        </form>

            }
        </>
    );
}
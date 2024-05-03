// React
import { useEffect, useState } from 'react'

// CustomHooks
import { useAuth } from '../../../auth/hooks/useAuth'
import { useFetch } from '../../../user/hooks/useFetch'

// Components
import './dashboard.css'

// Icons
import { MdEdit } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";

// Styles
import { Button } from '../../../ui'

// Url
const URL = 'http://localhost/oma/processes.php'

export function DashboardPage() {

    const [edit, setEdit] = useState(null)
    const [editData, setEditData] = useState({})

    const { handleLogOut } = useAuth()

    const {
        data,
        loading,
        error,
        fetchData } = useFetch(URL)

    useEffect(() => {
        fetchData()

    }, [])

    const handleEdit = (id) => {
        const processData = data.find(process => process.id === id)
        setEdit(id)
        setEditData(processData)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditData(prevData => ({ ...prevData, [name]: value }))
    }

    const handleSave = (id) => {
        fetch(`${URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editData)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('No se pudo actualizar el proceso')
                }
                console.log('Datos actualizados', editData);
                setEdit(null)
                setEdit({})

            })
            .catch(error => {
                console.error('Error al actualizar el proceso', error);
            })
    }



    return (
        <>
            <header className='dashboard-header'>
                <img src="/oma-gold.png" alt="oma-logo" />
                <Button
                    onClick={handleLogOut}
                    className='primary-btn'
                    type='button'
                    name='Cerrar Sesión' />
            </header>
            <div className="dashboard-processes">
                <div className="dashboard-title-section">
                    <h1>Procesos</h1>
                    <p>Edita, agrega o elimina</p>
                </div>
                {
                    loading ?
                        <div className="loading-msg-container">
                            <p>Cargando los procesos</p>
                            <span className="loader"></span>
                        </div>
                        : error ?
                            <p>No se encontraron procesos</p>
                            :
                            <div className="processes-container">
                                {
                                    data.map(({
                                        id,
                                        tema,
                                        descripcion,
                                        radicado,
                                        juzgado }) => {

                                        const isEditign = edit === id

                                        return (
                                            <div key={id}>
                                                <div className="action-btns">
                                                    {
                                                        isEditign ?
                                                            <Button
                                                                onClick={() => handleSave(id)}
                                                                className='save-btn'
                                                                type='button'
                                                                name='Guardar' /> :
                                                            <Button
                                                                onClick={() => handleEdit(id)}
                                                                className='edit-btn'
                                                                type='button'
                                                                name={<MdEdit />} />
                                                    }
                                                    <Button
                                                        onClick={handleLogOut}
                                                        className='delete-btn'
                                                        type='button'
                                                        name={<IoMdTrash />} />
                                                </div>
                                                <div
                                                    className="process">
                                                    {
                                                        isEditign ?
                                                            <>
                                                                <div className="process-info">
                                                                    <input
                                                                        type="text"
                                                                        name='tema'
                                                                        value={editData.tema || ''}
                                                                        onChange={handleInputChange} />
                                                                    <textarea
                                                                        name='descripcion'
                                                                        value={editData.descripcion || ''}
                                                                        onChange={handleInputChange}
                                                                    />
                                                                </div>

                                                                <div className="process-extra-info">
                                                                    <p >Radicado</p>
                                                                    <input
                                                                        type="number"
                                                                        name='radicado'
                                                                        value={editData.radicado || ''}
                                                                        onChange={handleInputChange} />
                                                                    <p >Juzgado</p>
                                                                    <input
                                                                        type="text"
                                                                        name='juzgado'
                                                                        value={editData.juzgado || ''}
                                                                        onChange={handleInputChange} />
                                                                </div>
                                                            </>

                                                            :
                                                            <>
                                                                <div className="process-info">
                                                                    <h1>{tema}</h1>
                                                                    <p>{descripcion}</p>
                                                                </div>
                                                                <div className="process-extra-info">
                                                                    <p >Radicado <span>{radicado}</span></p>
                                                                    <p >Juzgado <span>{juzgado}</span></p>
                                                                </div>
                                                            </>

                                                    }

                                                </div>

                                            </div>

                                        )

                                    })
                                }
                            </div>
                }

            </div >

        </>

    )
}
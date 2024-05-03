// React
import { useEffect, useState } from 'react'

// CustomHooks
import { useAuth } from '../../../auth/hooks/useAuth'
import { useFetch } from '../../../user/hooks/useFetch'

// Components
import './dashboard.css'

// Styles
import { Button, Input } from '../../../ui'
import { Modal, Table } from '../../components';

// Url
const URL = 'http://localhost/oma/processes.php'

export function DashboardPage() {

    const [editData, setEditData] = useState({})
    const [openModal, setOpenModal] = useState(false)

    const { handleLogOut } = useAuth()

    const {
        data,
        loading,
        fetchData } = useFetch(URL)

    useEffect(() => {
        fetchData()

    }, [])

    const handleEdit = (id) => {
        const processData = data.find(process => process.id === id)
        setEditData(processData)
        setOpenModal(true)

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
                setEditData({})
                setOpenModal(false)
                fetchData()
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
            {
                loading ?
                    <p>Cargando</p>
                    :
                    <>
                        <h1>Procesos</h1>
                        <Table
                            edit={handleEdit}
                            data={data} />
                        <Modal
                            isOpen={openModal}
                            onClose={() => setOpenModal(false)}
                        >
                            <div className="modal-header">
                                <h3>Edita este proceso</h3>
                                <Button
                                    type="button"
                                    className='close-btn'
                                    name='X'
                                    onClick={() => setOpenModal(false)}
                                />
                            </div>
                            <div className="input-group">
                                <Input
                                    type='text'
                                    id='tema'
                                    name='tema'
                                    value={editData.tema || ''}
                                    inputChange={handleInputChange}
                                />
                                <label
                                    htmlFor='tema'>
                                    Tema
                                </label>
                            </div>
                            <div className="input-group">
                                <textarea
                                    rows={10}
                                    cols={50}
                                    id='descripcion'
                                    name='descripcion'
                                    value={editData.descripcion || ''}
                                    onChange={handleInputChange}
                                />
                                <label
                                    htmlFor='descripcion'>
                                    Descripción
                                </label>
                            </div>
                            <div className="input-group">
                                <Input
                                    type='number'
                                    id='radicado'
                                    name='radicado'
                                    value={editData.radicado || ''}
                                    inputChange={handleInputChange}
                                />
                                <label
                                    htmlFor='radicado'>
                                    Radicado
                                </label>
                            </div>
                            <div className="input-group">
                                <Input
                                    type='text'
                                    id='juzgado'
                                    name='juzgado'
                                    value={editData.juzgado || ''}
                                    inputChange={handleInputChange}
                                />
                                <label
                                    htmlFor='juzgado'>
                                    Juzgado
                                </label>
                            </div>
                            <Button
                                className='primary-btn'
                                onClick={handleSave}
                                name='Guardar'
                            />
                        </Modal>

                    </>

            }

        </>

    )
}
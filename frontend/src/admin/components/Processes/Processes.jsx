// React
import { useEffect, useState } from 'react'

// CustomHooks
import { useFetch } from '../../../user/hooks/useFetch'

// Components
import { Modal, Table } from '../../components';
import { Button, Input } from '../../../ui'

// Url
const URL = 'backend.omaabogados.com.co/processes.php'

export function Processes() {

    const [editData, setEditData] = useState({})
    const [isDeleting, setIsDeleting] = useState(false)
    const [isAdding, setIsAdding] = useState(false)
    const [openModal, setOpenModal] = useState(false)


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
    const handleDelete = (id) => {
        const processData = data.find(process => process.id === id)
        setEditData(processData)
        setIsDeleting(true)
        setOpenModal(true)
    }

    const deleteProcess = (id) => {
        fetch(`${URL}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('No se pudo eliminar el proceso')
                }
                console.log('Proceso eliminado con éxito');
                setEditData({})
                setOpenModal(false)
                setIsDeleting(false)
                fetchData()
            })
            .catch(error => {
                console.error('Error al eliminar el proceso', error);
            })
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

    const handlePost = () => {
        setIsAdding(true)
        setOpenModal(true)
    }


    const addProcess = () => {

        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editData)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('No se pudo crear el proceso');
                }
                console.log('Proceso creado con éxito');
                setIsAdding(false)
                setEditData({})
                setOpenModal(false);
                fetchData();
            })
            .catch(error => {
                console.error('Error al crear el proceso', error);
            });
    }

    return (
        <>
            {
                loading ?
                    <p>Cargando</p>
                    :
                    <>
                        <div className="page-title">
                            <h1>Procesos</h1>
                            <Button
                                type='button'
                                className='action-btn'
                                name='Añadir proceso'
                                onClick={handlePost}
                            />
                        </div>
                        <Table
                            edit={handleEdit}
                            deleteP={handleDelete}
                            data={data} />
                        <Modal
                            isOpen={openModal}
                            onClose={() => setOpenModal(false)}
                        >
                            <div className="modal-header">
                                <h3>{isAdding ? 'Añadir nueva sentencia' : isDeleting ? '¿Eliminar este proceso?' : 'Editar este proceso'}</h3>
                                <Button
                                    type="button"
                                    className='close-btn'
                                    name='X'
                                    onClick={() => setOpenModal(false)}
                                />
                            </div>
                            {
                                isDeleting ? (
                                    <div className='delete-actions'>
                                        <Button
                                            type='button'
                                            className='primary-delete-btn'
                                            name='Eliminar'
                                            onClick={() => deleteProcess(editData.id)}
                                        />
                                        <Button
                                            type='button'
                                            className='secondary-action-btn'
                                            name='Cancelar'
                                            onClick={() => setOpenModal(false)}
                                        />
                                    </div>
                                ) : (
                                    <>
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
                                            onClick={isAdding ? addProcess : handleSave}
                                            name={isAdding ? 'Añadir' : 'Guardar'}
                                        />
                                    </>

                                )}

                        </Modal >

                    </>

            }
        </>

    )



}
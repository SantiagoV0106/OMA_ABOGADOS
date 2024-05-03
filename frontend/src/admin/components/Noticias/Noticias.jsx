// React
import { useEffect, useState } from 'react'

// CustomHooks
import { useFetch } from '../../../user/hooks/useFetch'

// Components
import { Modal, Table } from '../../components';
import { Button, Input } from '../../../ui'

// Url
const URL = 'http://localhost/oma/noticias.php'

export function Noticias() {
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

    console.log(data);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditData(prevData => ({ ...prevData, [name]: value }))
    }

    const handleEdit = (id) => {
        const noticiaData = data.find(noticia => noticia.id === id)
        setEditData(noticiaData)
        setOpenModal(true)

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

    const handleDelete = (id) => {
        const noticiaData = data.find(noticia => noticia.id === id)
        setEditData(noticiaData)
        setIsDeleting(true)
        setOpenModal(true)
    }

    const deleteNoticia = (id) => {
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

    const handlePost = () => {
        setIsAdding(true)
        setOpenModal(true)
    }


    const addNoticia = () => {

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
                    <p>Cargando datos</p>
                    :
                    <>
                        <div className="page-title">
                            <h1>Noticias</h1>
                            <Button
                                type='button'
                                className='action-btn'
                                name='Añadir noticia'
                                onClick={handlePost}
                            />
                        </div>
                        <Table
                            edit={handleEdit}
                            deleteP={handleDelete}
                            data={data} />

                        <Modal
                            isOpen={openModal}
                            onClose={() => setOpenModal(false)}>
                            <div className="modal-header">
                                <h3>{isAdding ? 'Añadir nueva noticia' : isDeleting ? '¿Eliminar esta noticia?' : 'Editar este noticia'}</h3>
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
                                            onClick={() => deleteNoticia(editData.id)}
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
                                                id='titulo'
                                                name='titulo'
                                                value={editData.titulo || ''}
                                                inputChange={handleInputChange}
                                            />
                                            <label
                                                htmlFor='titulo'>
                                                Título
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
                                                type='text'
                                                id='enlace'
                                                name='enlace'
                                                value={editData.enlace || ''}
                                                inputChange={handleInputChange}
                                            />
                                            <label
                                                htmlFor='enlace'>
                                                Enlace
                                            </label>
                                        </div>
                                        <Button
                                            className='primary-btn'
                                            onClick={isAdding ? addNoticia : handleSave}
                                            name={isAdding ? 'Añadir' : 'Guardar'}
                                        />
                                    </>

                                )}
                        </Modal>

                    </>

            }
        </>
    )

}
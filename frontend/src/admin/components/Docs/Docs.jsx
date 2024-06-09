import { useEffect, useState } from 'react';
import { Button, Input, Loader } from '../../../ui';
import { Modal, Table } from '../../components';
import { useFetch } from '../../../user/hooks/useFetch';

const URL = 'https://omaabogados.com.co/oma/file-manager.php';

const initialEditData = {
    fileName: '',
    description: '',
    id: null
};

export function Docs() {
    const [editData, setEditData] = useState(initialEditData);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isAdding, setIsAdding] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const {
        data,
        loading,
        fetchData
    } = useFetch(URL);

    useEffect(() => {
        fetchData();
    }, []);

    const handleEdit = (id) => {
        const processData = data.find(process => process.id === id);
        setEditData({
            fileName: processData.archivo, 
            description: processData.descripcion,
            id: processData.id
        });
        setOpenModal(true);
    };

    const handleDelete = (id) => {
        const document = data.find(doc => doc.id === id);
        setEditData(document || initialEditData);
        setIsDeleting(true);
        setOpenModal(true);
    };

    const deleteDocument = (id) => {
        fetch(URL, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('No se pudo eliminar el documento');
                }
                setEditData(initialEditData);
                setOpenModal(false);
                setIsDeleting(false);
                fetchData();
            })
            .catch(error => {
                console.error('Error al eliminar el documento', error);
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSave = () => {
        fetch(URL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editData)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('No se pudo actualizar el documento');
                }
                setEditData(initialEditData);
                setOpenModal(false);
                fetchData();
            })
            .catch(error => {
                console.error('Error al actualizar el documento', error);
            });
    };

    const handlePost = () => {
        setEditData(initialEditData);
        setIsAdding(true);
        setOpenModal(true);
    };

    const addDocument = () => {
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editData)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('No se pudo crear el documento');
                }
                setIsAdding(false);
                setEditData(initialEditData);
                setOpenModal(false);
                fetchData();
            })
            .catch(error => {
                console.error('Error al crear el documento', error);
            });
    };

    const handleCloseModal = () => {
        setEditData(initialEditData);
        setOpenModal(false);
        setIsAdding(false);
        setIsDeleting(false);
    };

    const hasData = data && data.length > 0;

    return (
        <>
            <div className="page-title">
                <h1>Documentos</h1>
                <Button
                    type='button'
                    className='action-btn'
                    name='Añadir documento'
                    onClick={handlePost}
                />
            </div>
            {
                loading ?
                    <section className="no-data">
                        <Loader />
                    </section>
                    :
                    hasData ?
                        <>
                            <Table
                                edit={handleEdit}
                                deleteP={handleDelete}
                                data={data} />
                        </> :
                        <section className="no-data">
                            <p>No hay documentos para mostrar</p>
                        </section>
            }
            <Modal
                isOpen={openModal}
                onClose={handleCloseModal}
            >
                <div className="modal-header">
                    <h3>{isAdding ? 'Añadir nuevo documento' : isDeleting ? '¿Eliminar este documento?' : 'Editar este documento'}</h3>
                    <Button
                        type="button"
                        className='close-btn'
                        name='X'
                        onClick={handleCloseModal}
                    />
                </div>
                {
                    isDeleting ? (
                        <div className='delete-actions'>
                            <Button
                                type='button'
                                className='primary-delete-btn'
                                name='Eliminar'
                                onClick={() => deleteDocument(editData.id)}
                            />
                            <Button
                                type='button'
                                className='secondary-action-btn'
                                name='Cancelar'
                                onClick={handleCloseModal}
                            />
                        </div>
                    ) : (
                        <>
                            <div className="input-group">
                                <Input
                                    type='text'
                                    id='fileName'
                                    name='fileName'
                                    value={editData.fileName}
                                    inputChange={handleInputChange}
                                />
                                <label
                                    htmlFor='fileName'>
                                    Nombre del archivo
                                </label>
                            </div>
                            <div className="input-group">
                                <textarea
                                    rows={5}
                                    cols={50}
                                    id='description'
                                    name='description'
                                    value={editData.description || ''}
                                    onChange={handleInputChange}
                                />
                                <label
                                    htmlFor='description'>
                                    Descripción
                                </label>
                            </div>
                            <Button
                                className='primary-btn'
                                onClick={isAdding ? addDocument : handleSave}
                                name={isAdding ? 'Añadir' : 'Guardar'}
                            />
                        </>
                    )}
            </Modal>
        </>
    );
}

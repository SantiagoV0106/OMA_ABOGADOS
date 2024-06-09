// React
import { useEffect, useState } from 'react';

// CustomHooks
import { useFetch } from '../../../user/hooks/useFetch';

// Components
import { Modal, Table } from '../../components';
import { Button, Input, Loader } from '../../../ui';

// URL
const URL = 'https://omaabogados.com.co/oma/noticias.php';

const initialEditData = {
    titulo: '',
    descripcion: '',
    enlace: ''
};

export function Noticias() {
    const [editData, setEditData] = useState(initialEditData);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isAdding, setIsAdding] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const {
        data,
        loading,
        fetchData } = useFetch(URL);

    useEffect(() => {
        fetchData();
    }, []);

    const handleEdit = (id) => {
        const noticiaData = data.find(noticia => noticia.id === id);
        setEditData(noticiaData || initialEditData);
        setOpenModal(true);
    };

    const handleDelete = (id) => {
        const noticiaData = data.find(noticia => noticia.id === id)
        setEditData(noticiaData || initialEditData);
        setIsDeleting(true);
        setOpenModal(true);
    };

    const deleteNoticia = (id) => {
        fetch(`${URL}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('No se pudo eliminar la noticia');
                }
                setEditData(initialEditData);
                setOpenModal(false);
                setIsDeleting(false);
                fetchData();
            })
            .catch((error) => {
                console.error('Error al eliminar la noticia', error);
            });
    };


    const handleSave = () => {
        fetch(`${URL}/${editData.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editData),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('No se pudo actualizar la noticia');
                }
                setEditData(initialEditData);
                setOpenModal(false);
                fetchData();
            })
            .catch((error) => {
                console.error('Error al actualizar la noticia', error);
            });
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handlePost = () => {
        setEditData(initialEditData);
        setIsAdding(true);
        setOpenModal(true);
    };

    const addNoticia = () => {
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editData),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('No se pudo crear la noticia');
                }
                setIsAdding(false);
                setEditData(initialEditData);
                setOpenModal(false);
                fetchData();
            })
            .catch((error) => {
                console.error('Error al crear la noticia', error);
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
                <h1>Noticias</h1>
                <Button
                    type="button"
                    className="action-btn"
                    name="Añadir noticia"
                    onClick={handlePost}
                />
            </div>
            {
                loading ? (
                    <section className="no-data">
                        <Loader />
                    </section>
                ) : hasData ?
                    <>
                        <Table
                            edit={handleEdit}
                            deleteP={handleDelete}
                            data={data}
                        />
                    </>
                    :
                    <section className="no-data">
                        <p>No hay noticias para mostrar</p>
                    </section>
            }

            <Modal
                isOpen={openModal}
                onClose={handleCloseModal}
            >
                <div className="modal-header">
                    <h3>
                        {isAdding ? 'Añadir nueva noticia' : isDeleting ? '¿Eliminar esta noticia?' : 'Editar esta noticia'}
                    </h3>
                    <Button
                        type="button"
                        className="close-btn"
                        name="X"
                        onClick={handleCloseModal}
                    />
                </div>
                {
                    isDeleting ? (
                        <div className="delete-actions">
                            <Button
                                type="button"
                                className="primary-delete-btn"
                                name="Eliminar"
                                onClick={() => deleteNoticia(editData.id)}
                            />
                            <Button
                                type="button"
                                className="secondary-action-btn"
                                name="Cancelar"
                                onClick={handleCloseModal}
                            />
                        </div>
                    ) : (
                        <>
                            <div className="input-group">
                                <Input
                                    type="text"
                                    id="titulo"
                                    name="titulo"
                                    value={editData.titulo || ''}
                                    inputChange={handleInputChange}
                                />
                                <label htmlFor="titulo">Título</label>
                            </div>
                            <div className="input-group">
                                <textarea
                                    id="descripcion"
                                    name="descripcion"
                                    value={editData.descripcion || ''}
                                    onChange={handleInputChange}
                                    rows={8}
                                    cols={50}
                                    required
                                />
                                <label htmlFor="descripcion">
                                    Descripción
                                </label>
                            </div>
                            <div className="input-group">
                                <Input
                                    type="text"
                                    id="enlace"
                                    name="enlace"
                                    value={editData.enlace || ''}
                                    inputChange={handleInputChange}
                                />
                                <label htmlFor="enlace">Enlace</label>
                            </div>
                            <Button
                                className="primary-btn"
                                onClick={isAdding ? addNoticia : () => handleSave(editData.id)}
                                name={isAdding ? 'Añadir' : 'Guardar'}
                            />
                        </>
                    )}
            </Modal>
        </>
    );
}

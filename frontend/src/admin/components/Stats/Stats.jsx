// React
import { useEffect, useState } from 'react'

// CustomHooks
import { useFetch } from '../../../user/hooks/useFetch'

// Components
import { Button, Input, Loader } from '../../../ui'
import { Modal } from '../../components';

// Icons
// Icons
import { MdEdit } from "react-icons/md";
import { IoMdAdd, IoMdTrash } from "react-icons/io";

const URL = 'https://omaabogados.com.co/oma/stats.php'
// const initalEditData = {}

// Styles
import './stats.css'

export function Stats() {

    const [editData, setEditData] = useState(null)
    const [openModal, setOpenModal] = useState(false)

    const {
        data,
        loading,
        fetchData } = useFetch(URL)

    useEffect(() => {
        fetchData()
    }, [])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditData(prevData => ({ ...prevData, [name]: value }))
    }

    const handleTasaChange = (index, e) => {
        const { name, value } = e.target;
        setEditData(prevData => {
            const tasasAsociadas = [...prevData.tasasAsociadas];
            tasasAsociadas[index][name] = value;
            return { ...prevData, tasasAsociadas }
        })
    }

    const handleEdit = (id) => {
        const estadistica = data.find(stat => stat.id === id)
        setEditData(estadistica)
        setOpenModal(true)
    }

    const handleAddTasa = () => {
        setEditData(prevData => ({
            ...prevData,
            tasasAsociadas: [...prevData.tasasAsociadas, { porcentaje: '', descripcion: '' }]
        }))
    }

    const handleDeleteTasa = (index) => {
        setEditData(prevData => ({
            ...prevData,
            tasasAsociadas: prevData.tasasAsociadas.filter((tasa, i) => i !== index)
        }))
    }

    const handleSave = () => {
        if (validateInputs()) {
            fetch(`${URL}/${editData.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editData)
            })
                .then(res => {
                    if (!res.ok) {
                        throw new Error('No se pudo actualizar la estadística')
                    }
                    setEditData(null)
                    setOpenModal(false)
                    fetchData()
                })
                .catch(error => {
                    console.error('Error al actualizar la estadística', error);
                })
        } else {
            alert("Todos los campos son obligatorios y deben ser válidos.");
        }
    }

    const validateInputs = () => {
        if (!editData.titulo || !editData.porcentaje) return false;
        for (const tasa of editData.tasasAsociadas) {
            if (!tasa.descripcion || !tasa.porcentaje) return false;
        }
        return true;
    }

    const handleCloseModal = () => {
        setEditData(null)
        setOpenModal(false)
    }

    const hasData = data.length > 0

    return (
        <>
            <div className="page-title">
                <h1>Estadísticas</h1>
            </div>
            {
                loading ?
                    <section className="no-data">
                        <Loader />
                    </section>
                    :
                    hasData ?
                        <section className='dash-stats'>
                            {
                                data.map(({ id, titulo, porcentaje, tasasAsociadas }) => (
                                    <article
                                        key={id}
                                        className="dash-stat">
                                        <h3> {titulo}  </h3>
                                        <div className="tasa">
                                            <p>
                                                Porcentaje
                                            </p>
                                            <span>
                                                {porcentaje}%
                                            </span>
                                        </div>
                                        <div className="tasas-asocidas-dash">
                                            <p>Tasas asociadas</p>
                                            {
                                                tasasAsociadas?.map(({ porcentaje, descripcion }) => (
                                                    <div
                                                        key={crypto.randomUUID()}
                                                        className='tasa-asociada'
                                                    >
                                                        <p>
                                                            {descripcion}
                                                        </p>
                                                        <span>
                                                            {porcentaje}%
                                                        </span>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className="action-btns">
                                            <Button
                                                type={'button'}
                                                className={'action-btn'}
                                                name={<MdEdit />}
                                                onClick={() => handleEdit(id)}
                                            />
                                        </div>
                                    </article>
                                ))
                            }
                        </section>
                        :
                        <section className="no-data">
                            <p>No hay Estadísticas para mostrar</p>
                        </section>
            }

            {openModal && editData && (
               <Modal isOpen={openModal} onClose={handleCloseModal}>
               <div className="modal-header">
                   <h3>Editar estadística</h3>
                   <Button
                       type="button"
                       className='close-btn'
                       name='X'
                       onClick={handleCloseModal}
                   />
               </div>
               <div className="input-group">
                   <Input
                       type='text'
                       id='titulo'
                       name='titulo'
                       value={editData.titulo}
                       inputChange={handleInputChange}
                   />
                   <label
                       htmlFor='titulo'>
                       Título
                   </label>
               </div>
               <div className="input-group">
                   <Input
                       type='number'
                       id='porcentaje'
                       name='porcentaje'
                       value={editData.porcentaje}
                       inputChange={handleInputChange}
                   />
                   <label
                       htmlFor='porcentaje'>
                       Porcentaje
                   </label>
               </div>
               <div className="tasas-asociadas">
                   <h3>Tasas asociadas</h3>
                   {editData.tasasAsociadas.map((tasa, index) => (
                       <div key={index} className="tasa-asociada-input-group">
                           <div className="input-group">
                               <Input
                                   type='text'
                                   id={`descripcion_${index}`}
                                   name='descripcion'
                                   value={tasa.descripcion}
                                   inputChange={(e) => handleTasaChange(index, e)}
                               />
                               <label htmlFor={`descripcion_${index}`}>Descripción</label>
                           </div>
                           <div className="input-group">
                               <Input
                                   type='number'
                                   id={`porcentaje_asociado_${index}`}
                                   name='porcentaje'
                                   value={tasa.porcentaje}
                                   inputChange={(e) => handleTasaChange(index, e)}
                               />
                               <label htmlFor={`porcentaje_asociado_${index}`}>Porcentaje Asociado</label>
                           </div>
                           <Button
                               type="button"
                               className="delete-btn"
                               name={<IoMdTrash />}
                               onClick={() => handleDeleteTasa(index)}
                           />
                       </div>
                   ))}
                   <h3>Añadir tasa asociada</h3>
                   <Button
                       type="button"
                       className="action-btn"
                       name={<IoMdAdd />}
                       onClick={handleAddTasa}
                   />
               </div>
               <Button
                   className='primary-btn'
                   onClick={handleSave}
                   name='Guardar'
               />
           </Modal>
            )}
        </>
    )
}
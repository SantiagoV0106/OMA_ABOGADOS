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
import { processes } from '../../../const/processes';

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

    // useEffect(() => {
    //     fetchData()

    // }, [])


    const handleEdit = (id) => {
        const processData = processes.find(process => process.id === id)
        setEdit(id)
        setEditData(processData)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditData(prevData => ({ ...prevData, [name]: value }))
    }

    const handleSave = () => {
        console.log('Datos actualizados', editData);
        setEdit(null)
        setEdit({})
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
                    !loading ?
                        <div className="loading-msg-container">
                            <p>Cargando los procesos</p>
                            <span className="loader"></span>
                        </div>
                        : error ?
                            <p>No se encontraron procesos</p>
                            :
                            <div className="processes-container">
                                {
                                    processes.map(({
                                        id,
                                        tema,
                                        desc,
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
                                                    <div className="process-info">
                                                        {
                                                            isEditign ?
                                                                <>
                                                                    <input
                                                                        type="text"
                                                                        name='tema'
                                                                        value={editData.tema || ''}
                                                                        onChange={handleInputChange} />
                                                                    <textarea
                                                                        name='desc'
                                                                        value={editData.desc || ''}
                                                                        onChange={handleInputChange}
                                                                    />
                                                                </>
                                                                :
                                                                <>
                                                                    <h1>{tema}</h1>
                                                                    <p>{desc}</p>
                                                                </>
                                                        }
                                                    </div>
                                                    <div className="process-extra-info">
                                                        <p >Radicado <span>{radicado}</span></p>
                                                        <p >Juzgado <span>{juzgado}</span></p>
                                                    </div>

                                                </div>

                                            </div>

                                        )

                                    })
                                }
                            </div>
                }

            </div>

        </>

    )
}
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
const URL = 'http://localhost/oma/get_processes.php'

export function DashboardPage() {

    const [edit, setEdit] = useState(null)

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
        setEdit(id)
    }
    const handleSave = () => {
        setEdit(null)
    }

    const handleInputChange = () => {
  
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
                                                                onClick={handleSave}
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
                                                                    <input type="text" name='tema' value={tema} onChange={handleInputChange} />
                                                                    <textarea value={descripcion} />
                                                                </>
                                                                :
                                                                <>
                                                                    <h1>{tema}</h1>
                                                                    <p>{descripcion}</p>
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
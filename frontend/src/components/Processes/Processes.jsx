// React
import { useEffect } from 'react'

// CustomHooks
import { useFetch } from '../../user/hooks/useFetch'

// Styles
import './processes.css'

// Url
const URL = 'backend.omaabogados.com.co/processes.php'

export function Processes() {

    const {
        data,
        loading,
        error,
        fetchData } = useFetch(URL)

    useEffect(() => {
        fetchData();
    }, [])


    const hasData = data.length > 0

    return (
        <>
            {
                loading ?
                    <div className="loading-msg-container">
                        <p>Cargando los procesos</p>
                        <span className="loader"></span>
                    </div>
                    : error ?
                        <p>No se encontraron procesos</p>
                        :
                        hasData ? 
                        <div className="processes-container">
                            {
                                data.map(({
                                    id,
                                    tema,
                                    descripcion,
                                    radicado,
                                    juzgado }) => {

                                    return (
                                        <div
                                            key={id}
                                            className="process">
                                            <div className="process-info">
                                                <h1>{tema}</h1>
                                                <p>{descripcion}</p>
                                            </div>
                                            <div className="process-extra-info">
                                                <p >Radicado <span>{radicado}</span></p>
                                                <p >Juzgado <span>{juzgado}</span></p>
                                            </div>
                                        </div>
                                    )

                                })
                            }
                        </div> :
                        <p>No hay procesos para mostrar</p>
            }
        </>
    )
}
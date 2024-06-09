import { useFetch } from '../../hooks/useFetch'
import { useEffect } from 'react'
//Components
import { Footer, Header, Stat } from '../../../components'
import { Loader, TitleSection } from '../../../ui'

// Data
import { heroImages } from '../../../const/heroImages'
//Style
import './statistics.css'

const URL = 'https://omaabogados.com.co/oma/stats'

export function StatisticsPage() {

    const {
        data,
        loading,
        error,
        fetchData
    } = useFetch(URL)


    useEffect(() => {
        fetchData()
    }, [])


    const bgHeroStyle = {
        backgroundImage: `url(${heroImages[2].imageUrl})`
    }

    const hasData = data.length > 0

    return (
        <>
            <section className="hero" style={bgHeroStyle}>
                <Header />
                <div className={'title-container'}>
                    <h3>{'Estadísticas'}</h3>
                    <h1>{'Estadísticas de la firma'}</h1>
                </div>
            </section>

            {
                loading ?
                    <section className="no-data">
                        <Loader />
                    </section>
                    :
                    error ?
                        <section className="no-data">
                            <p>
                                No se pudo cargar las estadísticas
                            </p>
                        </section>
                        :
                        hasData ?
                            data.map(({
                                id,
                                titulo,
                                porcentaje,
                                tasasAsociadas
                            }) => {
                                return (
                                    <section
                                        key={id}
                                        className="stat-page section">
                                        <TitleSection
                                            className='c-header-container'
                                            subTitle='Estadísticas'
                                            title={titulo}
                                        />
                                        <Stat
                                            id={id}
                                            tasa={porcentaje}
                                            tasasAsociadas={tasasAsociadas}
                                        />
                                    </section>
                                )
                            })
                            :
                            <section className="no-data">
                                <p>No hay estadísticas para mostrar</p>
                            </section>
            }

            <Footer />
        </>
    )
}

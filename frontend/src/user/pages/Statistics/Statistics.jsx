import { useFetch } from '../../hooks/useFetch'
import { useEffect } from 'react'
//Components
import { Footer, Header, Stat } from '../../../components'
import { Loader, TitleSection } from '../../../ui'

// Data
import { heroImages } from '../../../const/heroImages'
//Style
import './statistics.css'

const URL = 'http://localhost/oma/stats.php'

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

    console.log(data);

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
                    <Loader /> :
                    error ?
                        <p>No se pudo cargar las estadísticas
                        </p> :
                        hasData ?
                            data[0].map(({
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
                            <p>No hay estadísticas para mostrar</p>
            }

            <Footer />
        </>
    )
}

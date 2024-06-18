// React
import { useFetch } from '../../hooks/useFetch'
import { useEffect } from 'react'
import { Link, } from 'react-router-dom'

// Components
import { Footer, Header } from '../../../components'
import { Loader, TitleSection } from '../../../ui'

// Images
import heroImage from '../../../assets/Images/hero/noticias.jpg'

// Style
import './noticiaspage.css'

const URL = 'https://omaabogados.com.co/oma/noticias'

export function NoticiasPage() {

    const {
        data,
        loading,
        fetchData
    } = useFetch(URL)

    
    useEffect(() => {
        fetchData()
    }, [])
    
    const heroImg = {
        backgroundImage: `url(${heroImage})`
    }

    const hasData = data.length > 0

    return (
        <>
            <section className="hero" style={heroImg} >
                <Header />
                <div className={'title-container'}>
                    <h3>{'Boletín Jurídico'}</h3>
                    <h1>{'Noticias de interés'}</h1>
                    <p>{
                        `
                        En nuestra sección de noticias del boletín jurídico, 
                        te mantenemos al día con las últimas novedades y acontecimientos relevantes en el mundo legal. Como firma de abogados líder, 
                        nos comprometemos a mantenerte informado sobre los cambios en la legislación, 
                        los casos judiciales destacados y las tendencias emergentes en el ámbito legal. `
                    }</p>
                </div>
            </section>
            <section className='documentos-de-interes'>
                <TitleSection
                    className='title-container'
                    subTitle='Boletín Jurídico'
                    title='Noticias de interés'
                />
                {loading ?
                    <section className="no-data">
                        <Loader />
                    </section>
                    :
                    hasData ?
                        <div className="documentos">
                            {
                                data.map(({
                                    id,
                                    titulo,
                                    descripcion,
                                    enlace
                                }) => {
                                    return (
                                        <div
                                            key={id}
                                            className="documento">
                                            <div className="document-info">
                                                <h1> {titulo} </h1>
                                                <p className='document-desc'>
                                                    {descripcion}
                                                </p>
                                            </div>
                                            <Link
                                                className='action-btn'
                                                to={enlace}
                                            >
                                                Leer más
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div> :
                        <section className="no-data">
                            <p>No hay noticas para mostrar</p>
                        </section>
                }

            </section>
            <Footer />
        </>
    )
}
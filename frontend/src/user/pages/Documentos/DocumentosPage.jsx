import { useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'

// Components
import { Footer, Header } from '../../../components'
import { Button, Loader, TitleSection } from '../../../ui'

//Images
import heroImage from '../../../assets/Images/hero/documentos-interes.jpg'

// Style
import './documentospage.css'

const URL = 'https://omaabogados.com.co/oma/file-manager'


export function DocumentosPage() {

    const {
        data,
        loading,
        fetchData
    } = useFetch(URL)

    const heroImg = {
        backgroundImage: `url(${heroImage})`
    }

    useEffect(() => {
        fetchData()
    }, [])

    const hasData = data.length > 0

    return (
        <>
            <section className="hero" style={heroImg} >
                <Header />
                <div className={'title-container'}>
                    <h3>{'Boletín Jurídico'}</h3>
                    <h1>{'Documentos de interés'}</h1>
                    <p>{
                        `En esta sección de nuestro boletín jurídico, 
                        ofrecemos una cuidadosa selección de 
                        documentos que pueden resultar de gran 
                        interés para ti. Como firma de abogados 
                        comprometida con la excelencia en nuestro campo, 
                        estos archivos PDF han sido elegidos para brindarte 
                        información valiosa y útil.`
                    }</p>
                </div>
            </section>
            <section className='documentos-de-interes'>
                <TitleSection
                    className='title-container'
                    subTitle='Boletín Jurídico'
                    title='Documentos de interés'
                />

                {
                    loading ?

                        <section className="no-data">
                            <Loader />
                        </section>
                        :

                        hasData ?
                            <div className="documentos">
                                {
                                    data.map(({
                                        id,
                                        archivo,
                                        descripcion }) => (
                                        <div
                                            key={id}
                                            className="documento">
                                            <div className="document-info">
                                                <h1>{archivo}</h1>
                                                <p className='document-desc'>
                                                    {descripcion}
                                                </p>
                                            </div>

                                            <div className="acciones">
                                                <Button
                                                    className='action-btn'
                                                    type='button'
                                                    name='Descargar'
                                                    onClick={() => window.open(`https://omaabogados.com.co/pdfs/${archivo}.pdf`, '_blank')}
                                                />
                                            </div>
                                        </div>

                                    ))
                                }
                            </div>
                            :
                            <section className="no-data">
                                <p>No hay documentos para mostrar</p>
                            </section>
                }
            </section>
            <Footer />
        </>
    )
}
{/* <div className="documento">
    <div className="document-info">
        <h1>Titulo del documento</h1>
        <p className='document-desc'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
        </p>
    </div>

    <div className="acciones">
        <p>Nombre del documento</p>
        <Button
            className='action-btn'
            type='button'
            name='Descargar'
        />
    </div>
</div>
<div className="documento">
    <div className="document-info">
        <h1>Titulo del documento</h1>
        <p className='document-desc'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
        </p>
    </div>

    <div className="acciones">
        <p>Nombre del documento</p>
        <Button
            className='action-btn'
            type='button'
            name='Descargar'
        />
    </div>
</div>
<div className="documento">
    <div className="document-info">
        <h1>Titulo del documento</h1>
        <p className='document-desc'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
        </p>
    </div>

    <div className="acciones">
        <p>Nombre del documento</p>
        <Button
            className='action-btn'
            type='button'
            name='Descargar'
        />
    </div>
</div>
<div className="documento">
    <div className="document-info">
        <h1>Titulo del documento</h1>
        <p className='document-desc'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
        </p>
    </div>

    <div className="acciones">
        <p>Nombre del documento</p>
        <Button
            className='action-btn'
            type='button'
            name='Descargar'
        />
    </div>
</div> */}
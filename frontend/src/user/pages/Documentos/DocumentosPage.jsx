// Components
import { Footer, Header } from '../../../components'
import { Button, TitleSection } from '../../../ui'

//Images
import heroImage from '../../../assets/images/hero/documentos-interes.jpg'

// Style
import './documentospage.css'

export function DocumentosPage() {

    const heroImg = {
        backgroundImage: `url(${heroImage})`
    }

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

                <div className="documentos">
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
                </div>
            </section>
            <Footer />
        </>
    )
}
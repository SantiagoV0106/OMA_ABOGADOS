// Components
import { Footer, Header } from '../../../components'
import { Button, TitleSection } from '../../../ui'

// Images
import heroImage from '../../../assets/images/hero/noticias.jpg'

// Style
import './noticiaspage.css'

export function NoticiasPage() {

    const heroImg = {
        backgroundImage: `url(${heroImage})`
    }

    return (
        <>
            <section className="hero" style={heroImg} >
                <Header />
                <div className={'title-container'}>
                    <h3>{'Boletín Jurídico'}</h3>
                    <h1>{'Noticias de interés'}</h1>
                    <p>{
                        `En esta sección de nuestro boletín jurídico, 
                        ofrecemos una cuidadosa selección de 
                        documentos que pueden resultar de gran 
                        interés para ti. Como firma de abogados 
                        comprometida con la excelencia en nuestro campo, 
                        estos archivos PDF han sido elegidos para brindarte 
                        información valiosa y útil.`
                    }</p>
                    <Button className={'primary-btn'} name={'Contáctanos'} />
                </div>
            </section>
            <section className='documentos-de-interes'>
                <TitleSection
                    className='title-container'
                    subTitle='Boletín Jurídico'
                    title='Noticias de interés'
                />

                <div className="documentos">
                    <div className="documento">
                        <div className="document-info">
                            <h1>Titulo de la noticias</h1>
                            <p className='document-desc'>
                                {` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop`}
                            </p>
                        </div>

                        <div className="acciones">
                            <Button
                                className='action-btn'
                                type='button'
                                name='Leer más'
                            />
                        </div>
                    </div>
                    <div className="documento">
                        <div className="document-info">
                            <h1>Titulo de la noticias</h1>
                            <p className='document-desc'>
                                Breve descripcion
                            </p>
                        </div>

                        <div className="acciones">
                            <Button
                                className='action-btn'
                                type='button'
                                name='Leer más'
                            />
                        </div>
                    </div>
                    <div className="documento">
                        <div className="document-info">
                            <h1>Titulo de la noticias</h1>
                            <p className='document-desc'>
                                Breve descripcion
                            </p>
                        </div>

                        <div className="acciones">
                            <Button
                                className='action-btn'
                                type='button'
                                name='Leer más'
                            />
                        </div>
                    </div>
                    <div className="documento">
                        <div className="document-info">
                            <h1>Titulo de la noticias</h1>
                            <p className='document-desc'>
                                Breve descripcion
                            </p>
                        </div>

                        <div className="acciones">
                            <Button
                                className='action-btn'
                                type='button'
                                name='Leer más'
                            />
                        </div>
                    </div>
                    <div className="documento">
                        <div className="document-info">
                            <h1>Titulo de la noticias</h1>
                            <p className='document-desc'>
                                {` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop`}
                            </p>
                        </div>

                        <div className="acciones">
                            <Button
                                className='action-btn'
                                type='button'
                                name='Leer más'
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
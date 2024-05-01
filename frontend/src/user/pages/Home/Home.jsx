//
import {
    Banner,
    Clients,
    ContactForm,
    Footer,
    Header,
    Office,
    Processes,
    Services
} from '../../../components'

// Data
import { heroImages } from '../../../const/heroImages'
import { Button, ContactTitle, TitleSection } from '../../../ui'
import { offices } from '../../../const/offices'

// Images
import statueImg from '../../../assets/images/page/justice-statue.jpg'
import trayectoriaImg from '../../../assets/images/page/trayectoria.jpg'
import mapImg from '../../../assets/images/page/map.png'

// Icons
import { FaAngleRight } from 'react-icons/fa6'

import './home.css'

export function Home() {

    const bgHeroStyle = {
        backgroundImage: `url(${heroImages[0].imageUrl})`
    }

    return (
        <>
            <section className="hero" style={bgHeroStyle}>
                <Header />
                <div className={'title-container'}>
                    <h3>{'Orjuela Morales'}</h3>
                    <h1>{'Comprometidos con la excelencia'}</h1>
                    <p>{
                        `Bienvenido a OMA Abogados, 
                        donde nos destacamos en derecho financiero, seguros, 
                        responsabilidad fiscal, jurisdicción 
                        contencioso-administrativa, 
                        derecho penal y procesos de insolvencia.`
                    }</p>
                    <Button className={'primary-btn'} name={'Contáctanos'} />
                </div>
            </section>
            <Banner />
            <section className='about-us section'>
                <TitleSection
                    className='title-container'
                    subTitle='Sobre Nosotros'
                    title='Bienvenidos a OMA Abogados'
                    desc={`Somos una firma dedicada a la defensa
                    judicial de entidades financieras y
                    aseguradoras dentro del marco del litigio
                    civil, laboral, comercial, administrativo y punitivo; OMA Abogados S.A.S. también
                    extiende sus servicios legales a personas
                    naturales y jurídicas del orden privado y
                    público.`}
                    btnClassname='secondary-btn'
                    btnIcon={<FaAngleRight className='web-icon' />}
                    btnName='Conoce más'
                />
                <img
                    className='image-section'
                    src={statueImg}
                    alt="Justice-Statue-Image" />
            </section>
            <section className='our-services section'>
                <TitleSection
                    className='c-header-container'
                    subTitle='Servicios'
                    title='Nuestras  Áreas'
                />
                <Services />
            </section>
            <section className='relevant-processes'>
                <TitleSection
                    className='c-header-container'
                    subTitle='Estadísticas'
                    title='Procesos de interés'
                />
                <Processes />
            </section>
            <section className='clients-home section'>
                <TitleSection
                    className='title-container'
                    subTitle='Nuestros clientes'
                    title='Clientes'
                    desc={`Somos una firma dedicada a la defensa
                    judicial de entidades financieras y
                    aseguradoras dentro del marco del litigio
                    civil, laboral, comercial, administrativo y punitivo; OMA Abogados S.A.S. también
                    extiende sus servicios legales a personas
                    naturales y jurídicas del orden privado y
                     público.`}
                    btnClassname='secondary-btn'
                    btnIcon={<FaAngleRight className='web-icon' />}
                    btnName='Conoce más'
                />
                <Clients />
            </section>
            <section className='trayectoria section'>
                <TitleSection
                    className='title-container'
                    subTitle='Sobre Nosotros'
                    title='Trayectoria'
                    desc={`Alrededor de 12 años de experiencia profesional 
                    en la Rama Judicial, Superintendencia 
                    Financiera de Colombia - Delegatura para Funciones 
                    Jurisdiccionales- y defensa en litigios corporativos 
                    para entidades financieras y compañías de seguros. Para cobertura de sus servicios, 
                    la firma cuenta con un equipo de abogados de amplia experiencia profesional y académica.`}
                    btnClassname='secondary-btn'
                    btnIcon={<FaAngleRight className='web-icon' />}
                    btnName='Conoce más'
                />
                <img
                    className='image-section'
                    src={trayectoriaImg}
                    alt="Trayectoria-Image" />
            </section>

            <section className='areas'>
                <TitleSection
                    className='c-header-container'
                    subTitle='Cobertura'
                    title='Nuestra Cobertura'
                    desc={`Nuestra firma legal se enorgullece de ofrecer servicios de 
                    excelencia y calidad en una amplia gama de áreas jurídicas. 
                    Atendemos con dedicación y profesionalismo en los departamentos 
                    del Valle de la Cuaca, Cauca, Risaralda, Nariño, Quindío, Cundinamarca y Caldas. 
                    Contamos con oficinas en la ciudad de Cali y Bogotá.`}
                />
                <div className="cobertura-container">
                    <img src={mapImg} alt="Map" />
                    <div className="office-container">
                        <Office
                            name={offices[0].name}
                            direction={offices[0].direction}
                            directionUrl={offices[0].directionUrl}
                        />
                        <Office
                            name={offices[1].name}
                            direction={offices[1].direction}
                            directionUrl={offices[1].directionUrl}
                        />
                    </div>
                </div>
            </section>
            <section className='contact-us section'>
                <ContactForm />
                <ContactTitle />
            </section>
            <Footer />
        </>
    )
}
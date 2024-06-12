import { useScroll } from '../../hooks/useScroll'
import { useNavigate } from 'react-router-dom'
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
import statueImg from '../../../assets/Images/page/justice-statue.jpg'
import trayectoriaImg from '../../../assets/Images/page/trayectoria.jpg'
import mapImg from '../../../assets/Images/page/map.png'

// Icons
import { FaAngleRight } from 'react-icons/fa6'

import './home.css'

export function Home() {

    const bgHeroStyle = {
        backgroundImage: `url(${heroImages[0].imageUrl})`
    }

   const {scrollTo} = useScroll()

   const navigate = useNavigate()

   const handleNavigate = () => {
    navigate('/sobre-nosotros')
   }

    return (
        <>
            <section className="hero" style={bgHeroStyle}>
                <Header />
                <div className={'title-container'}>
                    <h3>{'Firma de abogados'}</h3>
                    <h1>{'Comprometidos con la excelencia'}</h1>
                    <p>{
                        `Bienvenido a OMA ABOGADOS S.A.S. 
                        Somos una firma dedicada a la defensa judicial de entidades financieras 
                        y aseguradoras dentro del marco del litigio civil, laboral, 
                        comercial, administrativo y derecho de consumo;
                        también extendemos nuestros servicios legales a personas naturales
                        y jurídicas del orden público y privado.`
                    }</p>
                    <Button
                        type='button'
                        className={'primary-btn'}
                        name={'Contáctanos'} 
                        onClick={scrollTo}
                        />
                </div>
            </section>
            <Banner />
            <section className='home-about-us section'>
                <TitleSection
                    className='title-container'
                    subTitle='Sobre Nosotros'
                    title='Bienvenidos a OMA ABOGADOS S.A.S'
                    desc={`En OMA ABOGADOS S.A.S.
                     nos especializamos en la defensa 
                     judicial de entidades financieras y 
                     aseguradoras en diversas áreas legales. 
                     También ofrecemos servicios a personas 
                     naturales y jurídicas, tanto del sector
                      público como privado. 
                      Con un equipo altamente capacitado, 
                      proporcionamos asesoramiento integral 
                      y soluciones efectivas para proteger
                       los intereses de nuestros clientes.`}
                    btnOnClick={handleNavigate}
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
                    desc={`OMA ABOGADOS S.A.S. 
                    se enorgullece de haber prestado sus servicios 
                    legales a una amplia gama de clientes, 
                    entre los cuales se encuentran destacadas instituciones 
                    financieras como Banco Popular, Grupo Bancolombia, 
                    Fiduciaria Bancolombia y Renting Colombia. 
                    Nuestra firma se compromete a brindar asesoramiento 
                    jurídico especializado y soluciones efectivas para proteger 
                    los intereses de nuestros clientes en cada caso.`}
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
                    btnOnClick={handleNavigate}
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
                    <div className="offices-container">
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
            <section
                id='contact-us'
                className='contact-us section'>
                <ContactForm />
                <ContactTitle />
            </section>
            <Footer />
        </>
    )
}
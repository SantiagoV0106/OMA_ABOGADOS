//Components
import { Carousel, ContactForm, Footer, Header } from '../../../components'
import { Button, ContactTitle, TitleSection } from '../../../ui'

// Data
import { heroImages } from '../../../const/heroImages'

// Images
import founderImg from '../../../assets/images/page/founder.png'

//Icons
import { CiMedal } from "react-icons/ci";
import { GoShieldCheck } from "react-icons/go";
import { BsPersonCheck } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";


import './aboutus.css'

export function AboutUsPage() {
    const bgHeroStyle = {
        backgroundImage: `url(${heroImages[1].imageUrl})`
    }
    return (
        <>
            <section className="hero" style={bgHeroStyle}>
                <Header />
                <div className={'title-container'}>
                    <h3>{'Sobre Nosotros'}</h3>
                    <h1>{'OMA ABOGADOS'}</h1>
                    <Button className={'primary-btn about-us-btn'} name={'Contáctanos'} />
                </div>
            </section>

            <section className='about-us section'>
                <TitleSection
                    className='title-container'
                    subTitle='Sobre Nosotros'
                    title='Lo más importante'
                />
                <div className="mision-vision">
                    <div className="oma-value">
                        <h1>Misión</h1>
                        <p>Asesorar y representar tanto judicial como extrajudicialmente a nuestros
                            clientes con altos estándares de calidad y compromiso en las diversas
                            controversias legales que impone diariamente el ordenamiento jurídico colombiano,
                            basados en una rigurosa preparación académica y experiencia profesional.
                        </p>
                    </div>
                    <div className="oma-value">
                        <h1>Visión</h1>
                        <p>Para el año 2026, OMA Abogados S.A.S se consolidará en las zonas
                            que integra Valle del Cauca, Cauca, Eje cafetero, Bogotá D.C y
                            Cundinamarca; liderando, con ahínco los intereses jurídicos de nuestros
                            clientes a través de la excelencia en la prestación de los servicios
                            jurídicos.
                        </p>
                    </div>
                </div>
            </section>

            <section className="valores">
                <TitleSection
                    className='c-header-container'
                    subTitle='Sobre Nosotros'
                    title='Valores'
                />
                <div className="valores-container">
                    <div className="value">
                        <CiMedal className='web-icon' />
                        <p>Excelencia</p>
                    </div>
                    <div className="value">
                        <GoShieldCheck className='web-icon' />
                        <p>Calidad</p>
                    </div>
                    <div className="value">
                        <BsPersonCheck className='web-icon' />
                        <p>Compromiso</p>
                    </div>
                    <div className="value">
                        <FaRegHeart className='web-icon' />
                        <p>Responsabilidad <br /> Social</p>
                    </div>
                </div>
            </section>
            <section className="founder section">
                <img
                    className='image-section'
                    src={founderImg}
                    alt="Socio Fundador" />
                <TitleSection
                    className='title-container'
                    subTitle='Socio Fundador'
                    title='Luis Antonio Orjuela Morales'
                    desc={`Abogado titulado, egresado de la Universidad Militar Nueva Granada, 
                    Magister en Derecho Procesal de la Universidad Externado de Colombia, 
                    especialista en Derecho de Seguros de la Universidad del Rosario, autor del libro
                     “La Competencia Jurisdiccional entre la Justicia Penal Militar y la Justicia Ordinaria” (año 2018), 
                     Ed. Ibañez. Con diferentes cursos en derecho y diplomaturas en Insolvencia Persona Natural 
                     No Comerciante e Insolvencia Mercantil ley 1116 del 2006.`}
                />
            </section>
            <section className="personal-resume section">
                <TitleSection
                    className='c-header-container'
                    subTitle='Sobre Nosotros'
                    title='Trayectoria profesional'
                    desc={` El Dr. Luis Antonio Orjuela Morales 
                    a lo largo de su vida profesional, 
                    se ha desempeñado en los siguientes campos`}
                />
                <Carousel />
            </section>
            <section className='contact-us section'>
                <ContactForm />
                <ContactTitle />
            </section>
            <Footer />

        </>
    )
}
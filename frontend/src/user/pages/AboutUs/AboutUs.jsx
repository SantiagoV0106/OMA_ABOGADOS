
import { ContactForm, Footer, Header } from '../../../components'
import { heroImages } from '../../../const/heroImages'
import { sectionInfo } from '../../../const/sectionInfo'
import { Button, ContactTitle, TitleSection } from '../../../ui'

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
            <section className="hero-container" style={bgHeroStyle}>
                <Header />
                <div className={'title-container about-us'}>
                    <h3>{'Sobre Nosotros'}</h3>
                    <h1>{'OMA ABOGADOS'}</h1>
                    <Button className={'primary-btn about-us-btn'} name={'Contáctanos'} />
                </div>
            </section>

            <section className='about-us-section-container'>
                <TitleSection
                    className={sectionInfo[8].className}
                    subTitle={sectionInfo[8].subTitle}
                    title={sectionInfo[8].title}
                />
                <div className="mision-vision-container">
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

            <section className="valores-section">
                <TitleSection
                    className={sectionInfo[9].className}
                    subTitle={sectionInfo[9].subTitle}
                    title={sectionInfo[9].title}
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
            <section className="founder-section">
                <img src="" alt="Socio Fundador" />
                <TitleSection
                    className={sectionInfo[10].className}
                    subTitle={sectionInfo[10].subTitle}
                    title={sectionInfo[10].title}
                    desc={sectionInfo[10].desc}
                />
            </section>
            <section className="personal-resume">
                <TitleSection
                    className={sectionInfo[11].className}
                    subTitle={sectionInfo[11].subTitle}
                    title={sectionInfo[11].title}
                    desc={sectionInfo[11].desc}
                />
               
            </section>
            <section className='contact-us-section'>
                <ContactForm />
                <ContactTitle />
            </section>
            <Footer />

        </>
    )
}
//

import {
    Areas,
    Banner,
    Clients,
    ContactForm,
    Footer,
    Hero,
    Office,
    Processes
  } from '../../../components'
  
  // Data
  import { heroImages } from '../../../const/heroImages'
  import { sectionInfo } from '../../../const/sectionInfo'
  import { TitleSection } from '../../../ui'
  import { offices } from '../../../const/offices'
  
  // Icons
  import { FaAngleRight } from 'react-icons/fa6'

import './home.css'

export function Home() {
    return (
        <>
            <Hero
                imageUrl={heroImages[0].imageUrl}
            />
            <Banner />
            <section className='about-us-home-section-container'>
                <TitleSection
                    className={sectionInfo[1].className}
                    subTitle={sectionInfo[1].subTitle}
                    title={sectionInfo[1].title}
                    desc={sectionInfo[1].desc}
                    btnClassname='secondary-btn'
                    btnIcon={<FaAngleRight className='web-icon' />}
                    btnName='Conoce más'
                />
                <img
                    className='image-section'
                    src="./src/assets/Images/page/justice-statue.jpg"
                    alt="Justice-Statue-Image" />
            </section>
            <section className='our-services-home-section-container'>
                <TitleSection
                    className={sectionInfo[2].className}
                    subTitle={sectionInfo[2].subTitle}
                    title={sectionInfo[2].title}
                />
                <Areas />
            </section>
            <section className='relevant-processes-home-section-container'>
                <TitleSection
                    className={sectionInfo[3].className}
                    subTitle={sectionInfo[3].subTitle}
                    title={sectionInfo[3].title}
                />
                <Processes />
            </section>
            <section className='clients-home-section-container'>
                <TitleSection
                    className={sectionInfo[4].className}
                    subTitle={sectionInfo[4].subTitle}
                    title={sectionInfo[4].title}
                    desc={sectionInfo[4].desc}
                    btnClassname='secondary-btn'
                    btnIcon={<FaAngleRight className='web-icon' />}
                    btnName='Conoce más'
                />
                <Clients />
            </section>
            <section className='areas-home-section-container'>
                <TitleSection
                    className={sectionInfo[5].className}
                    subTitle={sectionInfo[5].subTitle}
                    title={sectionInfo[5].title}
                    desc={sectionInfo[5].desc}
                />
                <div className="cobertura-container">
                    <img src="../src/assets/Images/page/map.png" alt="Map" />
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
            <section className='contact-us-home-section'>
                <ContactForm />
                <TitleSection
                    className={sectionInfo[6].className}
                    subTitle={sectionInfo[6].subTitle}
                    title={sectionInfo[6].title}
                    desc={sectionInfo[6].desc}
                />
            </section>
            <Footer />
        </>
    )
}
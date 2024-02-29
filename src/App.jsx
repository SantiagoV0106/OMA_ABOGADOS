import { Areas, Banner, Clients, Hero, Processes } from './components'
import { heroImages } from './const/heroImages'
import { sectionInfo } from './const/sectionInfo'
import { TitleSection } from './ui'
import { FaAngleRight } from 'react-icons/fa6'
import './App.css'

function App() {

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
       <Processes/>
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
        <Clients/>
      </section>
    </>

  )
}

export default App

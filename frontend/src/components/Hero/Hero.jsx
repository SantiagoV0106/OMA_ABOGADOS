/* eslint-disable react/prop-types */
import { TitleSection } from '../../ui'
import { Header } from '../Header/Header'

import { sectionInfo } from '../../const/sectionInfo'

import './hero.css'

export function Hero({ imageUrl }) {


    const styles = {
        backgroundImage: `url(${imageUrl})`
    }

    return (
        <div className="hero-container" style={styles}>
            <Header />
            <TitleSection
                className={sectionInfo[0].className}
                subTitle={sectionInfo[0].subTitle}
                title={sectionInfo[0].title}
                desc={sectionInfo[0].desc}
                btnClassname='primary-btn'
                btnName='Contáctanos' />
        </div>
    )
}
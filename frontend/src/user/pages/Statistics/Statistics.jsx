//Components
import { Footer, Header, Stat } from '../../../components'
import { TitleSection } from '../../../ui'

// Data
import { heroImages } from '../../../const/heroImages'
import { sectionInfo } from '../../../const/sectionInfo'

//Style
import './statistics.css'

export function StatisticsPage() {

    const bgHeroStyle = {
        backgroundImage: `url(${heroImages[2].imageUrl})`
    }

    return (
        <>
            <section className="hero" style={bgHeroStyle}>
                <Header />
                <div className={'title-container'}>
                    <h3>{'Estadísticas'}</h3>
                    <h1>{'Estadísticas de la firma'}</h1>
                </div>
            </section>
            <section className="stat-page section">
                <TitleSection
                    className={sectionInfo[12].className}
                    subTitle={sectionInfo[12].subTitle}
                    title={sectionInfo[12].title}
                />
                <Stat
                tasa='95%' />
            </section>
            <section className="stat-page section">
                <TitleSection
                    className={sectionInfo[13].className}
                    subTitle={sectionInfo[13].subTitle}
                    title={sectionInfo[13].title}
                />
                <Stat
                tasa='94%' />
            </section>
            <section className="stat-page section">
                <TitleSection
                    className={sectionInfo[14].className}
                    subTitle={sectionInfo[14].subTitle}
                    title={sectionInfo[14].title}
                />
                <Stat
                tasa='94%' />
            </section>
            <section className="stat-page section">
                <TitleSection
                    className={sectionInfo[15].className}
                    subTitle={sectionInfo[15].subTitle}
                    title={sectionInfo[15].title}
                />
                <Stat
                tasa='93%' />
            </section>
            <Footer />
        </>
    )
}
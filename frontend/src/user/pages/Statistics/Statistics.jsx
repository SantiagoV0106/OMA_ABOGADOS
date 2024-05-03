//Components
import { Footer, Header, Stat } from '../../../components'
import { TitleSection } from '../../../ui'

// Data
import { heroImages } from '../../../const/heroImages'
import { sectionInfo } from '../../../const/sectionInfo'
import { statssoma } from '../../../const/statspage'

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

            {
                statssoma.map(({
                    id,
                    titulo,
                    tasaGlobal,
                    tasasAsociadas
                }) => {
                    return (
                        <section
                            key={id}
                            className="stat-page section">
                            <TitleSection
                                className='c-header-container'
                                subTitle='Estadísticas'
                                title={titulo}
                            />
                            <Stat
                                tasa={tasaGlobal}
                                tasasAsociadas={tasasAsociadas}
                            />
                        </section>
                    )
                })
            }

            <Footer />
        </>
    )
}
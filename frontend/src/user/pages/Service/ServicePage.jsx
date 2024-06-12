import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

// Components
import { Footer, Header } from '../../../components';
import { Loader, TitleSection } from '../../../ui';

// Data
import { services } from '../../../const/services'

// Images
import service1Img from '../../../assets/Images/services/servicios-1.jpg'
import service2Img from '../../../assets/Images/services/servicios-2.jpg'

// Style
import './servicepage.css'

export function ServicePage() {

    const [service, setService] = useState([])
    const [isLoading, setLoading] = useState(true)

    const location = useLocation()


    useEffect(() => {
        const serviceLink = location.pathname.split('/').pop()

        const foundService = services.find(item => item.link === serviceLink)

        setService(foundService)
        setLoading(false)

    }, [location])


    const bgHeroStyle = {
        backgroundImage: `url(${service.heroUrl})`
    }

    return (
        <>
            <section className="hero servicePage" style={bgHeroStyle}>
                <Header />
                <div className={'title-container'}>
                    <h3>Servicios</h3>
                    <h1>{service.service}</h1>
                </div>
            </section>
            {
                isLoading ?
                    <section className="no-data">
                        <Loader />
                    </section> :
                    <>
                        <section className='service-info section'>
                            <TitleSection
                                className='title-container'
                                subTitle={service.service}
                                title={'¿Qué hacemos?'}
                                desc={service.desc}
                            />
                            <img src={service1Img} alt={service.service} />
                        </section>
                        <section className='service-info section'>
                            <img src={service2Img} alt={service.service} />

                            <div className={'title-container'}>
                                <h3>{service.service}</h3>
                                <h1>Normativa</h1>
                                <ul>
                                    {
                                        service.normativa.map(({ id, ley }) => {
                                            return (
                                                <li key={id}>{ley}</li>

                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </section>
                    </>

            }
            <Footer />
        </>
    )
}
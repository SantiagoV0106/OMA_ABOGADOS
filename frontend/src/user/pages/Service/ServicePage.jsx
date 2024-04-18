import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

// Components
import { Footer, Header } from '../../../components';
import { Button, TitleSection } from '../../../ui';

// Data
import { services } from '../../../const/services'

// Style
import './servicepage.css'

export function ServicePage() {

    const [service, setService] = useState([])
    const [isLoading, setLoading] = useState(true)

    const location = useLocation()
    console.log(location);

    console.log(services);

    useEffect(() => {
        const serviceLink = location.pathname.split('/').pop()

        console.log(serviceLink);

        const foundService = services.find(item => item.link === serviceLink)

        setService(foundService)
        setLoading(false)

    }, [location])


    if (isLoading) {
        return (
            <h1> Cargando </h1>
        )
    }

    const bgHeroStyle = {
        backgroundImage: `url(${service.heroUrl})`
    }

    console.log(service.normativa);

    return (
        <>
            <section className="hero-container" style={bgHeroStyle}>
                <Header />
                <div className={'title-container service-hero'}>
                    <h3>Servicios</h3>
                    <h1>{service.service}</h1>
                    <Button className={'primary-btn about-us-btn'} name={'Contáctanos'} />
                </div>
            </section>
            <section className='service-info-container'>
                <TitleSection
                    className={'title-container'}
                    subTitle={service.service}
                    title={'¿Qué hacemos?'}
                    desc={service.desc}
                />
                <img src={service.image1} alt={service.service} />
            </section>
            <section className='service-info-container'>
                <img src={service.image2} alt={service.service} />

                <div className={'title-container'}>
                    <h3>{service.service}</h3>
                    <h1>Normativa</h1>
                    <ul>
                       {
                        service.normativa.map(({id,ley}) => {
                            return(
                                <li key={id}>{ley}</li>

                            )
                        })
                       }
                    </ul>
                </div>
            </section>
            <Footer/>
        </>
    )
}
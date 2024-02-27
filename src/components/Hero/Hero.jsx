import { PrimaryBtn } from '../../ui'
import { Header } from '../Header/Header'
import './hero.css'

export function Hero({ imageUrl, subTitle, title, desc }) {

    const styles = {
        backgroundImage: `url(${imageUrl})`
    }

    return (
        <div className="hero-container" style={styles}>
            <Header />
            <div className="hero-info-container">
                <h3>{subTitle}</h3>
                <h1>{title}</h1>
                <p>{desc}</p>
                <PrimaryBtn name='Contactanos' />
            </div>
        </div>
    )
}
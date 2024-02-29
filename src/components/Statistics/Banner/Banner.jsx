import './banner.css'
import { bannerStatistics } from '../../../const/bannerStatistics'
export function Banner() {

    return (
        <div className="banner-container">
            {
                bannerStatistics.map(({ title, percentage, desc }, i) => {
                    return (
                        <div className={`statistic ${i < 2 ? 'deco' : ''}`} key={title}>
                            <h3> {percentage} </h3>
                            <p> {desc} </p>
                        
                        </div>
                    )
                })
            }
        </div>

    )
}
// 
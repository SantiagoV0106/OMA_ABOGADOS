import './banner.css'
import { useFetch } from '../../../user/hooks/useFetch'
import { useEffect } from 'react'
import { Loader } from '../../../ui'
// import { bannerStatistics } from '../../../const/bannerStatistics'


const URL = 'https://omaabogados.com.co/oma/stats'

export function Banner() {

    const {
        data,
        loading,
        error,
        fetchData
    } = useFetch(URL)

    useEffect(() => {
        fetchData()
    }, [])

    const hasData = data.length > 0

    return (
        <div className={loading ? 'banner-loading section' : "banner section"}>
            {
                loading ?
                    <Loader /> :
                    error ?
                        <p>No se pudo cargar las estadísticas</p> :
                        hasData ?
                            data.map(({ id, porcentaje, titulo }, i) => {
                                return (
                                    <div className={`statistic ${i === 3 ? '' : 'deco'}`} key={id}>
                                        <h3> {porcentaje}% </h3>
                                        <p> {titulo} </p>

                                    </div>
                                )
                            })
                            :
                            null
                // bannerStatistics.map(({ title, percentage, desc }, i) => {
                //     return (
                //         <div className={`statistic ${i === 3 ? '' : 'deco'}`} key={title}>
                //             <h3> {percentage} </h3>
                //             <p> {desc} </p>

                //         </div>
                //     )
                // })
            }
        </div>

    )
}
// 
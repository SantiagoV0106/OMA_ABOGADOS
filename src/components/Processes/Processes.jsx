import { processes } from '../../const/processes'


import './processes.css'

export function Processes() {
    return (
        <div className="processes-container">
            {
                processes.map(({
                    id,
                    importante,
                    tema,
                    desc,
                    radicado,
                    juzgado }) => {

                    return (

                        importante ?
                            <div
                                key={id}
                                className="process">
                                <div className="process-info">
                                    <h1>{tema}</h1>
                                    <p>{desc}</p>
                                </div>
                                <div className="process-extra-info">
                                    <p >Radicado <span>{radicado}</span></p>
                                    <p >Juzgado <span>{juzgado}</span></p>
                                </div>
                            </div> :
                            null
                    )


                })
            }
        </div>
    )
}
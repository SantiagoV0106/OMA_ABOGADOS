// Hooks
import { useState } from 'react'

// Styles
import './carousel.css'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'

export function Carousel() {

    const [currentBlock, setCurrentBlock] = useState(0)

    const totalBlocks = 3

    const prevBlock = () => {
        setCurrentBlock((prevBlock) => (prevBlock === 0 ? totalBlocks - 1 : prevBlock - 1));
    };

    const nextBlock = () => {
        setCurrentBlock((prevBlock) => (prevBlock === totalBlocks - 1 ? 0 : prevBlock + 1));
    };


    return (
        <div className="carousel-section">
            <FaAngleLeft onClick={prevBlock} className='web-icon' />
            <div className="carousel-container">
                {/* Mostrar solo el bloque actual */}
                <div className={`block ${currentBlock === 0 ? 'active' : ''}`}>
                    <div className='carousel-item'>
                        <div className="carousel-info">
                            <p>Juzgado Penal del Circuito de La Mesa (Cundinamarca).</p>
                            <p><span className='cargo' >Cargo ocupado:</span> Oficial Mayor (Sustanciador). </p>
                            <p className='date'>Abril 2010 - Marzo 2011</p>
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <div className="carousel-info">
                            <p>Juzgado Promiscuo Municipal de Tausa (Cundinamarca).</p>
                            <p><span className='cargo'>Cargo ocupado:</span> Escribiente con funciones de sustanciación. </p>
                            <p className='date' >Abril 2011 - Enero 2012</p>
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <div className="carousel-info">
                            <p>Juzgado Promiscuo Municipal de Silvania (Cundinamarca).</p>
                            <p><span className='cargo'>Cargo ocupado:</span> Secretario con funciones de sustanciación. </p>
                            <p className='date'>Enero 2012 - Diciembre 2012</p>
                        </div>
                    </div>
                </div>
                <div className={`block ${currentBlock === 1 ? 'active' : ''}`}>
                    <div className='carousel-item'>
                        <div className="carousel-info">
                            <p>Juzgado Promiscuo de Familia del Circuito de La Mesa(Cundinamarca).</p>
                            <p><span className='cargo' >Cargo ocupado:</span> Secretario con funciones de sustanciación.</p>
                            <p className='date'>Enero 2013 - Abril 2013</p>
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <div className="carousel-info">
                            <p>Ejército Nacional de Colombia, Especialidad Justicia. <br />
                                Grado (TE): Oficial del cuerpo Administrativo.</p>
                            <p><span className='cargo' >Cargo ocupado:</span> Asesor Jurídico | Coordinador Jurídico Oficina Control Interno Disciplinario | Brigada Móvil No. 4 del Ejército Nacional.</p>
                            <p className='date'>Abril 2013 - Enero 2015</p>
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <div className="carousel-info">
                            <p> Corporación Unificada Nacional de Educación Superior (CUN). </p>
                            <p><span className='cargo' >Cargo ocupado:</span> Docente universitario.</p>
                            <p><span className='cargo' >Materias dictadas:</span> Derecho Constitucional, Derecho laboral,  Derecho comercial, Legislación Tributaria, Ética y Cultura Política.</p>
                            <p className='date'>Enero 2015 - Segundo semestre 2017</p>
                        </div>
                    </div>
                </div>
                <div className={`block ${currentBlock === 2 ? 'active' : ''}`}>
                    <div className='carousel-item'>
                        <div className="carousel-info">
                            <p> Superintendencia Financiera de Colombia, Delegatura para Funciones  Jurisdiccionales.</p>
                            <p><span className='cargo' >Cargo ocupado:</span> Profesional Universitario | Sustanciador.</p>
                            <p className='date'> Febrero 2015 - Julio 2018</p>
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <div className="carousel-info">
                            <p> Abogado litigante y consultor:
                                «Director de la firma legal OMA ABOGADOS S.A.S.»</p>
                            <p><span className='cargo' >Cargo ocupado:</span> Litigante y Consultor en áreas del Derecho civil, administrativo, penal, disciplinario, laboral, comercial, financiero y de seguros.
                                (Jurisdicción: Bogotá, Cundinamarca, Santiago de Cali, Valle del Cauca, Departamento del Cauca y Eje cafetero).
                                Proveedor de servicios legales para el Grupo Bancolombia S.A. desde agosto del año 2018 y Banco Popular S.A. desde Diciembre del 2022.</p>
                            <p className='date'> Julio 2018 - Actualidad </p>
                        </div>
                    </div>
                </div>
            </div>
            <FaAngleRight onClick={nextBlock} className='web-icon' />
        </div>
    )
}
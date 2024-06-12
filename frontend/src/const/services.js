import derechoFinImg from '../assets/Images/hero/derecho-financiero-seguros.jpg'
import derechoFamImg from '../assets/Images/hero/derecho-familia.jpg'
import derechoLabImg from '../assets/Images/hero/derecho-laboral.jpg'
import derechoCivComImg from '../assets/Images/hero/derecho-civil-comercial.jpg'
import derechoPenalImg from '../assets/Images/hero/derecho-penal.jpg'
import derechoAdmin from '../assets/Images/hero/derecho-admin.jpg'
import respFiscImg from '../assets/Images/hero/res-fical-admin.jpg'
import prosInsImg from '../assets/Images/hero/pros-insolvencia.jpg'

export const services = [
    {
        id: 1,
        link: 'derecho-financiero-y-seguros',
        service: 'Derecho financiero y seguros',
        heroUrl: derechoFinImg,
        desc: `Se ofrece servicio de asesoría legal y representación judicial
         para entidades financieras, sociedades fiduciarias y 
         compañías de seguros ante la Superintendencia Financiera y 
         Jurisdicción ordinaria.`,
        normativa: [
            {
                id: crypto.randomUUID(),
                ley: 'Ley 45 de 1990.'
            },
            {
                id: crypto.randomUUID(),
                ley: 'Decreto 663 de 1993. (EOSF).'
            },
            {
                id: crypto.randomUUID(),
                ley: 'Ley 1328 de 2009.'
            },
            {
                id: crypto.randomUUID(),
                ley: 'Decreto 2555 de 2010.'
            },
            {
                id: crypto.randomUUID(),
                ley: 'Ley 1480 de 2011: “Estatuto de protección al Consumidor”.'
            },
            {
                id: crypto.randomUUID(),
                ley: 'Circular Básica Jurídica 029 de 2014 y otras.'
            },
        ]
    },
    {
        id: 2,
        link: 'derecho-de-familia',
        service: 'Derecho de familia',
        heroUrl: derechoFamImg,
        desc: `Se ofrece asesoría en los siguientes ámbitos del Derecho de familia.

        •	Sucesiones testada e intestada.
        
        •	Trámites notariales:  
        
        -	Declaración marital de hecho.
        -	Matrimonios. 
        -	Liquidación y disolución de sociedades conyugales y patrimoniales
        -	Capitulaciones y Adopciones.`,

        normativa: [
            {
                id: crypto.randomUUID(),
                ley: 'Código civil: Ley 84 de 1873.'
            },
            {
                id: crypto.randomUUID(),
                ley: 'Ley 1098 de 2006: Código de la Infancia y la Adolescencia'
            },
            {
                id: crypto.randomUUID(),
                ley: 'Ley 54 de 1990 sobre unión marital de hecho. Mod. Ley 979 de 2005'
            }
        ]
    },
    {
        id: 3,
        link: 'derecho-laboral',
        service: 'Derecho laboral',
        heroUrl: derechoLabImg,
        desc: ` Se brinda acompañamiento y servicios de consultoría jurídica por controversias surgidas del ejercicio de las relaciones laborales, tales como: 

    - Traslado de Régimen Pensional.
        
        - Asesoría y acompañamiento jurídico en materia de Pensión de vejez, sobreviviente o por muerte familiar.
        
         - Brindamos servicios de Consultoría y acompañamiento jurídico, por medio de los cuales se atienden litigios, interrogantes o problemáticas de pequeñas, medianas y grandes empresas. 
        `,
        normativa: [
            {
                id: crypto.randomUUID(),
                ley: 'Código sustantivo del trabajo.'
            },
            {
                id: crypto.randomUUID(),
                ley: 'Código procesal del trabajo y de la seguridad social.'
            },
            {
                id: crypto.randomUUID(),
                ley: 'Ley 100 de 1993.'
            }
        ]
    },
    {
        id: 4,
        link: 'derecho-civil-y-comercial',
        service: 'Derecho civil y comercial',
        heroUrl: derechoCivComImg,
        desc: `Se ofrece asesoría y defensa técnica en procesos civiles:


        -	Estructuración de contratos con el fin de minimizar riesgos en los negocios jurídicos. 
        -	Representación o defensa técnica en controversias de índole contractual.
        -	Suscripción de convenios y contratos.
        -	Pertenencias.
        -	Expropiación.
        -	Divisorios.
        -	Fideicomiso civil.
        -	Resolución de compraventa.
        -	Reivindicatorios de dominio.
        -	Deslinde y amojonamiento.
        -	Servidumbres.`,
        normativa: [
            {
                id: crypto.randomUUID(),
                ley: 'Ley 84 de 1873 (Código civil).'
            },
            {
                id: crypto.randomUUID(),
                ley: 'Ley 1564 de 2012 (Código general del proceso).'
            },
            {
                id: crypto.randomUUID(),
                ley: 'Código de Comercio.'
            }
        ]
    },
    {
        id: 5,
        link: 'derecho-penal',
        service: 'Derecho penal',
        heroUrl: derechoPenalImg,
        desc: `Defensa técnica y consultoría en derecho penal y derecho penal militar, con énfasis en sistema inquisitivo y sistema acusatorio 
        en el nuevo régimen
        de las FF.MM.`,
        normativa: [
            {
                id: crypto.randomUUID(),
                ley: 'Código de Procedimiento Penal.(L. 600/00).'
            },
            {
                id: crypto.randomUUID(),
                ley: 'Código de Procedimiento Penal. (L. 906/04).'
            },
            {
                id: crypto.randomUUID(),
                ley: 'Código Penal Militar. (L.1407/10).'
            }
        ]
    },
    {
        id: 6,
        link: 'derecho-administrativo',
        service: 'Derecho administrativo',
        heroUrl: derechoAdmin,
        desc: `Se ofrece servicios de asesoría y defensa técnica en los siguientes ámbitos:

        -	Medios de control de Nulidad, Nulidad y Restablecimiento del derecho.
        -	Reparación directa:
        -	Controversias contractuales. 
        -	Acciones populares y Acciones de grupo.
        `,
        normativa: [
            {
                id: crypto.randomUUID(),
                ley: 'Ley 1437 de 2011 (Código Contencioso Administrativo).'
            },
            {
                id: crypto.randomUUID(),
                ley: 'Ley 1564 DE 2012 (Código general del proceso).'
            }
        ]
    },
    {
        id: 7,
        link: 'responsabilidad-fiscal-y-disciplinarios',
        service: 'Responsabilidad fiscal y disciplinarios',
        heroUrl: respFiscImg,
        desc: `Se ofrecen servicios de asesoría y defensa técnica en procesos disciplinarios y responsabilidad fiscal adelantados ante:

        - Procuraduría General de la Nación y oficinas de control disciplinario interno.
        - Ejercito Nacional de Colombia (Oficinas de control disciplinario interno)
        - Contraloría General de la República.`,
        normativa: [
            {
                id: crypto.randomUUID(),
                ley: 'Procesos de responsabilidad fiscal de competencia de las contralorías (L.610/00).'
            },
            {
                id: crypto.randomUUID(),
                ley: 'Código General Disciplinario (L.1952/19).'
            },
            {
                id: crypto.randomUUID(),
                ley: 'Código de conducta del Militar Colombiano y Código Disciplinario Militar.L.1862/17).'
            }
        ]
    },
    {
        id: 8,
        link: 'procesos-de-insolvencia',
        service: 'Procesos de insolvencia',
        heroUrl: prosInsImg,
        desc: `Defensa jurídica en procesos de Insolvencia de Persona Natural no Comerciante e Insolvencia empresarial.`,
        normativa: [
            {
                id: crypto.randomUUID(),
                ley: 'Régimen de Insolvencia Empresarial en la República de Colombia. (L.1116/06).'
            },
            {
                id: crypto.randomUUID(),
                ley: 'Ley 1564 de 2012 (Código general del proceso).'
            }
        ]
    },
]
export const headerLinks = [

    {
        id: 1,
        name: 'Sobre Nosotros',
        link: '/sobre-nosotros'
    },
    {
        id: 2,
        name: 'Servicios',
        dropdown: [
            {
                id: crypto.randomUUID(),
                link: '/servicios/derecho-financiero-y-seguros',
                name: 'Derecho Financiero y seguros'
            },
            {
                id: crypto.randomUUID(),
                link: '/servicios/derecho-de-familia',
                name: 'Derecho de familia',
            },
            {
                id: crypto.randomUUID(),
                link: '/servicios/derecho-laboral',
                name: 'Derecho laboral',
            },
            {
                id: crypto.randomUUID(),
                link: '/servicios/derecho-civil-y-comercial',
                name: 'Derecho civil y comercial',
            },
            {
                id: crypto.randomUUID(),
                link: '/servicios/derecho-penal',
                name: 'Derecho penal',
            },
            {
                id: crypto.randomUUID(),
                link: '/servicios/derecho-administrativo',
                name: 'Derecho administrativo',
            },
            {
                id: crypto.randomUUID(),
                link: '/servicios/responsabilidad-fiscal-y-disciplinarios',
                name: 'Responsabilidad fiscal y disciplinarios',
            },
            {
                id: crypto.randomUUID(),
                link: '/servicios/procesos-de-insolvencia',
                name: 'Procesos de insolvencia',
            },

        ]
    },
    {
        id: 3,
        name: 'Estadísticas',
        link: '/estadisticas'
    },
    {
        id: 4,
        name: 'Boletines',
        link: '/boletines',
        dropdown: [
            {
                id: crypto.randomUUID(),
                link: '/boletines/boletin-juridico',
                name: 'Boletin jurídico'
            },
            {
                id: crypto.randomUUID(),
                link: '/boletines/noticias',
                name: 'Noticias',
            }

        ]
    }

]
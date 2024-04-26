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
                service: 'Derecho Financiero y seguros'
            },
            {
                id: crypto.randomUUID(),
                link: '/servicios/derecho-de-familia',
                service: 'Derecho de familia',
            },
            {
                id: crypto.randomUUID(),
                link: '/servicios/derecho-laboral',
                service: 'Derecho laboral',
            },
            {
                id: crypto.randomUUID(),
                link: '/servicios/derecho-civil-y-comercial',
                service: 'Derecho civil y comercial',
            },
            {
                id: crypto.randomUUID(),
                link: '/servicios/derecho-penal',
                service: 'Derecho penal',
            },
            {
                id: crypto.randomUUID(),
                link: '/servicios/derecho-administrativo',
                service: 'Derecho administrativo',
            },
            {
                id: crypto.randomUUID(),
                link: '/servicios/responsabilidad-fiscal-y-disciplinarios',
                service: 'Responsabilidad fiscal y disciplinarios',
            },
            {
                id: crypto.randomUUID(),
                link: '/servicios/procesos-de-insolvencia',
                service: 'Procesos de insolvencia',
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
        link: '/boletines'
    }

]
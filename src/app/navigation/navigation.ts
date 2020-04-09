import {FuseNavigation} from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'pages',
        title: 'PAGINAS',
        type: 'group',
        children: [
            {
                id: 'dashboard',
                title: 'Dashboard',
                type: 'item',
                icon: 'dashboard',
                url: '/pages/dashboard'
            },
            {
                id: 'doctors',
                title: 'Medicos',
                type: 'item',
                icon: 'person',
                url: '/pages/doctors'
            },
            {
                id: 'patients',
                title: 'Pacientes',
                type: 'item',
                icon: 'airline_seat_flat',
                url: '/pages/patients'
            }
        ]
    }
];

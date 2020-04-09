import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const pagesRoutes: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.dashboardModule),
    },
    {
        path: 'doctors',
        loadChildren: () => import('./doctors/doctors.module').then(m => m.DoctorsModule),
    },
    {
        path: 'patients',
        loadChildren: () => import('./patients/patients.module').then(m => m.PatientsModule),
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(pagesRoutes)
    ]
})
export class PagesModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

const pagesRoutes: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.dashboardModule),
        // data: <RouteData>{ title: 'Dashboard', breadcrumb: 'Dashboard', claim: 'dashboard.ver' }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(pagesRoutes),
    ]
})
export class PagesModule {
}

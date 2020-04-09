import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PatientsComponent} from "./patients.component";
import {FlexLayoutModule} from "@angular/flex-layout";

const routes = [
    {
        path: '**',
        component: PatientsComponent,
    }
];

@NgModule({
    declarations: [
        PatientsComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        FlexLayoutModule,
    ]
})
export class PatientsModule {
}

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DoctorsComponent} from "./doctors.component";
import {FlexLayoutModule} from "@angular/flex-layout";

const routes = [
    {
        path: '**',
        component: DoctorsComponent,
    }
];

@NgModule({
    declarations: [
        DoctorsComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        FlexLayoutModule,
    ]
})
export class DoctorsModule {
}

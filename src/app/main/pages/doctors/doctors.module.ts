import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DoctorsComponent} from "./doctors.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatTooltipModule} from "@angular/material/tooltip";

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
        MatCardModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatTooltipModule
    ]
})
export class DoctorsModule {
}

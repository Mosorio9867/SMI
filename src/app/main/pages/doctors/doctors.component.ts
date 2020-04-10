import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from '@fuse/animations';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
    selector: 'app-doctors',
    templateUrl: './doctors.component.html',
    styleUrls: ['./doctors.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class DoctorsComponent implements OnInit {

    public form: FormGroup;
    public displayedColumns: string[] = ['name', 'identification', 'age', 'actions'];
    public dataSource = new MatTableDataSource<any>(ELEMENT_DATA);

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

    constructor(
        private _formBuilder: FormBuilder
    ) {
        this.form = this._formBuilder.group({
            search: [null]
        })
    }

    ngOnInit(): void {
        this.dataSource.paginator = this.paginator;
    }
}

const ELEMENT_DATA: any[] = [
    {name: 'Manuel Enrique Osorio Ochoa', identification: '1047506765', age: 21, active: true},
];

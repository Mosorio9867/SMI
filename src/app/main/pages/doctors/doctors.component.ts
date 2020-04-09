import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from '@fuse/animations';

@Component({
    selector: 'app-doctors',
    templateUrl: './doctors.component.html',
    styleUrls: ['./doctors.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class DoctorsComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }
}

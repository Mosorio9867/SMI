import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder} from '@angular/forms';

import {FuseConfigService} from '@fuse/services/config.service';
import {fuseAnimations} from '@fuse/animations';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class DashboardComponent implements OnInit {

    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder
    ) {
    }

    ngOnInit(): void {
    }
}

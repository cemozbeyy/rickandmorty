import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'rck-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})

export class HeaderComponent implements OnInit {
    emailFormControl = new FormControl('', [Validators.required, Validators.email]);

    constructor() { }

    ngOnInit() { }
}
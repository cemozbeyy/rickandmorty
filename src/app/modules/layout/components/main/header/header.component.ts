import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MainService } from 'src/app/core/services/main.service';

@Component({
    selector: 'rck-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})

export class HeaderComponent implements OnInit {

    filterForm!: FormGroup;

    constructor(private formBuilder: FormBuilder, private mainService: MainService) { }

    onSubmit() {
        this.mainService.setFilters(this.filterForm.value);
    }

    clearForm() {
        this.filterForm.reset();
    }
    ngOnInit() {
        this.filterForm = this.formBuilder.group({
            name: [''],
            type: [''],
            status: [''],
            gender: ['']
        });
    }
}
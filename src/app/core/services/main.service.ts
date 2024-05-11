import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FilterModel } from '../models/filterModel';

@Injectable({ providedIn: 'root' })
export class MainService {


    private filtersSubject = new Subject<FilterModel>();
    public filters$ = this.filtersSubject.asObservable();

    constructor() { }
    setFilters(filters: FilterModel) {
        this.filtersSubject.next(filters);
    }


}
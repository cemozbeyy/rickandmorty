import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MainService {
    private filtersSubject = new BehaviorSubject<any>({});
    public filters$ = this.filtersSubject.asObservable();

    constructor() { }
    setFilters(filters: any) {
        this.filtersSubject.next(filters);
    }


}
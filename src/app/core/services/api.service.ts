import { HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class ApiHttpService {
    apiURL = environment.apiURL;
    constructor(private http: HttpClient) { }

    public get<T>(url: string): Observable<T> {
        return this.http.get<T>(this.apiURL + url);
    }
    public post<T>(url: string, data: any): Observable<T> {
        return this.http.post<T>(this.apiURL + url, data);
    }

    //patch ve delete de duruma göre eklenebilir
}

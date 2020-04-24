import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { categories } from './category-list';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    constructor(private http: HttpClient) { }

    private url = 'http://localhost:8000/api'
    private httpHeaders = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    getCategory(id: number): Observable<any> {
        return this.http.get(this.url+`/categories/${id}/`)
    }

    getCategories(): Observable<any> {
        return this.http.get(this.url+'/categories/')
    }
}


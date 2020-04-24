import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRODUCTS } from './products';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) { }

    private url = 'http://localhost:8000/api'
    private httpHeaders = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    getProduct(id: number): Observable<any> {
        return this.http.get(this.url + `/products/${id}/`)
    }

    getProducts(): Observable<any> {
        return this.http.get(this.url + `/products/`)
    }

    getProductsByCategoryId(id: number): Observable<any> {
        return this.http.get(this.url+`/categories/${id}/products/`)
    }
}
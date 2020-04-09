import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRODUCTS } from './products';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor() { }

    getProduct(id: number): Observable<any> {
        return of(PRODUCTS.find(product => product.id === id));
    }

    getProducts(): Observable<any> {
        return of(PRODUCTS);
    }

    getProductsByCategoryId(id: number): Observable<any> {
        return of(PRODUCTS.filter(product => product.categoryId === id));
    }
}
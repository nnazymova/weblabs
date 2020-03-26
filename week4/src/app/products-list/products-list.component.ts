import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component'
import { Product } from '../product';
import { PRODUCTS } from '../products';


@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {

    products = PRODUCTS;

    ngOnInit() { }
    
}
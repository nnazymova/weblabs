import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PRODUCTS } from '../products';
import { Product } from '../product';

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

    constructor() {}

    @Input() product : Product;
   
    ngOnInit() { 
        
    }

}
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent implements OnInit {
    product: any;

    constructor(
        private route: ActivatedRoute,
        private productService: ProductService,
    ) { }

    ngOnInit() {
        this.getProduct();
    }

    getProduct() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.productService.getProduct(id).subscribe(product => this.product = product);
    }
    share(){

    }

}

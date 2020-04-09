import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';



@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {
    products: any;
    category: any;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private productService: ProductService,
        private categoryService: CategoryService
    ) {
        this.router.events.subscribe((value => {
            this.getProducts();
            this.getCategory();
        }));
    }

    ngOnInit() {
        this.getProducts();
        this.getCategory();
    }

    getProducts() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.productService.getProductsByCategoryId(id).subscribe(products => this.products = products);
    }

    getCategory() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.categoryService.getCategory(id).subscribe(category => this.category = category);
    }
}

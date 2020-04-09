import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
    selector: 'app-nav',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavComponent implements OnInit {
    categories: any;
    constructor(private categoryService: CategoryService) { }

    ngOnInit(): void {
        this.getCategories();
    }

    getCategories() {
        this.categoryService.getCategories().subscribe(categories => this.categories = categories);
    }

}
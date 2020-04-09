import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsListComponent } from './products-list/products-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { CategoriesComponent } from './categories/categories.component';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './navbar/navbar.component';
import { LogComponent } from './log/log.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
    { path: 'products', component: ProductsListComponent },
    { path: 'menu', component: MenuComponent},
    { path: 'navbar', component: NavComponent},
    { path: 'log', component: LogComponent},
    { path: 'product-id/:id', component: ProductItemComponent },
    { path: 'category/:id', component: CategoriesComponent },
    { path: 'info', component: InfoComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

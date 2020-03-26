import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductItemComponent } from './product-item/product-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

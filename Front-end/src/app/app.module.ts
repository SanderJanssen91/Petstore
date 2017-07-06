import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { ProductTableComponent } from "./product-table.component";
import { ProductService } from "./product.service";
import { ProductsComponent } from "./products.component";
import { OrderComponent } from "./order.component";
import { ProductOrderService } from "./product-order.service";
import { OrderProductTableComponent } from "./order-product-table.component";
import { ShoppingcartDataService } from "./shoppingcartData.service";

@NgModule({
  declarations: [
    AppComponent,
    ProductTableComponent,
    ProductsComponent,
    OrderComponent,
    OrderProductTableComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
      },
      {
        path: 'shoppingcart',
        component: OrderComponent,
      },
    ])
  ],
  providers: [ProductService, ProductOrderService, ShoppingcartDataService],
  bootstrap: [AppComponent]
})

export class AppModule { }

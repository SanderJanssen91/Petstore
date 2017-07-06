import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { ProductTableComponent } from "./product/product-table.component";
import { ProductService } from "./product/product.service";
import { ProductsComponent } from "./product/products.component";
import { OrderComponent } from "./order/order.component";
import { ProductOrderService } from "./order/product-order.service";
import { OrderProductTableComponent } from "./order/order-product-table.component";
import { ShoppingcartDataService } from "./order/shoppingcartData.service";

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

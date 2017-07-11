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
import { ShoppingcartDataService } from "./shoppingcartData.service";
import { CustomerService } from "./customer/customer.service";
import { CustomerFormComponent } from "./customer/customer-form.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductTableComponent,
    ProductsComponent,
    OrderComponent,
    OrderProductTableComponent,
    CustomerFormComponent
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
  providers: [ProductService, ProductOrderService, ShoppingcartDataService, CustomerService],
  bootstrap: [AppComponent]
})

export class AppModule { }

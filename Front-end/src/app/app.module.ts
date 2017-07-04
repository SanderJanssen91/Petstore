import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { ProductTableComponent } from "./product-table.component";
import { ProductService } from "./product.service";
import { ProductsComponent } from "./products.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductTableComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

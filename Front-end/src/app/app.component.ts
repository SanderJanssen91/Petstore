import { Component, OnInit } from '@angular/core';

import { Product } from "./product";
import { ProductService } from "./product.service";

@Component({
  selector: 'app-root',
  template: `
  <body>
  <h1>{{title}}</h1>
  <h2>Products</h2>
  <product-table [products]="products"></product-table>
  <div>
    <p>Want to order something? Please contact us on {{phoneNumber}} or {{emailAdress}}</p>
  </div>
</body>
  `,
/*  templateUrl: './app.component.html',*/
  styleUrls: ['./app.component.css'],
  providers: [ProductService],
  })

export class AppComponent implements OnInit {
  title = 'Pet-Supplies';
  phoneNumber = '06-12345678';
  emailAdress = 'order@pet-supplies.com';
  products: Product[];

  constructor(private productService: ProductService) {
  };
  
  getProducts(): void {
    this.productService.getProducts().then(products => this.products = products);
  };

  ngOnInit(): void {
    this.getProducts();
}
}
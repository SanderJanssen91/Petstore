import { Component, OnInit } from '@angular/core';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

import { Product } from "./product";
import { ProductService } from "./product.service";

@Component({
  selector: 'my-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [],
  })

export class ProductsComponent implements OnInit {
    products: Product[];
    orderTotalPrice: number;

    constructor(private productService: ProductService) {
    };
  
    getAllProducts(): void {
      this.productService
          .getAllProducts()
          .subscribe((data:Product[]) => this.products = data,
              error => console.log(error),
              () => console.log('GET all products complete'));
      this.productService
          .getTotalPrice()
          .subscribe((data:number) => this.orderTotalPrice = data,
            error => console.log(error),
            () => console.log('GET order price complete'));
    }

    ngOnInit(): void {
      this.getAllProducts();
    }
}
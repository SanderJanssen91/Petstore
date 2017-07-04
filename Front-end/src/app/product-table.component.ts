import { Component, Input } from '@angular/core';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

import { Product } from "./product";
import { ProductService } from "./product.service";

@Component({
  selector: 'product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css'],
})

export class ProductTableComponent {
    @Input() orderTotalPrice: number;
    @Input() products: Product[];
    
    constructor(private productService: ProductService) {
    };

    addToCart(product:Product): void {
      this.productService.addToCart(product)
        .subscribe(
          result => console.log(result))
      this.productService.getTotalPrice()
        .subscribe(
          (data:number) => this.orderTotalPrice = data,
            error => console.log(error),
            () => console.log('GET order price complete'));
      location.reload()
    }
}
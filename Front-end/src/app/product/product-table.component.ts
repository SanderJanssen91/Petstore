import { Component, Input } from '@angular/core';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

import { Product } from "./product";
import { ProductService } from "./product.service";
import { ShoppingcartDataService } from "../shoppingcartData.service";

@Component({
  selector: 'product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css'],
})

export class ProductTableComponent {
    @Input() products: Product[];
    
    constructor(private productService: ProductService, private shoppingcartDataService:ShoppingcartDataService) {
    };

    addToCart(product:Product): void {
      this.shoppingcartDataService.addToShoppingcart(product)
      this.shoppingcartDataService.getTotalShoppingcartPrice()
      }
}
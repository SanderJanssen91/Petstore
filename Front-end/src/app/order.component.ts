import { Component, OnInit } from '@angular/core';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

import { ProductOrder } from "./product-order";
import { ProductOrderService } from "./product-order.service";

@Component({
  selector: 'Order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: [],
})

export class OrderComponent implements OnInit {
    productsOrder: ProductOrder[];
    orderTotalPrice: number;

    constructor(private productOrderService: ProductOrderService) {
    };
  
    getAllOrderedProducts(): void {
      this.productOrderService
          .getAllOrderedProducts()
          .subscribe((data:ProductOrder[]) => this.productsOrder = data,
              error => console.log(error),
              () => console.log('GET all products in Order complete'));
      this.productOrderService
          .getTotalPrice()
          .subscribe((data:number) => this.orderTotalPrice = data,
            error => console.log(error),
            () => console.log('GET order price complete'));
    }

    ngOnInit(): void {
      this.getAllOrderedProducts();
    }
}
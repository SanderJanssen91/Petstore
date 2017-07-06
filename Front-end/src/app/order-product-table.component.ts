import { Component, Input, OnInit } from '@angular/core';

import { ProductOrderService } from "./product-order.service";
import { ProductOrder } from "./product-order";
import { ShoppingcartDataService } from "./shoppingcartData.service";

@Component({
  selector: 'order-product-table',
  templateUrl: './order-product-table.component.html',
  styleUrls: ['./order-product-table.component.css'],
})

export class OrderProductTableComponent implements OnInit{
    orderTotalPrice: number;
    productOrderArray: ProductOrder[];
    phoneNumber = '06-12345678';
    emailAdress = 'order@pet-supplies.com';

    constructor(private shoppingcartDataService:ShoppingcartDataService) {
    };

    ngOnInit(){
      this.productOrderArray = this.shoppingcartDataService.getAllOrderedProducts();
      this.orderTotalPrice = this.shoppingcartDataService.getTotalShoppingcartPrice();
    }

}
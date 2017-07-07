import { Component, Input, OnInit } from '@angular/core';

import { ProductOrderService } from "../order/product-order.service";
import { ProductOrder } from "./product-order";
import { ShoppingcartDataService } from "../shoppingcartData.service";

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
    
    removeFromCart(productOrder:ProductOrder): void {
      this.shoppingcartDataService.removeFromShoppingcart(productOrder.productId)
      this.orderTotalPrice = this.shoppingcartDataService.getTotalShoppingcartPrice()
      this.productOrderArray = this.shoppingcartDataService.getAllOrderedProducts();
    }
    
    decreaseQuantity(productOrder:ProductOrder) :void {
      this.shoppingcartDataService.decreaseQuantity(productOrder.productId)
      this.orderTotalPrice = this.shoppingcartDataService.getTotalShoppingcartPrice()
      this.productOrderArray = this.shoppingcartDataService.getAllOrderedProducts();
    }

    increaseQuantity(productOrder:ProductOrder) :void {
      this.shoppingcartDataService.increaseQuantity(productOrder.productId)
      this.orderTotalPrice = this.shoppingcartDataService.getTotalShoppingcartPrice()
      this.productOrderArray = this.shoppingcartDataService.getAllOrderedProducts();
    }

    ngOnInit(){
      this.productOrderArray = this.shoppingcartDataService.getAllOrderedProducts();
      this.orderTotalPrice = this.shoppingcartDataService.getTotalShoppingcartPrice();
    }

}
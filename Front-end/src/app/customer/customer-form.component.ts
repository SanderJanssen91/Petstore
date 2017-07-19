import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Customer } from "./customer";
import { Order } from "../order/order";
import { CustomerService } from "./customer.service";
import { ProductOrder } from "app/order/product-order";
import { ShoppingcartDataService } from "app/shoppingcartData.service";

@Component({
  selector: 'customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],
})

export class CustomerFormComponent {
  customer:Customer;
  productOrderArray: ProductOrder[];
  order:Order;
       
    constructor(private router:Router, private customerService: CustomerService, private shoppingcartDataService:ShoppingcartDataService){};

    addCustomer(name:string, address:string, postalCode:string, city:string, emailAddress:string): void {
      this.customerService.addCustomer(name, address, postalCode, city, emailAddress)
        .subscribe(customer => this.customer = customer)
            }

    addOrder(name:string, address:string, postalCode:string, city:string, emailAddress:string):void{
      this.customerService.addCustomer(name, address, postalCode, city, emailAddress)
        .subscribe(customer => this.shoppingcartDataService.addOrder(customer.customerId)
          .subscribe(order => this.shoppingcartDataService.addProductOrder(order.orderId)
            .subscribe(productOrderArray => this.productOrderArray = productOrderArray)))
    }

    addProductOrder(): void{
      this.shoppingcartDataService.addProductOrder(this.order.orderId)
      .subscribe(productOrderArray => this.productOrderArray = productOrderArray)
    }

    btnClick= function () {
        this.router.navigateByUrl('/products');
    };
}
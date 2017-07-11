import { Component, Input } from '@angular/core';

import { Customer } from "./customer";
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
  productOrderArray: ProductOrder[]
       
    constructor(private customerService: CustomerService, private shoppingcartDataService:ShoppingcartDataService){};

    addCustomer(name:string, address:string, postalCode:string, city:string, emailAddress:string): void {
      this.customerService.addCustomer(name, address, postalCode, city, emailAddress)
        .subscribe(customer => this.customer = customer)
    }

    addProductOrder(): void{
      this.shoppingcartDataService.addProductOrder()
      .subscribe(productOrderArray => this.productOrderArray = productOrderArray)
    }
}
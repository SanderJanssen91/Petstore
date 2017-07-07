import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { ShoppingcartDataService } from "./shoppingcartData.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  })

export class AppComponent implements OnInit {
    title = 'Pet Supplies';
    numberOfProducts:number;

    constructor(private shoppingcartDataService: ShoppingcartDataService) {
    };

getTotalNumberProducts(): number {
    this.numberOfProducts = this.shoppingcartDataService.getTotalNumberProducts()
    return this.numberOfProducts
}

ngOnInit(){
this.getTotalNumberProducts();
}
}
import { Component, OnInit } from '@angular/core';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Product } from "./product";
import { ProductService } from "./product.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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
  
    getAllProducts(): void {
      this.productService.getAllProducts().then(products => this.products = products);
    }

    ngOnInit(): void {
      this.getAllProducts();
    }
}
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

export class OrderComponent {
}
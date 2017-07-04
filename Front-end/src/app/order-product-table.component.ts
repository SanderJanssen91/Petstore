import { Component, Input } from '@angular/core';

import { ProductOrderService } from "./product-order.service";
import { ProductOrder } from "./product-order";

@Component({
  selector: 'order-product-table',
  templateUrl: './order-product-table.component.html',
  styleUrls: ['./order-product-table.component.css'],
})

export class OrderProductTableComponent {
    @Input() orderTotalPrice: number;
    @Input() productsOrder: ProductOrder[];
}
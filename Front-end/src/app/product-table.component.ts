import { Component, Input } from '@angular/core';

import { Product } from "./product";

@Component({
  selector: 'product-table',
  template:`
  <div *ngIf="products">
    <table> 
      <tr>
        <th>Product name</th>
        <th>Product description</th> 
        <th>Product price</th>
      </tr>
      <tr *ngFor="let product of products">
        <td>{{product.name}}</td>
        <td>{{product.desc}}</td> 
        <td>€{{product.price}},-</td>
      </tr>
    </table>
  </div>
  `,
  styleUrls: ['./product-table.component.css'],
})

export class ProductTableComponent {
    @Input() products: Product[];
}
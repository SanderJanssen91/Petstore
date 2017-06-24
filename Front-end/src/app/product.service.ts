import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from "@angular/http";
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { PRODUCTS } from "./mock-products";
import { Product } from "./product";

@Injectable()
export class ProductService {
    private productsUrl = 'http://localhost:8080/Back-end-1.0/rest/product/all';  // URL to web api
 
    constructor(private http: Http) { }

    getProducts(): Observable<Product[]> {
        return this.http.get(this.productsUrl)
             .map((res:Response) => res.json())
}
 
private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);

    }
}
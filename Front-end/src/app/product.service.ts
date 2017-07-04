import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Product } from "./product";

@Injectable()
export class ProductService {
    private actionUrl1: string;
    private actionUrl2: string;
    private actionUrl3: string;

    constructor(private http : Http){
        this.actionUrl1 = 'http://localhost:8080/Back-end-1.0/rest/product/all';
        this.actionUrl2 = 'http://localhost:8080/Back-end-1.0/rest/product/addtocart';
        this.actionUrl3 = 'http://localhost:8080/Back-end-1.0/rest/product/totalprice';
    }

    getAllProducts(): Observable<Product[]> {        
        return this.http
            .get(this.actionUrl1)
            .map((response: Response) => {
                const data = response.json();
                return data;
            }) 
    }

    addToCart(product:Product): Observable<Product> {
        return this.http
            .put(this.actionUrl2, product)
            .map((response: Response) => {
                const data = response.json();
                return data;
            })
    }

    getTotalPrice(): Observable<number> {
        return this.http
            .get(this.actionUrl3)
            .map((response: Response) => {
                const data = response.json();
                return data;
            })
    }
}
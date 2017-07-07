import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { ProductOrder } from "../order/product-order";

@Injectable()
export class ProductOrderService {
    private actionUrl1: string;
    private actionUrl2: string;
    private actionUrl3: string;

    constructor(private http : Http){
        this.actionUrl1 = 'http://localhost:8080/Back-end-1.0/rest/productorder/all';
        this.actionUrl2 = 'http://localhost:8080/Back-end-1.0/rest/productorder/totalprice';
        this.actionUrl3 = 'http://localhost:8080/Back-end-1.0/rest/';
    }

    getAllOrderedProducts(): Observable<ProductOrder[]> {        
        return this.http
            .get(this.actionUrl1)
            .map((response: Response) => {
                const data = response.json();
                return data;
            }) 
    }

    getTotalPrice(): Observable<number> {
        return this.http
            .get(this.actionUrl2)
            .map((response: Response) => {
                const data = response.json();
                return data;
            })
    }
}
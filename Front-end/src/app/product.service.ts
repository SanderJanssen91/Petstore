import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from "@angular/http";
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { PRODUCTS } from "./mock-products";
import { Product } from "./product";
import { Configuration } from "./app.constants";

@Injectable()
export class ProductService {
    getAllProducts(): Promise<Product[]> {
        return Promise.resolve(PRODUCTS);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    
/*
    private actionUrl: string;

    constructor(private http: Http, private configuration: Configuration) {
        this.actionUrl = configuration.ServerWithApiUrl + 'rest/product/all/';
    }*/

/*    public getAllProducts2 = (): Observable<Product[]> => {
        return this.http
            .get(this.actionUrl)
            .map(response => response.json().data as Product[])
            .catch(this.handleError);
    }*/
 
}
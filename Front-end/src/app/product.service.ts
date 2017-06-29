import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { PRODUCTS } from "./mock-products";
import { Product } from "./product";
import { Configuration } from "./app.constants";

@Injectable()
export class ProductService {
    private actionUrl: string;
    private headers: Headers;

    constructor(private http : Http){
        // this.actionUrl = configuration.ServerWithApiUrl + 'product/all';
        this.actionUrl = 'http://localhost:8080/Back-end-1.0/rest/product/all';
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    getAllProducts(): Observable<Product[]> {
        let headers = new Headers ();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        
        return this.http.get(this.actionUrl)
            .map((response: Response) => {
                const data = response.json();
                return data;
            }) 
    }
}
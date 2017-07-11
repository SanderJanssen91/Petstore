import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Customer } from "./customer";

@Injectable()
export class CustomerService {
    private actionUrl1: string;
    private actionUrl2: string;
    private actionUrl3: string;
    private customer: Customer;

    constructor(private http : Http){
        this.actionUrl1 = 'http://localhost:8080/Back-end-1.0/rest/customer/add';
        this.actionUrl2 = '';
        this.actionUrl3 = '';
    }

    addCustomer(name:string, address:string, postalCode:string, city: string, emailAddress:string): Observable<Customer> {
                var customer = new Customer(name, address, postalCode, city,emailAddress)
        return this.http
            .post(this.actionUrl1, customer)
            .map((response: Response) => {
                const customer = response.json();
                this.customer = customer;
                return customer;            
            })
    }
}
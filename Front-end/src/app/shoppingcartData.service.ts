import {Observable} from 'rxjs/Observable';

import { ProductOrder } from "./order/product-order";
import { Product } from "./product/product";
import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';


@Injectable()
export class ShoppingcartDataService {
    private actionUrl1: string;
    private actionUrl2: string;
    private actionUrl3: string;
    product:Product;
    productOrderArray: ProductOrder[]=[];
    totalShoppingcartPrice:number=0; 
    productOrder:ProductOrder;
    totalNumberProducts:number;

    constructor(private http : Http){
        this.actionUrl1 = 'http://localhost:8080/Back-end-1.0/rest/order/new';
        this.actionUrl2 = '';
        this.actionUrl3 = '';
    }

    getAllOrderedProducts(): ProductOrder[] {
        return this.productOrderArray
    }

    getOrderedProduct(id:number): ProductOrder {
        if (this.productOrderArray.length == 0){
            return this.productOrder}
        else {
            var _productOrder:ProductOrder
            _productOrder = this.productOrderArray.find(x => x.productId ==id)
            return _productOrder}
    }

    getOrderedProductIndex(id:number): number {
        return this.productOrderArray.findIndex(x => x.productId == id)
    }

    addToShoppingcart(product:Product): ProductOrder {
        if(this.productOrderArray == undefined){
            this.productOrderArray = [];
        }
        this.productOrder = undefined;
        this.productOrder = this.getOrderedProduct(product.id)
            if (this.productOrder == undefined){
                var _productOrder:ProductOrder=
                {productId:product.id, 
                productName:product.name,
                productPrice:product.price,
                quantity:1,
                totalPrice:product.price};
                this.productOrder=_productOrder; 
                this.productOrderArray.push(this.productOrder)
            }
            else{
                this.productOrder.quantity = this.productOrder.quantity + 1,
                this.productOrder.totalPrice = (this.productOrder.productPrice*this.productOrder.quantity)
                this.productOrderArray[this.getOrderedProductIndex(product.id)]=this.productOrder
            } 
        return this.productOrder
    }

    getTotalShoppingcartPrice(): number {
        this.totalShoppingcartPrice = 0;
        var productOrderArray = this.getAllOrderedProducts();
        if (productOrderArray.length == 0) {return 0}
        else {
            for (var i=0; i<productOrderArray.length; i++){
            this.totalShoppingcartPrice = 
                this.totalShoppingcartPrice + productOrderArray[i].totalPrice
            }
        return this.totalShoppingcartPrice
        }
    }

    getTotalNumberProducts(): number {
        var productOrderArray = this.getAllOrderedProducts();
        var totalNumberProducts = 0;
            for (var i = 0; i<productOrderArray.length; i++){
                totalNumberProducts = totalNumberProducts + productOrderArray[i].quantity;
            }
            return totalNumberProducts;
    }

    removeFromShoppingcart(productId:number): void {
        this.productOrder = this.getOrderedProduct(productId)
        let index: number = this.productOrderArray.indexOf(this.productOrder);
        if (index !== -1) {
        this.productOrderArray.splice(index, 1);
        console.log(this.productOrderArray)
        }        
    }

    decreaseQuantity(productId:number):void{
        this.productOrder = this.getOrderedProduct(productId)
        if (this.productOrder.quantity == 1) {
            this.removeFromShoppingcart(productId)
        }
        else {
        this.productOrder.quantity = this.productOrder.quantity-1
        this.productOrder.totalPrice = this.productOrder.quantity * this.productOrder.productPrice
        }
    }

    increaseQuantity(productId:number):void{
        this.productOrder = this.getOrderedProduct(productId)
        this.productOrder.quantity = this.productOrder.quantity+1
        this.productOrder.totalPrice = this.productOrder.quantity * this.productOrder.productPrice
    }

    addProductOrder() : Observable<ProductOrder[]>{
        var productOrderArray:ProductOrder[] = this.getAllOrderedProducts();
        return this.http
            .post(this.actionUrl1, productOrderArray)
            .map((response: Response) => {
                const productOrderArray = response.json();
                return productOrderArray;})
        }
}
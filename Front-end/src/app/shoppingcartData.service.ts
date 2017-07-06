import { ProductOrder } from "./product-order";
import { Product } from "./product";
import { Injectable } from "@angular/core";


@Injectable()
export class ShoppingcartDataService {
    product:Product;
    productOrderArray: ProductOrder[]=[];
    totalShoppingcartPrice:number=0; 
    productOrder:ProductOrder;

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
}
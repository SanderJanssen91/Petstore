package nl.sander.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by sanjanss on 4-7-2017.
 */

@Entity
@Table(name="product_order")
public class ProductOrder {
    @Id
    private int productId;
    private String productName;
    private double productPrice;
    private double totalPrice;
    private int quantity;

    public int getProductId() {
        return productId;
    }

    public String getProductName() {
        return productName;
    }

    public double getProductPrice() {
        return productPrice;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
        setTotalPrice();
    }

    public void setTotalPrice(int quantity, double productPrice) {
        this.totalPrice = quantity*productPrice;
    }

    public void setTotalPrice() {
        this.totalPrice = this.getQuantity()*this.getProductPrice();
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public void setProductPrice(double productPrice) {
        this.productPrice = productPrice;
    }
}

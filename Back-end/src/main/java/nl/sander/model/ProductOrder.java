package nl.sander.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

/**
 * Created by sanjanss on 4-7-2017.
 */

@Entity
@Table(name="productorder")
public class ProductOrder implements Serializable{

    @Id
    private int productId;
    @Id
    private int orderId;

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

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }
}

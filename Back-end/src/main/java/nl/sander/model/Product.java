package nl.sander.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Product {

    @Id
    @GeneratedValue
    private int id;
    private String name;
    private String description;
    private double price;
    private double totalPrice;
    private int quantity;


    public Product() {};

    public Product(String name, Double price, String description){
        setName(name);
        setPrice(price);
        setDescription(description);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
        setTotalPrice();
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getId() {
        return id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setTotalPrice() {
        this.totalPrice = quantity*price;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
        setTotalPrice();
    }

    public double getTotalPrice() {
        return totalPrice;
    }
}



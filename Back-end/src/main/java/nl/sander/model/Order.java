package nl.sander.model;

import javax.persistence.*;

/**
 * Created by sanjanss on 10-7-2017.
 */
@Entity
@Table(name="tb_order")
public class Order{
    private int orderCustomerId;

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int orderId;

    public Order() {}

    public Order(int orderCustomerId) {
        this.orderCustomerId = orderCustomerId;
    }

    public int getOrderCustomerId() {
        return orderCustomerId;
    }

    public void setOrderCustomerId(int customerId) {
        this.orderCustomerId = customerId;
    }

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int id) {
        this.orderId = id;
    }
}

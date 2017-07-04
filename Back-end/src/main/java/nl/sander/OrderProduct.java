package nl.sander;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import java.io.Serializable;

/**
 * Created by SANJANSS on 30-6-2017.
 */
@Embeddable
class MyCompositePK implements Serializable {
    @Column
    private int orderId;
    @Column
    private int proudctId;

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public int getProudctId() {
        return proudctId;
    }

    public void setProudctId(int proudctId) {
        this.proudctId = proudctId;
    }
}

@Entity
public class OrderProduct {
    @EmbeddedId
    private MyCompositePK id;
    @Column
    private int quantity;

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
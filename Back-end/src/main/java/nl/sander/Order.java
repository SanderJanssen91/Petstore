package nl.sander;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by SANJANSS on 30-6-2017.
 */
@Entity
public class Order {
    @Id
    @GeneratedValue
    private int orderId;

    public int getId() {
        return orderId;
    }
}

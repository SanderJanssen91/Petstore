package nl.sander.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by sanjanss on 10-7-2017.
 */

@Entity
@Table(name="customer")
public class Customer {

    @Id
    @GeneratedValue
    private int customerId;
    private String customerName;
    private String customerAddress;
    private String customerPostalCode;
    private String customerCity;
    private String customerEmailAddress;

    public Customer() {}
    public Customer (String customerName, String customerAddress, String customerPostalCode, String customerCity, String customerEmailAddress) {
        setCustomerName(customerName);
        setCustomerAddress(customerAddress);
        setCustomerPostalCode(customerPostalCode);
        setCustomerCity(customerCity);
        setCustomerEmailAddress(customerEmailAddress);
    }

    public int getCustomerId() {
        return customerId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerAddress() {
        return customerAddress;
    }

    public void setCustomerAddress(String customerAddress) {
        this.customerAddress = customerAddress;
    }

    public String getCustomerPostalCode() {
        return customerPostalCode;
    }

    public void setCustomerPostalCode(String customerPostalCode) {
        this.customerPostalCode = customerPostalCode;
    }

    public String getCustomerCity() {
        return customerCity;
    }

    public void setCustomerCity(String customerCity) {
        this.customerCity = customerCity;
    }

    public String getCustomerEmailAddress() {
        return customerEmailAddress;
    }

    public void setCustomerEmailAddress(String customerEmailAddress) {
        this.customerEmailAddress = customerEmailAddress;
    }
}

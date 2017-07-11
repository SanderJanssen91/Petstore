package nl.sander.service;

import nl.sander.model.Customer;

import javax.ejb.Stateless;

/**
 * Created by sanjanss on 10-7-2017.
 */
    @Stateless
    public class CustomerService extends AbstractCrudRepository<Customer> {

    @Override
    protected Class<Customer> getEntityClass() {
        return Customer.class;
    }
}

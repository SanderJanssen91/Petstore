package nl.sander.service;

import nl.sander.model.Order;

import javax.ejb.Stateless;

@Stateless
public class OrderService extends AbstractCrudRepository<Order>{

    @Override
    protected Class<Order> getEntityClass() {
        return Order.class;
    }
}
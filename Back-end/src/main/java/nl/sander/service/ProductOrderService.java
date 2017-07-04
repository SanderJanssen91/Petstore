package nl.sander.service;

import nl.sander.model.ProductOrder;

import javax.ejb.Stateless;


@Stateless
public class ProductOrderService extends AbstractCrudRepository<ProductOrder>{

    @Override
    protected Class<ProductOrder> getEntityClass() {
        return ProductOrder.class;
    }

}
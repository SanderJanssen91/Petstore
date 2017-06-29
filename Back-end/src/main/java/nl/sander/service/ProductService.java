package nl.sander.service;

import nl.sander.model.Product;

import javax.ejb.Stateless;

/**
 * Created by sanjanss on 29-6-2017.
 */
    @Stateless
    public class ProductService extends AbstractCrudRepository<Product>{

        @Override
        protected Class<Product> getEntityClass() {
            return Product.class;
        }

    }
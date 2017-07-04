package nl.sander.rest;

import nl.sander.model.Product;
import nl.sander.model.ProductOrder;
import nl.sander.service.ProductOrderService;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Created by sanjanss on 4-7-2017.
 */

@Path("/productorder")
public class ProductOrderRestController {
    @Inject ProductOrderService productOrderService;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/all")
    public List<ProductOrder> getAllProducts() {

            System.out.println("GET method in ProductOrderRest is reached");
            List<ProductOrder> productOrderList = productOrderService.findAll();
            for (ProductOrder productOrder : productOrderList) {
                if (productOrder.getQuantity() == 0) {
                    productOrderList.remove(productOrderList.indexOf(productOrder));
                }
            }
            return productOrderList;
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/totalprice")
    public double totalPrice() {
        System.out.println("GET method 2 in ProductOrderRest is reached");

        List<ProductOrder> productOrderList;
        productOrderList = getAllProducts();

        double orderTotalPrice = 0.0;

        for (ProductOrder productOrder : productOrderList) {
            orderTotalPrice += productOrder.getTotalPrice();
        }

        return orderTotalPrice;
    }
}

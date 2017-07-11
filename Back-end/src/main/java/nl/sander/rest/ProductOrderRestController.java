package nl.sander.rest;

import nl.sander.model.ProductOrder;
import nl.sander.service.ProductOrderService;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;


/**
 * Created by sanjanss on 4-7-2017.
 */

@Path("/order")
public class ProductOrderRestController {
    @Inject ProductOrderService productOrderService;

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/new")
    public ProductOrder[] addProductOrderArray(ProductOrder[] productOrderArrayInput) {
        ProductOrder[] productOrderArrayOutput = new ProductOrder[productOrderArrayInput.length];
        for (int i = 0; i <productOrderArrayInput.length; i++) {
            ProductOrder productOrder = productOrderService.persist(productOrderArrayInput[i]);
            productOrderArrayOutput[i] = productOrder;
        }
        return productOrderArrayOutput;
        }
}

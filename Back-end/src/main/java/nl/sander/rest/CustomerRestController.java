package nl.sander.rest;

import nl.sander.model.Customer;
import nl.sander.service.CustomerService;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 * Created by sanjanss on 10-7-2017.
 */

@Path("/customer")
public class CustomerRestController {
    @Inject
    CustomerService customerService;

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/add")
    public Customer addCustomer(Customer customer) {
        customerService.persist(customer);
        return customer;
    }
}
package nl.sander.rest;

        import javax.inject.Inject;
        import javax.ws.rs.*;
        import javax.ws.rs.core.MediaType;

        import nl.sander.model.Product;
        import nl.sander.service.ProductService;

        import java.util.List;


@Path("/product")
public class ProductRestController {
    @Inject
    ProductService productService;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/all")
    public List<Product> getAllProducts() {
            return productService.findAll();
        }
    }


//    @POST
//    @Produces(MediaType.APPLICATION_JSON)
//    @Path("/test")
//    public void testPost(){
//        AddProduct.addProduct();
//    }



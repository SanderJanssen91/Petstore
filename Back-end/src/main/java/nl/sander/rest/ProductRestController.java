package nl.sander.rest;

        import javax.inject.Inject;
        import javax.ws.rs.*;
        import javax.ws.rs.core.MediaType;

        import nl.sander.model.Product;
        import nl.sander.service.ProductService;

        import java.util.ArrayList;
        import java.util.List;


@Path("/product")
public class ProductRestController {
    @Inject
    ProductService productService;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/all")
    public List<Product> getAllProducts() {
            System.out.println("GET method in Java is reached");
            return productService.findAll();
        };

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/totalprice")
    public double totalPrice() {
        System.out.println("GET method 2 in Java is reached");
        List<Product> products = productService.findAll();
        double orderTotalPrice = 0.0;

        for (Product product : products) {
            orderTotalPrice += product.getTotalPrice();
        }

        try {return orderTotalPrice;}
        catch (Exception e){
            System.out.println(e);
            return 100.0;
        }
    };

    @PUT
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/addtocart")
    public void addToCart(Product product){
        System.out.println("PUT method in Java is reached");
        product.setQuantity(product.getQuantity()+1);
        productService.merge(product);
    };
}


//    @POST
//    @Produces(MediaType.APPLICATION_JSON)
//    @Path("/test")
//    public void testPost(){
//        AddProduct.addProduct();
//    }



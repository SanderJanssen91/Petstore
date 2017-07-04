package nl.sander.rest;

        import javax.inject.Inject;
        import javax.validation.constraints.Null;
        import javax.ws.rs.*;
        import javax.ws.rs.core.MediaType;

        import nl.sander.model.Product;
        import nl.sander.model.ProductOrder;
        import nl.sander.service.ProductOrderService;
        import nl.sander.service.ProductService;

        import java.util.ArrayList;
        import java.util.List;


@Path("/product")
public class ProductRestController {
    @Inject
    ProductService productService;
    @Inject
    ProductOrderService productOrderService;

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
        List<ProductOrder> productsOrder = productOrderService.findAll();
        double orderTotalPrice = 0.0;

        for (ProductOrder productOrder : productsOrder) {
            orderTotalPrice += productOrder.getTotalPrice();
        }

        try {return orderTotalPrice;}
        catch (Exception e){
            System.out.println(e);
            return 100.0;
        }
    };

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/addtocart")
    public void addToCart(Product product){
        System.out.println("PUT method in Java is reached");

         try {  ProductOrder productOrder;
                productOrder = productOrderService.find(product.getId());
                productOrder.setQuantity(productOrder.getQuantity()+1);
                productOrder.setTotalPrice();
                productOrderService.merge(productOrder);}

            catch (NullPointerException npe) {
                System.out.println("PUT method 2 in Java is reached");
                ProductOrder productOrder = new ProductOrder();
                productOrder.setProductId(product.getId());
                productOrder.setProductName(product.getName());
                productOrder.setProductPrice(product.getPrice());
                productOrder.setQuantity(1);
                productOrder.setTotalPrice();
                productOrderService.persist(productOrder);
            }
         }
    }






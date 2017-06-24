package nl.sander.rest;

        import javax.ws.rs.GET;
        import javax.ws.rs.Path;
        import javax.ws.rs.PathParam;
        import javax.ws.rs.Produces;
        import javax.ws.rs.core.MediaType;
        import javax.ws.rs.core.Response;

        import nl.sander.model.Product;

        import java.util.ArrayList;
        import java.util.Arrays;
        import java.util.List;

@Path("/product")
public class ProductRestService {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/all")
    public Response getAllProducts() {
        Product kattenbrokken = new Product();
        kattenbrokken.setName("Kattenbrokken");
        kattenbrokken.setDesc("Hard, droog voer voor alle katten");
        kattenbrokken.setPrice(10.0);

        Product hondenbrokken = new Product();
        hondenbrokken.setName("Hondenbrokken");
        hondenbrokken.setDesc("Hard, droog voer voor alle honden");
        hondenbrokken.setPrice(15.0);

        Product konijnenbrokken = new Product();
        konijnenbrokken.setName("Konijnenbrokken");
        konijnenbrokken.setDesc("Hard, droog voer voor alle konijnen");
        konijnenbrokken.setPrice(12.0);

        Product[] allProducts;
        allProducts = new Product[3];
        allProducts[0] = hondenbrokken;
        allProducts[1] = kattenbrokken;
        allProducts[2] = konijnenbrokken;

        System.out.println(allProducts[1].getName());

        List allProductsList = new ArrayList();
        allProductsList = Arrays.asList(allProducts);

        return Response.status(200).entity(allProductsList).build();

    }

}
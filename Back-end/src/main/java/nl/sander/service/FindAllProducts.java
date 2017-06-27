package nl.sander.service;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import nl.sander.model.Product;
import nl.sander.HibernateUtil;

public class FindAllProducts {
    public static List<Product> findAllProducts() {

        SessionFactory sessionFactory = HibernateUtil.getSessionFactory();
        Session session = sessionFactory.openSession();

        List<Product> products = session.createQuery("from product").list();

        session.close();

        for (Product product : products) {
            System.out.println(product.getId()+". "+product.getName()+" "+product.getDesc());
        }

        return products;
    }
}
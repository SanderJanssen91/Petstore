package nl.sander.service;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import nl.sander.model.Product;
import nl.sander.HibernateUtil;

public class AddProduct {
    public static void addProduct() {
        SessionFactory sessionFactory = HibernateUtil.getSessionFactory();
        Session session = sessionFactory.openSession();
        session.beginTransaction();

        Product product = new Product();
        product.setName("Kattenbrokken");
        product.setDesc("Hard, droog voer voor alle katten");
        product.setPrice(10.0);

        session.save(product);
        session.getTransaction().commit();

        session.close();
    }
}
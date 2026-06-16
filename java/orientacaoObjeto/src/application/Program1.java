package orientacaoObjeto.src.application;

import orientacaoObjeto.src.entities.Product;

public class Program1 {
    public static void main(String[] args) {
        Product p = new Product();
        p.name = "Laptop";
        p.price = 1000.0;
        p.quantity = 10;
        System.out.println(p);
        p.addProducts(5);
        System.out.println("Updated data: " + p);
        p.removeProducts(3);
        System.out.println("Updated data: " + p);
    }
}

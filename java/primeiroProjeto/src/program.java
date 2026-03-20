import java.util.Locale;

public class program {

    public static void main(String[] args) {
        int y = 32;
        double x = 10.35784;
        String nome = "William";
        int idade = 49;
        double renda = 20000.00;
        
        System.out.print("Olá mundo!");
        System.out.println("Bom dia!");
        System.out.println(y);
        System.out.println(x);
        System.out.printf("%.2f%n", x);
        System.out.printf("%.4f%n", x);
        Locale.setDefault(Locale.US);
        System.out.printf("%.4f%n", x);
        System.out.println("RESULTADO = " + x + " METROS");
        System.out.printf("RESULTADO = %.2f metros%n", x);
        System.out.printf("%s tem %d anos e ganha R$ %.2f reais%n", nome, idade, renda);
    }
}

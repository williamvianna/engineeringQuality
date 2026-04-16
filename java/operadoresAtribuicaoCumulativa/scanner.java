package operadoresAtribuicaoCumulativa;
import java.util.Scanner;

public class scanner {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // // Exemplo 1
        // System.out.print("Digite uma letra: ");
        // String letra = sc.next();
        // System.out.println("Você digitou: " + letra);

        // // Exemplo 2
        // System.out.print("Digite um número: ");
        // int numero = sc.nextInt();
        // System.out.println("Número digitado: " + numero);

        // // Exemplo 3
        // System.out.print("Digite um número: ");
        // double numeroDecimal = sc.nextInt();
        // System.out.println("Número digitado: " + numeroDecimal);

        // // Exemplo 4
        // System.out.print("Digite um caracter: ");
        // char caracter = sc.next().charAt(0);
        // System.out.println("Você digitou: " + caracter);

        // Exemplo 5
        System.out.print("Digite seu nome: ");
        String nome = sc.next();
        System.out.print("Digite sua idade: ");
        int idade = sc.nextInt();
        System.out.print("Digite um número: ");
        double decimal = sc.nextInt();

        System.out.println("Dados digitados:");
        System.out.println("Seu nome é: " + nome);
        System.out.println("Sua idade é: " + idade);
        System.out.println("O número é: " + decimal);

        sc.close();
    }
}
package repeticao.src;

import java.util.Scanner;

public class main {
    public static void main(String[] args) {
        System.out.println("Digite um número:");

        Scanner sc = new Scanner(System.in);
        int x = sc.nextInt();   

        int soma = 0;
        while (x != 0) {
            soma = soma + x;
            x = sc.nextInt();            
        }
        System.out.println("A soma dos números é: " + soma);

        sc.close();
    }
}
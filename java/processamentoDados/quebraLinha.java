package processamentoDados;

import java.util.Scanner;

public class QuebraLinha {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Ler um texto até a quebra de linha
        // System.out.println("Digite três palavras e pressione o Enter, após cada uma: ");
        
        // String s1, s2, s3;
        //  s1 = sc.nextLine();
        //  s2 = sc.nextLine();
        //  s3 = sc.nextLine();
         
        //  System.out.println("DADOS DIGITADOS: ");
        //  System.out.println(s1);
        //  System.out.println(s2);
        //  System.out.println(s3);

        // Quebra de linha pendente
         System.out.println("Digite três palavras e pressione o Enter, após cada uma: ");
        
        int x;
        String s1, s2, s3;

        x = sc.nextInt();
        s1 = sc.nextLine();
        s2 = sc.nextLine();
        s3 = sc.nextLine();
        
        System.out.println("DADOS DIGITADOS: ");
        System.out.println(x);
        sc.nextLine();
        System.out.println(s1);
        System.out.println(s2);
        System.out.println(s3);

        sc.close();
    }
}

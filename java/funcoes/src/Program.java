package funcoes.src;

import java.util.Scanner;

public class Program {
    public static void main(String[] args) {
        // double y = 25;
        // double x = Math.sqrt(y);
        // System.out.println("The square root of 25 is: " + x);

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter three numbers: ");
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();

        int higher = max(a, b, c);

        showResult(higher);

        sc.close();
    }

    public static int max(int x, int y, int z) {
        int max = x;

        if (y > max) {
            max = y;
        }

        if (z > max) {
            max = z;
        }

        return max;
    }

    public static void showResult(int value) {
        System.out.println("Higher = " + value);
    }
}

package operadoresBitwise.src;

public class Program {
    public static void main(String[] args) throws Exception {
        int a = 5; // 0101
        int b = 3; // 0011

        int andResult = a & b; // AND bitwise
        int orResult = a | b;  // OR bitwise
        int xorResult = a ^ b; // XOR bitwise
        int notResultA = ~a;   // NOT bitwise

        System.out.println("AND Result: " + andResult); // 1 (0001)
        System.out.println("OR Result: " + orResult);   // 7 (0111)
        System.out.println("XOR Result: " + xorResult); // 6 (0110)
        System.out.println("NOT Result of A: " + notResultA); // -6 (in two's complement)
    }
}

package funcoesInteressantesString.src;

public class Split {
    public static void main(String[] args) {
        String original = "abcde FGHIJ ABC abc DEFG    ";
        String[] vect = original.split(" ");
        String word1 = vect[0];
        String word2 = vect[1];
        String word3 = vect[2];

        System.out.println("Original: -" + original + "-");
        System.out.println("Split by space:");
        System.out.println(word1);
        System.out.println(word2);
        System.out.println(word3);
    }
}

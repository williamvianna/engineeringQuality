package processamentoDados;

public class exemplo {
    public static void main(String[] args) {
        
        int x, y;

        x = 5;
        y = 2 * x;

        System.out.println(x);
        System.out.println(y);
    }
}

class exemplo2 {
    public static void main(String[] args) {
        
        int x;
        double y;

        x = 5;
        y = 2 * x;

        System.out.println(x);
        System.out.println(y);
    }
}

class exemplo3 {
    public static void main(String[] args) {
        
        double b, B, h, area;

        b = 6.0;
        B = 8.0;
        h = 5.0;

        area = (b + B) / 2.0 * h;

        System.out.println(area);
    }
}

class exemplo4 {
    public static void main(String[] args) {
        
        float b, B, h, area;

        b = 6f;
        B = 8f;
        h = 5f;

        area = (b + B) / 2f * h;

        System.out.println(area);
    }
}

class exemplo5 {
    public static void main(String[] args) {
        
        int a, b;
        double resultado;

        a = 5;
        b = 2;

        resultado = (double) a / b;

        System.out.println(resultado);
    }
}

class exemplo6 {
    public static void main(String[] args) {
        
        double a;
        int b;

        a = 5.0;
        b = (int) a;

        System.out.println(b);
    }
}
import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        int h;
        Scanner opcion = new Scanner(System.in);
        System.out.println("Calculadora de 1-Dam");
        System.out.println("1-Sumar");
        System.out.println("2-Restar");
        System.out.println("3-Multiplicar");
        System.out.println("4-Dividir");
        System.out.println("5-Salir");
        System.out.println("Elige una opción (1-5): ");
        h = opcion.nextInt();

        if (h == 1 ){
            System.out.println("Vamos hacer una suma");
            int a;
            int b;
            Scanner lecturasuma1 = new Scanner(System.in);
            System.out.println("Dame el primer numero: ");
            a = lecturasuma1.nextInt();
            Scanner lecturasuma2 = new Scanner(System.in);
            System.out.println("Dame el segundo numero: ");
            b = lecturasuma2.nextInt();
            double c = a + b;
            System.out.println("El resultado seria: " + c);

        } else if (h == 2) {
            System.out.println("Vamos hacer una resta");
            int a;
            int b;
            Scanner lecturaresta1 = new Scanner(System.in);
            Scanner lecturaresta2 = new Scanner(System.in);
            System.out.println("Dame tu primer numero: ");
            a = lecturaresta1.nextInt();
            System.out.println("Dame tu segundo numero: ");
            b = lecturaresta2.nextInt();
            int c = a - b;
            System.out.println("El resultado de tu resta: "+ c);
        }
            if (h == 3){
                System.out.println("Vamos hacer una multiplicación");
                int a;
                int b;
                Scanner lecturamulti1 = new Scanner(System.in);
                Scanner lecturamulti2 = new Scanner(System.in);
                System.out.println("Dame tu primer numero: ");
                a = lecturamulti1.nextInt();
                System.out.println("Dame tu segundo numero: ");
                b = lecturamulti2.nextInt();
                int c = a * b;
                System.out.println("El resultado de tu multiplicación es: " + c);

        } else if (h == 4) {
                System.out.println("Vamos hacer una division");
                float a;
                float b;
                Scanner lecturaDivi1 = new Scanner(System.in);
                Scanner lecturaDivi2 = new Scanner(System.in);
                System.out.println("Dame tu primer numero: ");
                a = lecturaDivi1.nextFloat();
                System.out.println("Dame tu segundo numero: ");
                b = lecturaDivi2.nextFloat();
                float c = a / b;
                System.out.println("El resultado de tu division es: "+ c);
            } if (h == 5){
            System.out.println("Fin de la programación");
        }

    }
    }

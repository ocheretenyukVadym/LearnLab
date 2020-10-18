package com.ocheretenyuk;

import java.util.InputMismatchException;
import java.util.Random;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int size = 0;
        size = setSizeOfArray(size, scan);

        while (size <= 0) {
            System.out.println("The size of the array cannot be negative or 0.");
            size = setSizeOfArray(size, scan);
        }

        int array[] = new int[size];

        System.out.println("Fill the array from the console or random?");
        System.out.print("(C/R): ");

        switch (scan.next().charAt(0)) {
            case 'C':
                setArrayFromScanner(array, scan);
                break;
            case 'R':
                System.out.print("Set max number: ");
                setRandomArray(array, scan.nextInt());
                break;
            default:
                System.out.println("Incorrect input");
                return;

        }
        bubleSort(array);
        outArray(array);
    }

    public static int setSizeOfArray(int size, Scanner scan) {
        System.out.print("Enter size of array: ");
        try {
            size = scan.nextInt();
        } catch (Exception InputMismatchException) {
            System.out.println("Only numbers!");
            throw new InputMismatchException("\"Refresh this app\"");
        }
        return size;
    }

    public static int[] setRandomArray(int[] array, int maxNumber) {
        Random rn = new Random();
        for (int i = 0; i < array.length; i++) {
            array[i] = rn.nextInt(maxNumber) + 1;
        }
        return array;
    }

    public static int[] setArrayFromScanner(int[] array, Scanner sc) {
        for (int i = 0; i < array.length; i++) {
            System.out.print(i + 1 + " number: ");
            array[i] = sc.nextInt();
        }
        return array;
    }

    public static int[] bubleSort(int[] array) {
        for (int i = 0; i < array.length - 1; i++) {
            for (int j = 0; j < array.length - 1 - i; j++) {
                if (array[j] > array[j + 1]) {
                    int temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
        return array;
    }

    public static void outArray(int[] array) {
        System.out.println("Your sorted array: ");
        for (int i = 0; i < array.length; i++) {
            System.out.print(array[i] + " ");
        }
    }
}





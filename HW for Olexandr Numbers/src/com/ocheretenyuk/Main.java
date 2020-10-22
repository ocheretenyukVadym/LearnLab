package com.ocheretenyuk;

import java.util.stream.Stream;

public class Main {

    public static void main(String[] args) {

        printEvenNumbers(10);

        printFibonacciNumbers(10);

    }

    public static void printFibonacciNumbers(int limit) {
        System.out.println("First " + limit + " Fibonacci numbers: ");
        Stream.iterate(new int[]{1, 1}, array -> new int[]{array[1], array[0] + array[1]})
                .limit(limit)
                .map(t -> t[0])
                .forEach(System.out::println);
    }

    public static void printEvenNumbers(int limit) {
        System.out.println("First " + limit + " even numbers: ");
        Stream.iterate(1, num -> num += 1)
                .filter(num -> num % 2 == 0)
                .limit(limit)
                .forEach(num -> System.out.println(num));
    }
}

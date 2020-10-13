package com.ocheretenyuk;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        boolean isBoxFree;
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter volume box: ");
        Box box = new Box(sc.nextInt()); // or: box.setVolume(20);
        do{
            System.out.print("Enter volume shape, for add to box: ");
            Shape shape = new Shape(sc.nextInt());
            isBoxFree = box.add(shape);
        } while(isBoxFree);
    }
}

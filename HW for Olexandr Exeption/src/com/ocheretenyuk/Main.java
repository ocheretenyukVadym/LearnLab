package com.ocheretenyuk;

public class Main {

    public static void main(String[] args) {

        com.ocheretenyuk.LinkedList list = new LinkedList();
        list.add("First");
        list.add("Second");
        list.add("Thirst");

        System.out.println("   ");

        list.remove(1);
//        list.remove(3);
        try {
            System.out.println(list.get(0));
            System.out.println(list.get(1));
            System.out.println(list.get(2));
        } catch (ElementNotFoundExeption e){
            throw new ElementNotFoundExeption("There is no such element", e);
        }

        System.out.println("Size: " + list.size());
    }
}

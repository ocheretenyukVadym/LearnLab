package com.ocheretenyuk;

import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Objects;

public class Main {

    public static void main(String[] args) {

        com.ocheretenyuk.LinkedList list = new LinkedList();
        list.add("First");
        list.add("Second");
        list.add("Thirst");

        System.out.println("   ");

        System.out.println( list.get(0));
        System.out.println(list.get(1));
        System.out.println(list.get(2));

        System.out.println("   ");
        
        list.print(0);
        list.print(1);
        list.print(2);

    }

    public static void checkClassAnnotations(LinkedList list){
        if (Objects.isNull(list)) {
            throw new ElementNotFoundException("The object to serialize is null");
        }
        for (Method m : list.getClass().getDeclaredMethods()){
            if (m.isAnnotationPresent(NotAReliableMethod.class)){
                NotAReliableMethod nrm = m.getAnnotation(NotAReliableMethod.class);
                System.out.println(nrm.message() + nrm.name() + nrm.offer());
            }
        }

    }
}

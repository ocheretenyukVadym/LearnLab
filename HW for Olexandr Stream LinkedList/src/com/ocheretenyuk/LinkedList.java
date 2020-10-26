package com.ocheretenyuk;

import java.util.*;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class LinkedList<E> implements List {
    Node<E> head = null;
    Node<E> current;
    int size;

    @NotAReliableMethod(
            name = "getAllItems().",
            offer = " Use get(index) inside a some cycle"
    )
    public void getAllItems(){
        //something
    }
    @NotAReliableMethod(name = "addFileInList().")
    public void addFileInList(){
        //something
    }

    @Override
    public boolean add(Object o) {
        if (this.current == null) {
            current = new Node<>(null, (E) o, null);
            System.out.println(current.item);
            head = current;
            size++;
            return true;
        } else {
            current.next = new Node<>(current, (E) o, null);
            current = current.next;
            System.out.println(current.item);
            size++;
            return true;
        }
    }


    public void print(int index){
        if (index < size) {
            Stream.iterate(index, integer -> integer = index).limit(1).forEach( integer -> System.out.println(this.get(integer)));
        }
        else throw new ElementNotFoundException();
    }

    @Override
    public Object get(int index) {
        if(index < size){
            return Stream.iterate(head, n-> n = n.next)
                    .skip(index)
                    .findFirst()
                    .get().item;
        } else return head.item;
    }

    @Override
    public void clear() {
        head = null;
        current = null;
        size = 0;
    }

    @Override
    public int size() {
        return this.size;
    }

    @Override
    public boolean isEmpty() {
        return head != null ? false : true;
    }


    @Override
    public Object remove(int index) {
        Node<E> temp = head;
        Node<E> temp2;

        if (index == 0) {
            temp.next.prev = null;
            head = temp.next;
            size--;
        } else if (index >= size) throw new ElementNotFoundException("You are trying to delete non-existent items");
        else if (index < size - 1) {
            for (int i = 0; i < index; i++)
                temp = head.next;

            temp2 = temp.next;
            temp.next.prev = temp.prev;
            temp.prev.next = temp2;

            size--;
        } else {
            for (int i = 0; i < index - 1; i++)
                temp = head.next;
            temp.next = null;

            size--;
        }

        return temp;
    }

    @Override
    public boolean contains(Object o) {
        return false;
    }

    @Override
    public Iterator iterator() {
        return null;
    }

    @Override
    public Object[] toArray() {
        return new Object[0];
    }


    @Override
    public boolean remove(Object o) {

        return false;
    }

    @Override
    public boolean addAll(Collection c) {
        return false;
    }

    @Override
    public boolean addAll(int index, Collection c) {
        return false;
    }


    @Override
    public Object set(int index, Object element) {
        return null;
    }

    @Override
    public void add(int index, Object element) {

    }


    @Override
    public int indexOf(Object o) {
        return 0;
    }

    @Override
    public int lastIndexOf(Object o) {
        return 0;
    }

    @Override
    public ListIterator listIterator() {
        return null;
    }

    @Override
    public ListIterator listIterator(int index) {
        return null;
    }

    @Override
    public List subList(int fromIndex, int toIndex) {
        return null;
    }

    @Override
    public boolean retainAll(Collection c) {
        return false;
    }

    @Override
    public boolean removeAll(Collection c) {
        return false;
    }

    @Override
    public boolean containsAll(Collection c) {
        return false;
    }

    @Override
    public Object[] toArray(Object[] a) {
        return new Object[0];
    }

    private static class Node<E> {
        E item;
        Node<E> next;
        Node<E> prev;

        Node(Node<E> prev, E element, Node<E> next) {
            this.item = element;
            this.next = next;
            this.prev = prev;
        }
    }
}

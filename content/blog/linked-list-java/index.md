---
title: "Linked List Java"
date: 2023-03-10T09:32:40+05:30
draft: true 
tags: ["programming"]
---

Java linked list implementation for my friends' reference.

```java
public class LinkedList {    
    int size;
    Node head;
    Node tail;

    public void insert(int value) {
        if (head == null) {
            head = new Node(null, null, value);
            tail = head;
            return;
        }

        tail.next = new Node(tail, null, value);
        tail = tail.next;
    }

    public void remove(int value){
        Node current_node = head;
        while (current_node != null) {
            if (current_node.item == value) {
                current_node.previous.next = current_node.next;
                current_node.next.previous = current_node.previous;
                return;
            }

            current_node = current_node.next;
        }
    }

    public void print() {
        Node current_node = head;
        while (current_node != null) {
            System.out.println(current_node.item);
            current_node = current_node.next;
        }
    }

    private class Node {
        int item;
        Node next;
        Node previous;

        Node(Node previous, Node next, int value) {
            this.item = value;
            this.next = next;
            this.previous = previous;
        }
    }

    // main method for quick testing
    public static void main(String[] args) {
        LinkedList list = new LinkedList();
        list.insert(10);
        list.insert(13);
        list.insert(17);
        list.insert(16);
        list.insert(14);
        list.remove(17);

        list.print();
    }
}
```
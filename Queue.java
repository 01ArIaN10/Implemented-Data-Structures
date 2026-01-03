public class Queue {
    
    // Node class for linked list
    private static class Node {
        int data;
        Node next;
        
        Node(int data) {
            this.data = data;
            this.next = null;
        }
    }
    
    private Node front;
    private Node rear;
    private int size;
    
    // Initialize queue
    public Queue() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }
    
    // Check if queue is empty
    public boolean isEmpty() {
        return size == 0;
    }
    
    // Get queue size
    public int getSize() {
        return size;
    }
    
    // Enqueue (push) - add element at rear
    public void push(int value) {
        Node newNode = new Node(value);
        
        if (isEmpty()) {
            front = newNode;
        } else {
            rear.next = newNode;
        }
        
        rear = newNode;
        size++;
        System.out.println("Enqueued: " + value);
    }
    
    // Dequeue (pop) - remove element from front
    public int pop() {
        if (isEmpty()) {
            System.out.println("Queue is empty!");
            return -1;
        }
        
        int value = front.data;
        front = front.next;
        size--;
        
        if (isEmpty()) {
            rear = null;
        }
        
        System.out.println("Dequeued: " + value);
        return value;
    }
    
    // Peek at front element
    public int peek() {
        if (isEmpty()) {
            System.out.println("Queue is empty!");
            return -1;
        }
        return front.data;
    }
    
    // Display queue
    public void display() {
        if (isEmpty()) {
            System.out.println("Queue is empty!");
            return;
        }
        
        System.out.print("Queue: ");
        Node current = front;
        while (current != null) {
            System.out.print(current.data + " ");
            current = current.next;
        }
        System.out.println();
    }
    
    // Example usage
    public static void main(String[] args) {
        Queue queue = new Queue();
        
        // Enqueue elements
        queue.push(10);
        queue.push(20);
        queue.push(30);
        queue.push(40);
        
        // Display queue
        queue.display();
        
        // Peek at front
        System.out.println("Front element: " + queue.peek());
        
        // Dequeue elements
        queue.pop();
        queue.pop();
        
        // Display after dequeuing
        queue.display();
        
        System.out.println("Queue size: " + queue.getSize());
    }
}

class MaxHeap {
    constructor() {
        this.heap = [];
    }
    
    // Get parent index
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }
    
    // Get left child index
    getLeftChildIndex(index) {
        return 2 * index + 1;
    }
    
    // Get right child index
    getRightChildIndex(index) {
        return 2 * index + 2;
    }
    
    // Swap two elements
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
    
    // Insert element into max heap
    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
        console.log(`Inserted ${value}`);
    }
    
    // Move element up to maintain heap property
    heapifyUp(index) {
        while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            
            if (this.heap[index] > this.heap[parentIndex]) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }
    
    // Remove and return maximum element (root)
    extractMax() {
        if (this.heap.length === 0) {
            console.log("Heap is empty!");
            return null;
        }
        
        if (this.heap.length === 1) {
            const max = this.heap.pop();
            console.log(`Extracted max: ${max}`);
            return max;
        }
        
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        
        console.log(`Extracted max: ${max}`);
        return max;
    }
    
    // Move element down to maintain heap property
    heapifyDown(index) {
        while (true) {
            let largest = index;
            const leftChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);
            
            if (leftChildIndex < this.heap.length && 
                this.heap[leftChildIndex] > this.heap[largest]) {
                largest = leftChildIndex;
            }
            
            if (rightChildIndex < this.heap.length && 
                this.heap[rightChildIndex] > this.heap[largest]) {
                largest = rightChildIndex;
            }
            
            if (largest !== index) {
                this.swap(index, largest);
                index = largest;
            } else {
                break;
            }
        }
    }
    
    // Peek at maximum element (root)
    peek() {
        if (this.heap.length === 0) {
            console.log("Heap is empty!");
            return null;
        }
        return this.heap[0];
    }
    
    // Check if heap is empty
    isEmpty() {
        return this.heap.length === 0;
    }
    
    // Get heap size
    size() {
        return this.heap.length;
    }
    
    // Display heap
    display() {
        if (this.isEmpty()) {
            console.log("Heap is empty!");
            return;
        }
        console.log("Heap: " + this.heap.join(" "));
    }
}

// Example usage
const heap = new MaxHeap();

// Insert elements
heap.insert(10);
heap.insert(20);
heap.insert(15);
heap.insert(30);
heap.insert(5);
heap.insert(25);

// Display heap
heap.display();

// Peek at max
console.log("Max element: " + heap.peek());

// Extract max elements
heap.extractMax();
heap.extractMax();

// Display after extraction
heap.display();

console.log("Heap size: " + heap.size());

# Data Structures Implementation

**Shiraz University Project**

This repository contains implementations of fundamental data structures in multiple programming languages. Each implementation includes core operations with detailed explanations and practical usage examples.

---

## Table of Contents
1. [Stack (C)](#stack-c)
2. [Queue (Java)](#queue-java)
3. [Max Heap (JavaScript)](#max-heap-javascript)
4. [AVL Tree (Python)](#avl-tree-python)
5. [Trie (JavaScript)](#trie-javascript)
6. [Developer Information](#developer-information)

---

## Stack (C)

**Language**: C  
**File**: `Stack.c`

### Implementation Details

**Data Structure**: Array-based implementation using a fixed-size array

#### Core Functions:

- **`push(value)`**
  - Adds an element to the top of the stack
  - Uses index `top` to track the topmost position
  - Checks if stack is full before insertion
  - Time Complexity: O(1)

- **`pop()`**
  - Removes and returns the element from the top of the stack
  - Decrements the `top` index
  - Checks for underflow conditions
  - Time Complexity: O(1)

- **`peek()`**
  - Returns the top element without removing it
  - Used to view the next element to be popped
  - Time Complexity: O(1)

- **`display()`**
  - Prints all elements in the stack from bottom to top
  - Useful for debugging and visualization

### How It Works

We use a simple array with a `top` pointer:
- Initialize `top = -1` (empty stack)
- Push increments `top` and stores the value
- Pop decrements `top` and retrieves the value
- Maximum capacity is defined by `MAX_SIZE` (100)

### Usage Example
```c
Stack* stack = create_stack();
push(stack, 10);  // Stack: [10]
push(stack, 20);  // Stack: [10, 20]
push(stack, 30);  // Stack: [10, 20, 30]
pop(stack);       // Returns 30, Stack: [10, 20]
```

---

## Queue (Java)

**Language**: Java  
**File**: `Queue.java`

### Implementation Details

**Data Structure**: Linked List-based implementation using Node objects

#### Core Functions:

- **`push(value)` (Enqueue)**
  - Adds an element to the rear (end) of the queue
  - Creates a new Node and links it to the `rear` pointer
  - If queue is empty, the new node becomes both `front` and `rear`
  - Time Complexity: O(1)

- **`pop()` (Dequeue)**
  - Removes and returns the element from the front of the queue
  - Updates `front` pointer to the next node
  - Handles edge case when queue becomes empty
  - Time Complexity: O(1)

- **`peek()`**
  - Returns the front element without removing it
  - Useful for checking the next element to be dequeued
  - Time Complexity: O(1)

- **`display()`**
  - Traverses the linked list and prints all elements
  - Visualizes the queue state

### How It Works

We use a linked list with `front` and `rear` pointers:
- Each element is a Node with `data` and `next` pointer
- Push adds to the rear and updates the `rear` pointer
- Pop removes from the front and updates the `front` pointer
- Size is tracked for efficient operations

### Usage Example
```java
Queue queue = new Queue();
queue.push(10);   // Queue: [10]
queue.push(20);   // Queue: [10, 20]
queue.push(30);   // Queue: [10, 20, 30]
queue.pop();      // Returns 10, Queue: [20, 30]
```

---

## Max Heap (JavaScript)

**Language**: JavaScript  
**File**: `Heap.js`

### Implementation Details

**Data Structure**: Array-based complete binary tree with max-heap property

#### Core Functions:

- **`insert(value)`**
  - Adds a new element to the end of the array
  - Calls `heapifyUp()` to restore heap property
  - Compares with parent and swaps if necessary
  - Time Complexity: O(log n)

- **`extractMax()`**
  - Removes and returns the maximum element (root)
  - Moves last element to root position
  - Calls `heapifyDown()` to restore heap property
  - Time Complexity: O(log n)

- **`heapifyUp(index)`**
  - Moves element upward to correct position
  - While element is greater than parent, swap and continue
  - Ensures max element is at root
  - Used after insertion

- **`heapifyDown(index)`**
  - Moves element downward to correct position
  - Compares with children and swaps with larger child
  - Continues until heap property is satisfied
  - Used after extraction

- **`peek()`**
  - Returns the maximum element (root) without removing
  - Time Complexity: O(1)

### How It Works

Array-based heap with parent-child relationships:
- Parent at index `i` has children at `2*i + 1` (left) and `2*i + 2` (right)
- Maximum element always at index 0
- Insertion appends to end and bubbles up
- Extraction removes root and reorganizes from top down

### Usage Example
```javascript
const heap = new MaxHeap();
heap.insert(10);  // Heap: [10]
heap.insert(20);  // Heap: [20, 10]
heap.insert(15);  // Heap: [20, 10, 15]
heap.insert(30);  // Heap: [30, 20, 15, 10]
heap.extractMax(); // Returns 30, Heap: [20, 10, 15]
```

---

## AVL Tree (Python)

**Language**: Python  
**File**: `AVL.py`

### Implementation Details

**Data Structure**: Self-balancing binary search tree with automatic rotations

#### Core Functions:

- **`add(value)`**
  - Inserts a new value into the AVL tree
  - Uses recursive insertion maintaining BST property
  - Calls rebalancing rotations if needed
  - Checks balance factor after each insertion
  - Time Complexity: O(log n)

- **`search(value)`**
  - Searches for a value in the tree
  - Uses binary search property to navigate
  - Returns True if found, False otherwise
  - Time Complexity: O(log n)

- **`delete(value)`**
  - Removes a node with given value
  - Handles three cases: leaf, one child, two children
  - Rebalances tree after deletion
  - Maintains AVL properties
  - Time Complexity: O(log n)

- **`rotate_right(node)` and `rotate_left(node)`**
  - Rebalances unbalanced subtrees
  - Right rotation for left-heavy cases
  - Left rotation for right-heavy cases
  - Updates heights after rotation

- **`get_balance(node)`**
  - Calculates balance factor
  - Balance = height of left subtree - height of right subtree
  - Used to determine when rotations are needed

### How It Works

Each node contains:
- `value`: The data
- `left`: Left child reference
- `right`: Right child reference
- `height`: Height for balancing

Four rotation cases handled:
1. **Left-Left**: Single right rotation
2. **Right-Right**: Single left rotation
3. **Left-Right**: Left rotation on left child, then right rotation
4. **Right-Left**: Right rotation on right child, then left rotation

Height is updated after each operation to maintain O(log n) operations.

### Usage Example
```python
avl = AVLTree()
avl.add(10)    # Add 10
avl.add(20)    # Add 20
avl.add(30)    # Add 30, triggers rotation
avl.search(20) # Returns True
avl.delete(20) # Removes 20 and rebalances
avl.inorder_traversal()  # Displays: 10 30
```

---

## Trie (JavaScript)

**Language**: JavaScript  
**File**: `Trie.js`

### Implementation Details

**Data Structure**: Tree-based structure with nodes containing character mappings

#### Core Functions:

- **`insert(word)`**
  - Adds a word to the Trie
  - Traverses character by character, creating nodes as needed
  - Marks the last node as end of word
  - Time Complexity: O(m) where m is word length

- **`search(word)`**
  - Searches for an exact word in the Trie
  - Returns true if complete word exists, false otherwise
  - Validates that last character node is marked as end of word
  - Time Complexity: O(m) where m is word length

- **`startsWith(prefix)`**
  - Finds all words that start with given prefix
  - Traverses to prefix path then collects all complete words
  - Returns array of matching words
  - Time Complexity: O(n) where n is total characters in all words

- **`delete(word)`**
  - Removes a word from the Trie
  - Recursively unmarks end of word and removes unused nodes
  - Only deletes nodes that are not part of other words
  - Time Complexity: O(m) where m is word length

- **`display()`**
  - Displays all words stored in the Trie
  - Uses depth-first traversal to collect all complete words
  - Useful for visualization and debugging

### How It Works

Trie uses a tree structure with nodes:
- Each node has `children` (object mapping characters to child nodes)
- `isEndOfWord` flag marks if a character is end of any word
- Root node is empty and serves as starting point
- Characters are paths from root to leaves
- Multiple words can share common prefixes

For example, words "car" and "cat" share prefix "ca":
```
root → c → a → r (end of word: "car")
            → t (end of word: "cat")
```

### Usage Example
```javascript
const trie = new Trie();

// Insert words
trie.insert("apple");
trie.insert("app");
trie.insert("application");
trie.insert("banana");

// Search for exact words
trie.search("app");           // Returns true
trie.search("appl");          // Returns false

// Search with prefix
trie.startsWith("app");       // Returns ["app", "apple", "application"]
trie.startsWith("ban");       // Returns ["banana"]

// Display all words
trie.display();               // Displays: app, apple, application, banana

// Delete word
trie.delete("app");
trie.search("app");           // Returns false
```

---

## Developer Information

**Developer**: Arian  
**University**: Shiraz University  
**Project**: Data Structures Implementation  
**Date**: January 2026


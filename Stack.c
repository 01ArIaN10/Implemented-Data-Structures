#include <stdio.h>
#include <stdlib.h>

#define MAX_SIZE 100

typedef struct {
    int items[MAX_SIZE];
    int top;
} Stack;

// Initialize an empty stack
Stack* create_stack() {
    Stack* stack = (Stack*)malloc(sizeof(Stack));
    stack->top = -1;
    return stack;
}

// Check if stack is empty
int is_empty(Stack* stack) {
    return stack->top == -1;
}

// Check if stack is full
int is_full(Stack* stack) {
    return stack->top == MAX_SIZE - 1;
}

// Push element onto stack
void push(Stack* stack, int value) {
    if (is_full(stack)) {
        printf("Stack overflow!\n");
        return;
    }
    stack->items[++stack->top] = value;
    printf("Pushed %d\n", value);
}

// Pop element from stack
int pop(Stack* stack) {
    if (is_empty(stack)) {
        printf("Stack underflow!\n");
        return -1;
    }
    int value = stack->items[stack->top--];
    printf("Popped %d\n", value);
    return value;
}

// Peek at top element
int peek(Stack* stack) {
    if (is_empty(stack)) {
        printf("Stack is empty!\n");
        return -1;
    }
    return stack->items[stack->top];
}

// Display stack
void display(Stack* stack) {
    if (is_empty(stack)) {
        printf("Stack is empty!\n");
        return;
    }
    printf("Stack: ");
    for (int i = 0; i <= stack->top; i++) {
        printf("%d ", stack->items[i]);
    }
    printf("\n");
}

// Example usage
int main() {
    Stack* stack = create_stack();
    
    // Push elements
    push(stack, 10);
    push(stack, 20);
    push(stack, 30);
    push(stack, 40);
    
    // Display stack
    display(stack);
    
    // Peek at top
    printf("Top element: %d\n", peek(stack));
    
    // Pop elements
    pop(stack);
    pop(stack);
    
    // Display after popping
    display(stack);
    
    free(stack);
    return 0;
}

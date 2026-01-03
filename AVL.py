class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
        self.height = 1


class AVLTree:
    def __init__(self):
        self.root = None
    
    # Get height of node
    def get_height(self, node):
        if node is None:
            return 0
        return node.height
    
    # Get balance factor
    def get_balance(self, node):
        if node is None:
            return 0
        return self.get_height(node.left) - self.get_height(node.right)
    
    # Right rotation
    def rotate_right(self, node):
        left_child = node.left
        temp = left_child.right
        
        left_child.right = node
        node.left = temp
        
        node.height = 1 + max(self.get_height(node.left), self.get_height(node.right))
        left_child.height = 1 + max(self.get_height(left_child.left), self.get_height(left_child.right))
        
        return left_child
    
    # Left rotation
    def rotate_left(self, node):
        right_child = node.right
        temp = right_child.left
        
        right_child.left = node
        node.right = temp
        
        node.height = 1 + max(self.get_height(node.left), self.get_height(node.right))
        right_child.height = 1 + max(self.get_height(right_child.left), self.get_height(right_child.right))
        
        return right_child
    
    # Add (insert) a value
    def add(self, value):
        self.root = self._add_recursive(self.root, value)
        print(f"Added {value}")
    
    def _add_recursive(self, node, value):
        if node is None:
            return Node(value)
        
        if value < node.value:
            node.left = self._add_recursive(node.left, value)
        elif value > node.value:
            node.right = self._add_recursive(node.right, value)
        else:
            # Duplicate values not allowed
            return node
        
        # Update height
        node.height = 1 + max(self.get_height(node.left), self.get_height(node.right))
        
        # Get balance factor
        balance = self.get_balance(node)
        
        # Left Left case
        if balance > 1 and value < node.left.value:
            return self.rotate_right(node)
        
        # Right Right case
        if balance < -1 and value > node.right.value:
            return self.rotate_left(node)
        
        # Left Right case
        if balance > 1 and value > node.left.value:
            node.left = self.rotate_left(node.left)
            return self.rotate_right(node)
        
        # Right Left case
        if balance < -1 and value < node.right.value:
            node.right = self.rotate_right(node.right)
            return self.rotate_left(node)
        
        return node
    
    # Search for a value
    def search(self, value):
        result = self._search_recursive(self.root, value)
        if result:
            print(f"Found {value}")
            return True
        else:
            print(f"Value {value} not found")
            return False
    
    def _search_recursive(self, node, value):
        if node is None:
            return False
        
        if value == node.value:
            return True
        elif value < node.value:
            return self._search_recursive(node.left, value)
        else:
            return self._search_recursive(node.right, value)
    
    # Delete a value
    def delete(self, value):
        self.root = self._delete_recursive(self.root, value)
        print(f"Deleted {value}")
    
    def _delete_recursive(self, node, value):
        if node is None:
            return None
        
        if value < node.value:
            node.left = self._delete_recursive(node.left, value)
        elif value > node.value:
            node.right = self._delete_recursive(node.right, value)
        else:
            # Node with no children (leaf)
            if node.left is None and node.right is None:
                return None
            
            # Node with one child
            if node.left is None:
                return node.right
            if node.right is None:
                return node.left
            
            # Node with two children
            min_larger_node = self._find_min(node.right)
            node.value = min_larger_node.value
            node.right = self._delete_recursive(node.right, min_larger_node.value)
        
        if node is None:
            return None
        
        # Update height
        node.height = 1 + max(self.get_height(node.left), self.get_height(node.right))
        
        # Get balance factor
        balance = self.get_balance(node)
        
        # Left Left case
        if balance > 1 and self.get_balance(node.left) >= 0:
            return self.rotate_right(node)
        
        # Left Right case
        if balance > 1 and self.get_balance(node.left) < 0:
            node.left = self.rotate_left(node.left)
            return self.rotate_right(node)
        
        # Right Right case
        if balance < -1 and self.get_balance(node.right) <= 0:
            return self.rotate_left(node)
        
        # Right Left case
        if balance < -1 and self.get_balance(node.right) > 0:
            node.right = self.rotate_right(node.right)
            return self.rotate_left(node)
        
        return node
    
    # Find minimum value node
    def _find_min(self, node):
        current = node
        while current.left is not None:
            current = current.left
        return current
    
    # Inorder traversal (for display)
    def inorder_traversal(self):
        result = []
        self._inorder_recursive(self.root, result)
        print("Inorder: " + " ".join(map(str, result)))
        return result
    
    def _inorder_recursive(self, node, result):
        if node is not None:
            self._inorder_recursive(node.left, result)
            result.append(node.value)
            self._inorder_recursive(node.right, result)


# Example usage
if __name__ == "__main__":
    avl = AVLTree()
    
    # Add elements
    avl.add(10)
    avl.add(20)
    avl.add(30)
    avl.add(40)
    avl.add(50)
    avl.add(25)
    
    # Display tree (inorder)
    avl.inorder_traversal()
    
    # Search for elements
    avl.search(25)
    avl.search(100)
    
    # Delete element
    avl.delete(20)
    
    # Display after deletion
    avl.inorder_traversal()

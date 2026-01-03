class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    // Insert a word into the Trie
    insert(word) {
        let node = this.root;
        
        for (let char of word) {
            // If character doesn't exist, create a new node
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        
        // Mark the end of word
        node.isEndOfWord = true;
        console.log(`Inserted: "${word}"`);
    }
    
    // Search for exact word in Trie
    search(word) {
        let node = this.root;
        
        for (let char of word) {
            // If character doesn't exist in path, word not found
            if (!node.children[char]) {
                console.log(`"${word}" not found`);
                return false;
            }
            node = node.children[char];
        }
        
        // Check if current node marks end of a word
        const found = node.isEndOfWord;
        console.log(`Search "${word}": ${found ? "Found" : "Not found"}`);
        return found;
    }
    
    // Search for words with given prefix
    startsWith(prefix) {
        let node = this.root;
        
        for (let char of prefix) {
            if (!node.children[char]) {
                console.log(`Words with prefix "${prefix}": None found`);
                return [];
            }
            node = node.children[char];
        }
        
        // Collect all words with this prefix
        let results = [];
        this._collectWords(node, prefix, results);
        
        console.log(`Words with prefix "${prefix}": ${results.join(", ") || "None"}`);
        return results;
    }
    
    // Helper function to collect all words starting from a node
    _collectWords(node, currentWord, results) {
        if (node.isEndOfWord) {
            results.push(currentWord);
        }
        
        for (let char in node.children) {
            this._collectWords(node.children[char], currentWord + char, results);
        }
    }
    
    // Delete a word from the Trie
    delete(word) {
        const deleteHelper = (node, word, index) => {
            if (index === word.length) {
                // Word doesn't exist
                if (!node.isEndOfWord) {
                    return false;
                }
                // Mark the node as not end of word
                node.isEndOfWord = false;
                // Return true if node has no children (can be deleted)
                return Object.keys(node.children).length === 0;
            }
            
            const char = word[index];
            if (!node.children[char]) {
                return false;
            }
            
            const shouldDeleteChild = deleteHelper(node.children[char], word, index + 1);
            
            if (shouldDeleteChild) {
                delete node.children[char];
                // Return true if current node has no children and is not end of another word
                return Object.keys(node.children).length === 0 && !node.isEndOfWord;
            }
            
            return false;
        };
        
        const deleted = deleteHelper(this.root, word, 0);
        console.log(`${deleted ? `Deleted: "${word}"` : `"${word}" not found to delete`}`);
        return deleted;
    }
    
    // Display all words in Trie
    display() {
        let words = [];
        this._collectWords(this.root, "", words);
        
        if (words.length === 0) {
            console.log("Trie is empty!");
        } else {
            console.log("All words in Trie: " + words.join(", "));
        }
        
        return words;
    }
}

// Example usage
const trie = new Trie();

// Insert words
trie.insert("apple");
trie.insert("app");
trie.insert("application");
trie.insert("apply");
trie.insert("banana");
trie.insert("band");
trie.insert("can");
trie.insert("cat");

// Display all words
trie.display();

// Search for exact words
trie.search("app");
trie.search("appl");
trie.search("banana");

// Search for words with prefix
trie.startsWith("app");
trie.startsWith("ba");
trie.startsWith("ca");

// Delete a word
trie.delete("app");
trie.display();

// Search after deletion
trie.search("app");

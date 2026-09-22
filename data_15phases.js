const DATA = [
  {
    "_tier": "stage1",
    "_tierLabel": "Stage 1: Foundations, Linear Memory & Complexity Analysis",
    "title": "Phase 1: Java Foundations, Math & Patterns",
    "vidCount": "L1: 90",
    "vidRange": "L1 Videos 1–90",
    "readiness": "Can write nested loops cleanly, execute base conversions, and verify prime numbers in O(√N).",
    "stops": [
      {
        "title": "Java Syntax, Flow Control & Loops",
        "range": "L1 Videos 1–10",
        "topics": "Hello World, Print Z, Variables & Data Types, If / Else If Conditionals, Grading System, While/For Loops, Scanner Input",
        "diff": "easy",
        "type": "pep1"
      },
      {
        "title": "Foundational Math & Number Theory",
        "range": "L1 Videos 11–34",
        "topics": "Primality Check O(√N), Primes till N, Fibonacci, Digits Extraction, Reverse/Rotate/Inverse Number, GCD & LCM (Euclid), Prime Factorization, Pythagorean Triplets, Benjamin Bulbs",
        "diff": "easy",
        "type": "pep1"
      },
      {
        "title": "Pattern Printing (Nested Loop Logic)",
        "range": "L1 Videos 35–74",
        "topics": "Patterns 1 to 20 (Symmetric diamonds, hollow triangles, numeric swastika, hour-glasses, diagonal crosses, arrow heads, W-pattern)",
        "diff": "easy",
        "type": "pep1"
      },
      {
        "title": "Functions & Number Base Systems",
        "range": "L1 Videos 75–90",
        "topics": "Functions & Stack Frames, Decimal ↔ Any Base Conversion, Any Base Addition, Subtraction, Multiplication",
        "diff": "easy",
        "type": "pep1"
      }
    ]
  },
  {
    "title": "Phase 2: Linear Memory, Core Tools & Complexity Analysis",
    "vidCount": "L1: 60",
    "vidRange": "L1 Videos 91–102, 131–136, 342–367, 370–374, 544–554",
    "readiness": "Understands JVM stack vs heap references, String Pool immutability, StringBuilder performance, and Big-O complexity.",
    "stops": [
      {
        "title": "1D Arrays & Reference Memory Model",
        "range": "L1 Videos 91–102",
        "topics": "Heap Arrays, Stack Reference Model, Span of Array, Linear Search, Bar Chart, Large Sum & Difference of Arrays",
        "diff": "easy",
        "type": "pep1"
      },
      {
        "title": "Strings, StringBuilders & ArrayLists (Memory Pool & Mutability)",
        "range": "L1 Videos 544–554",
        "topics": "String Pool & Interning, Immutability Mechanics, Palindromic Substrings, Compression, Toggle Case, ASCII Diff, String Permutations, StringBuilder O(1) Appends, ArrayList Resizing, Java for C++ Coders",
        "diff": "easy",
        "type": "pep1"
      },
      {
        "title": "OOP Basics & JVM Memory Trace",
        "range": "L1 Videos 131–136",
        "topics": "Classes, Objects, Stack Frames, Reference Passing vs Primitive Passing (Swap Games 1–3), Constructors, this Keyword",
        "diff": "easy",
        "type": "pep1"
      },
      {
        "title": "2D Arrays & Matrix Traversal Algorithms",
        "range": "L1 Videos 342–359",
        "topics": "Matrix Multiplication, Wave Traversal (Wakanda-1), Spiral Display, Exit Point, 90° In-Place Rotation (Transpose + Reflect), Shell Rotate, Diagonal Traversal, Saddle Point, Search in 2D Sorted Matrix",
        "diff": "med",
        "type": "pep1"
      },
      {
        "title": "Array Transformations & Elementary Search",
        "range": "L1 Videos 360–367, 370–374",
        "topics": "Reverse/Rotate/Inverse Array, Subarrays Extraction, Elementary Binary Search, Ceil & Floor, First & Last Index",
        "diff": "med",
        "type": "pep1"
      },
      {
        "title": "Asymptotic Complexity & Formal Big-O Analysis",
        "range": "Supplementary Mastery",
        "topics": "Big-O, Ω, Θ notation, Worst vs Average vs Amortized Complexity, Space Overhead, Recurrence Relation Master Theorem Basics",
        "diff": "easy",
        "type": "supp"
      }
    ]
  },
  {
    "_tier": "stage2",
    "_tierLabel": "Stage 2: Essential Patterns, Searching, Recursion & Backtracking",
    "title": "Phase 3: Essential Array, String & Hashing Patterns",
    "vidCount": "L1: 9 · L2: 45",
    "vidRange": "L1: 460–466, 500–501 · L2: 107–121, 126–142, 146–150, 154–161",
    "readiness": "Can solve subarray balance problems using prefix sums/hashmaps and apply two pointers and sliding windows.",
    "stops": [
      {
        "title": "HashMap & HashSet Foundations (Basic Usage)",
        "range": "L1 Videos 460–466, 500–501",
        "topics": "Hash Table O(1) Average Lookup, Highest Frequency Character, Get Common Elements 1 & 2 (Intersection), Longest Consecutive Sequence of Numbers",
        "diff": "easy",
        "type": "pep1"
      },
      {
        "title": "Prefix Sums, Suffix Sums & Difference Arrays",
        "range": "Supplementary Mastery",
        "topics": "Running Sum, Range Sum Queries O(1), Product of Array Except Self, Difference Array for Range Updates O(1)",
        "diff": "med",
        "type": "supp"
      },
      {
        "title": "Two-Pointer Technique (Opposite & Same Direction)",
        "range": "Supplementary Mastery",
        "topics": "Two Sum in Sorted Array, Remove Duplicates In-Place, Move Zeroes, Reverse Words, Container With Most Water, Trapping Rain Water (Two-Pointer O(1) Space)",
        "diff": "med",
        "type": "supp"
      },
      {
        "title": "Sliding Window Mastery (Fixed & Variable Sized)",
        "range": "Supplementary Mastery",
        "topics": "Fixed Window (Max Sum Subarray Size K), Variable Window (Longest Substring with At-most/Exact K Distinct, Subarray Product Less Than K)",
        "diff": "med",
        "type": "supp"
      },
      {
        "title": "L2: Advanced Subarray Sum Balance & Hash Windows",
        "range": "L2 Videos 107–112, 129, 137–142",
        "topics": "Find Number of Employees, Largest Subarray with 0 Sum, Count of Zero Sum Subarrays, Subarray Sum Equals K, Subarrays Divisible by K, Contiguous Array (Equal 0s and 1s), Equal 0s, 1s and 2s",
        "diff": "hard",
        "type": "pep2"
      },
      {
        "title": "L2: Hard Sliding Window & Exact Substring Counters",
        "range": "L2 Videos 113–121, 126–128",
        "topics": "Minimum Window Substring I & II, Longest Substring Without Repeating Characters, Longest Substring with Exactly K Distinct, Count of Substrings with At-most K Distinct, Max Consecutive Ones I & II, Equivalent Subarrays",
        "diff": "hard",
        "type": "pep2"
      },
      {
        "title": "L2: Advanced Multi-Sum, Anagrams & Frequency Matching",
        "range": "L2 Videos 130–136, 146–150, 154–161",
        "topics": "Find All Anagrams, K-Anagrams, Valid & Group Anagrams, Isomorphic Strings, Word Pattern, Pairs with Equal Sum, Fraction to Recurring Decimal, Rabbits in Forest, 4Sum II, Double Pair Array",
        "diff": "hard",
        "type": "pep2"
      }
    ]
  },
  {
    "title": "Phase 4: Recursion, Divide & Conquer, Sorting & Binary Search",
    "vidCount": "L1: 59",
    "vidRange": "L1 Videos 375–418, 494–496, 502–509, 511–513, 541",
    "readiness": "Can trace recursive call stacks via Euler tour, implement QuickSort/MergeSort, and execute binary search on answer spaces.",
    "stops": [
      {
        "title": "Recursion Fundamentals & Call Stack Simulation (Euler Tour)",
        "range": "L1 Videos 375–385",
        "topics": "Call Stack Trace, Base Case & Induction Hypothesis, Print Decreasing/Increasing, Factorial, Power Logarithmic O(log N), Print Zig-Zag, Tower of Hanoi",
        "diff": "easy",
        "type": "pep1"
      },
      {
        "title": "Recursive Array Operations & Linear Traversals",
        "range": "L1 Videos 386–397",
        "topics": "Display Array Recursively, Max of Array, First / Last / All Occurrences of Index",
        "diff": "easy",
        "type": "pep1"
      },
      {
        "title": "Recursion \"Get\" (Path Return) & \"Print\" (State Accumulation)",
        "range": "L1 Videos 398–418",
        "topics": "Get/Print Subsequences, Keypad Combinations, Stair Paths, Maze Paths with Jumps, String Permutations, Encoding Decoding",
        "diff": "med",
        "type": "pep1"
      },
      {
        "title": "Classic Sorting Algorithms & QuickSelect",
        "range": "L1 Videos 494–496, 502–509, 511–513, 541",
        "topics": "Bubble, Selection, Insertion Sort, Merge Sort (Divide & Conquer), QuickSort (Partitioning), QuickSelect (Average O(N), Worst O(N²)), Count Sort, Radix Sort, Sort 01 / 012, Sort Dates, Pivot in Rotated Array",
        "diff": "med",
        "type": "pep1"
      },
      {
        "title": "Binary Search Mastery & Search Space Monotonicity",
        "range": "Supplementary Mastery",
        "topics": "Search Space Monotonicity, Lower/Upper Bound, Search in Rotated Sorted Array, Find Peak Element, Binary Search on Answer (Koko Eating Bananas, Capacity to Ship Packages, Aggressive Cows)",
        "diff": "hard",
        "type": "supp"
      }
    ]
  },
  {
    "title": "Phase 5: Bit Manipulation, State-Space Search & Backtracking",
    "vidCount": "L1: 10 · L2: 69",
    "vidRange": "L1: 368–369, 419–426 · L2: 1–66, 79–80, 82",
    "readiness": "Can generate subsets using bitmasks, solve constraint-satisfaction puzzles via backtracking, and undo state correctly.",
    "stops": [
      {
        "title": "Bit Manipulation Fundamentals & Bitmask Subsets",
        "range": "L1 Videos 368–369 + Supplement",
        "topics": "Bitwise AND/OR/XOR/NOT/Shifts, Check/Set/Clear/Toggle Bit, Check Power of 2, Brian Kernighan's Algorithm, Single Number, Subsets of an Array using Bitmasks (L1 Videos 368–369)",
        "diff": "med",
        "type": "pep1"
      },
      {
        "title": "Foundational Backtracking & Board Traversals",
        "range": "L1 Videos 419–426",
        "topics": "Flood Fill Algorithm, Target Sum Subsets via DFS, N-Queens Problem (N×N Board), Knight's Tour",
        "diff": "hard",
        "type": "pep1"
      },
      {
        "title": "L2: Permutations, Combinations & Selection Models",
        "range": "L2 Videos 20–39",
        "topics": "Box Chooses Item vs Item Chooses Box paradigms, Words K-Selection 1 & 2, K-Length Words 1 & 2, N-Knights Combinations, Coin Change Combinations 1 & 2",
        "diff": "hard",
        "type": "pep2"
      },
      {
        "title": "L2: Advanced Puzzles, Branch & Bound & Constraint Satisfaction",
        "range": "L2 Videos 1–19",
        "topics": "Lexicographical Numbers, Josephus Problem, N-Queens Branch & Bound, Goldmine II, Sudoku Solver, Crossword Puzzle, Cryptarithmetic (SEND+MORE=MONEY), Word Break, K-Partitions, Palindrome Partitioning, Tug of War",
        "diff": "hard",
        "type": "pep2"
      },
      {
        "title": "L2: Advanced Bitwise Algorithms & Bitmask Optimization",
        "range": "L2 Videos 40–66, 79–80, 82",
        "topics": "RSB Mask, Kernighan's, Gray Code, Min Developers, Number of Valid Words for Puzzle, All Repeating Except Two/Three, Triplets with XOR, Reduce N to 1, UTF-8 Encoding, Sudoku/N-Queens using Bitmasking, Minimum XOR Pairs",
        "diff": "hard",
        "type": "pep2"
      }
    ]
  },
  {
    "_tier": "stage3",
    "_tierLabel": "Stage 3: Linear Data Structures, Trees, Heaps & Internals",
    "title": "Phase 6: Linear Data Structures, Monotonic Patterns & Doubly Linked Lists",
    "vidCount": "L1: 113 · L2: 26",
    "vidRange": "L1: 103–130, 137–149, 150–213, 217–223, 543 · L2: 166–167, 182–188, 190–191, 201–213, 216, 221",
    "readiness": "Can implement stacks/queues/linked lists from scratch, detect linked list cycles, and apply monotonic stack templates.",
    "stops": [
      {
        "title": "Stack Core Applications & Expression Parsers",
        "range": "L1 Videos 103–130",
        "topics": "Duplicate & Balanced Brackets, Next Greater Element (NGR/NGL), Stock Span, Largest Area Histogram, Infix / Prefix / Postfix Evaluation & Interconversion, The Celebrity Problem",
        "diff": "med",
        "type": "pep1"
      },
      {
        "title": "Custom Stacks, Circular Queues & Two-Stack Adapters",
        "range": "L1 Videos 137–149, 193–202",
        "topics": "Dynamic Stacks, Min Stack O(1) Space & Time, Circular Queue Implementation, Two Stacks in One Array, Queue-to-Stack & Stack-to-Queue Adapters",
        "diff": "med",
        "type": "pep1"
      },
      {
        "title": "Singly Linked Lists: Core Pointers & Merge Sort",
        "range": "L1 Videos 150–192, 203–213, 217–223, 543",
        "topics": "Node Linking, Add/Remove/Get At Index, Iterative vs Recursive Reversal, Slow-Fast Pointers (Middle of LL, K-th from End), Merge Two Sorted Lists, Merge Sort on Linked List, Remove Duplicates, Odd-Even Partition, Palindrome LL, Fold LL, Intersection Point",
        "diff": "hard",
        "type": "pep1"
      },
      {
        "title": "Monotonic Stack & Deque Pattern Suite",
        "range": "Supplementary Mastery",
        "topics": "Daily Temperatures, Sliding Window Maximum via Monotonic Deque O(N), Next Greater Element II (Circular Array), Sum of Subarray Minimums",
        "diff": "hard",
        "type": "supp"
      },
      {
        "title": "L2: Advanced Pointer Algorithms, Floyd's Cycle & Doubly Linked Lists",
        "range": "L2 Videos 166–167, 182–188, 190–191, 201–213, 216, 221",
        "topics": "Add/Subtract Large Numbers via LL Without Extra Space, Floyd's Cycle Detection & Mathematical Proof, Find Cycle Start Node, Copy List with Random Pointers O(1) Space, Segregate 01/012/Pivot Index, Complete Doubly Linked List Architecture (including L2 V216)",
        "diff": "hard",
        "type": "pep2"
      }
    ]
  },
  {
    "title": "Phase 7: Hierarchical Structures — Trees & Binary Search Trees",
    "vidCount": "L1: 147 · L2: 24",
    "vidRange": "L1: 214–216, 224–341, 432–439, 444–459, 467, 542 · L2: 165, 168, 174–176, 178–180, 189, 192–200, 214–215, 217, 220, 222–223",
    "readiness": "Can execute recursive & iterative tree traversals, compute diameter/LCA, and validate BST invariants.",
    "stops": [
      {
        "title": "Generic Trees (N-ary Trees)",
        "range": "L1 Videos 214–216, 224–310",
        "topics": "Tree Node Representation, Euler Traversals, Level Order Linewise & Zigzag, Mirroring, Linearize Generic Tree O(N), Node-to-Root Path, LCA, Distance Between Nodes, Multisolver, Subtree Max Sum, Diameter, Custom Iterator",
        "diff": "med",
        "type": "pep1"
      },
      {
        "title": "Binary Trees (Traversals & Classical Properties)",
        "range": "L1 Videos 311–341, 432–433, 436–437",
        "topics": "Pre, In, Post-order (Recursive and Unified Iterative 1-Pass), Level-order Traversal, Node-to-Root Path, Nodes K Away, Left-Cloned Tree, Diameter of Binary Tree O(N) Bottom-up, Tilt of Tree, Balanced Binary Tree Check",
        "diff": "med",
        "type": "pep1"
      },
      {
        "title": "Binary Search Trees (BST Rules & Core Operations)",
        "range": "L1 Videos 444–459, 467, 542",
        "topics": "BST Invariant Rule (Left < Node < Right), Constructor from Sorted Array in O(N), Search/Add/Remove Nodes, Replace with Sum of Larger, LCA in BST O(H), Print in Range, Target Sum Pair",
        "diff": "med",
        "type": "pep1"
      },
      {
        "title": "BST Invariant Validation & Subtree Analytics",
        "range": "L1 Videos 434–435, 438–439",
        "topics": "Validate Binary Search Tree (Min/Max Range Check), Largest BST Subtree in a Binary Tree (Post-order State Return)",
        "diff": "hard",
        "type": "pep1"
      },
      {
        "title": "L2: Morris Traversal, Tree Construction & Advanced Views",
        "range": "L2 Videos 165, 168, 174–176, 178–180, 189, 192–200, 214–215, 217, 220, 222–223",
        "topics": "Threaded Binary Tree & Morris Traversal (O(1) Auxiliary Space Inorder & Preorder), Validate BST via Morris, Construct Tree from Pre/Post+Inorder, Top/Left/Diagonal/Vertical Order Views (O(N log N) Proof), Binary Tree Cameras (Greedy State Machine on Tree), Serialize & Deserialize Tree, Burning Tree from Target Leaf",
        "diff": "hard",
        "type": "pep2"
      }
    ]
  },
  {
    "title": "Phase 8: Priority Queues, Heaps & Hash Table Internals",
    "vidCount": "L1: 14",
    "vidRange": "L1 Videos 468–478, 491, 492–493",
    "readiness": "Can construct custom min/max heaps in O(N), write Comparators, and build a collision-handled HashMap.",
    "stops": [
      {
        "title": "Binary Heap Construction & Priority Queues",
        "range": "L1 Videos 468–478, 492–493",
        "topics": "Min-Heap & Max-Heap Invariants, K Largest Elements, Sort Nearly Sorted (K-Sorted) Array, Median Priority Queue (Two Heaps), Merge K Sorted Lists, Heap Construction from Scratch (Upheapify & Downheapify), Linear Time O(N) Heapify Mathematical Proof, Comparable vs Comparator",
        "diff": "med",
        "type": "pep1"
      },
      {
        "title": "Custom Collision-Handled HashMap Implementation",
        "range": "L1 Video 491",
        "topics": "Array of Linked List Buckets, Hash Function & Compression, Load Factor Threshold (λ), Rehashing Mechanics, Internal Implementation of put, get, remove, containsKey, keySet",
        "diff": "hard",
        "type": "pep1"
      }
    ]
  },
  {
    "_tier": "stage4",
    "_tierLabel": "Stage 4: Greedy, Dynamic Programming & Graph Algorithms",
    "title": "Phase 9: Greedy Algorithms & Interval Scheduling",
    "vidCount": null,
    "vidRange": "Self-study Pattern Focus",
    "readiness": "Can construct greedy choice exchange arguments and manage sorted interval overlaps.",
    "stops": [
      {
        "title": "Greedy Choice Exchange Arguments & Classical Problems",
        "range": "Supplementary Mastery",
        "topics": "Activity Selection Problem, Fractional Knapsack, Job Sequencing with Deadlines, Minimum Platforms Problem, Jump Game I & II, Gas Station (Circular Tour), Candy Distribution",
        "diff": "med",
        "type": "supp"
      },
      {
        "title": "Interval Scheduling & Overlap Patterns",
        "range": "Supplementary Mastery",
        "topics": "Merge Overlapping Intervals, Insert Interval, Non-Overlapping Intervals, Meeting Rooms I & II (Min Meeting Rooms via Min-Heap), Minimum Number of Arrows to Burst Balloons",
        "diff": "med",
        "type": "supp"
      }
    ]
  },
  {
    "title": "Phase 10: Dynamic Programming & Sequence Alignments",
    "vidCount": "L1: 35 · L2: 49",
    "vidRange": "L1: 427–431, 440–443, 479–490, 497–499, 510, 514–523 · L2: 67–78, 81, 83–106, 122–125, 143–145, 151–153, 218–219",
    "readiness": "Can formulate states, derive transitions, tabulate 1D/2D grids, and solve string alignment recurrences.",
    "stops": [
      {
        "title": "1D & Grid Dynamic Programming",
        "range": "L1 Videos 427–431, 440–443, 479–490, 497–499, 510, 514–517",
        "topics": "Memoization vs Tabulation, Climbing Stairs with Jumps/Min Moves, Min Cost Path, Goldmine, Target Sum Subsets (0-1 Knapsack), Coin Change Combinations vs Permutations, Unbounded Knapsack, Count Binary Strings, Paint House I & II O(NK), Paint Fence, Tiling with Dominoes, Friends Pairing, Partition into Subsets",
        "diff": "med",
        "type": "pep1"
      },
      {
        "title": "Stock Buy & Sell Comprehensive Suite",
        "range": "L1 Videos 518–523",
        "topics": "1 Transaction, Infinite Transactions, Infinite with Fee, Infinite with Cooldown, 2 Transactions, K Transactions O(K·N)",
        "diff": "hard",
        "type": "pep1"
      },
      {
        "title": "Longest Increasing Subsequence (LIS) & Binary Search Optimization",
        "range": "Supplementary Mastery + L2 Videos 67–69, 75",
        "topics": "LIS O(N²) Tabulation, LIS O(N log N) via Patience Sorting / Binary Search, Longest Bitonic Subsequence, Maximum Non-Overlapping Bridges, Russian Doll Envelopes, Print All Longest Increasing Subsequences",
        "diff": "hard",
        "type": "pep2"
      },
      {
        "title": "Foundational String DP: LCS, Edit Distance & Alignments",
        "range": "Supplementary Mastery + L2 Videos 83–87, 143–145, 218–219",
        "topics": "Longest Common Subsequence (LCS), Edit Distance (Levenshtein Distance), Longest Palindromic Substring & Subsequence, Count Palindromic Substrings (LeetCode 647), Print All Minimum Cost Paths / Knapsack Paths, Wildcard Matching, Regular Expression Matching, Count Distinct Palindromic Subsequences (Hard), Minimum ASCII Delete Sum",
        "diff": "hard",
        "type": "pep2"
      },
      {
        "title": "L2: Catalan Numbers, Matrix Chain Multiplication (MCM) & Partitioning",
        "range": "L2 Videos 88–106, 122–125, 151–153",
        "topics": "Catalan Numbers (Cn) & Applications (Count BSTs, Mountain Valleys, Polygon Triangulation, Balanced Parentheses), Rod Cutting, Matrix Chain Multiplication (MCM), Palindromic Partitioning II, Boolean Parenthesization, Optimal Binary Search Tree, Burst Balloons (LeetCode Hard), Egg Dropping Problem (Hard), Optimal Strategy for a Game (Minimax DP), Highway Billboard Problem",
        "diff": "hard",
        "type": "pep2"
      }
    ]
  },
  {
    "title": "Phase 11: Graph Algorithms, Disjoint Sets (DSU) & Connectivity",
    "vidCount": "L1: 17 · L2: 7",
    "vidRange": "L1: 524–540 · L2: 169–173, 177, 181",
    "readiness": "Can represent graphs, run BFS/DFS, detect cycles in directed/undirected graphs, execute Dijkstra's/Prim's, and apply Disjoint Set Union.",
    "stops": [
      {
        "title": "Graph Representations & Classical Traversals (BFS & DFS)",
        "range": "L1 Videos 524–540",
        "topics": "Adjacency List & Matrix, Has Path, Print All Paths (DFS Backtracking), Connected Components, Number of Islands, Hamiltonian Path and Cycle, Breadth-First Search (BFS), Cycle Detection in Undirected Graph, Bipartite Graph Verification, Spread of Infection, Dijkstra's Shortest Path Algorithm (Min-Heap O((V+E)log V)), Prim's Minimum Spanning Tree, Topological Sort via DFS",
        "diff": "hard",
        "type": "pep1"
      },
      {
        "title": "Disjoint Set Union (DSU / Union-Find) & Kruskal's MST",
        "range": "Supplementary Mastery",
        "topics": "Representative Elements, Path Compression, Union by Rank & Size O(α(N)), Dynamic Cycle Detection in Undirected Graphs, Kruskal's Minimum Spanning Tree, Accounts Merge, Redundant Connection, Number of Provinces",
        "diff": "med",
        "type": "supp"
      },
      {
        "title": "L2: Advanced Shortest Paths, Topological Sort & Directed Connectivity",
        "range": "L2 Videos 169–173, 177, 181",
        "topics": "Bellman-Ford Algorithm (Negative Weights & Negative Cycles), Kahn's Algorithm (Topological Sort via Indegree BFS), 0-1 BFS with Deque O(V+E), Kosaraju's Strongly Connected Components (SCC - 2 Pass DFS), Mother Vertex in Directed Graph",
        "diff": "hard",
        "type": "pep2"
      }
    ]
  },
  {
    "_tier": "stage5",
    "_tierLabel": "Stage 5: Advanced Structures, Range Queries & Specialisation",
    "title": "Phase 12: String Matching & Prefix Trees (Tries)",
    "vidCount": null,
    "vidRange": "Self-study Mastery",
    "readiness": "Can build prefix trees, solve multi-pattern search, and execute linear string matching.",
    "stops": [
      {
        "title": "Trie (Prefix Tree) Construction & Bitwise Tries",
        "range": "Supplementary Mastery",
        "topics": "Trie Node Representation, Insert, Search, StartsWith, Delete Word, Prefix Frequency Counter, Auto-Complete Engine, Maximum XOR of Two Numbers in an Array (Bitwise Trie O(32N)), Word Search II (Trie + 2D Backtracking)",
        "diff": "hard",
        "type": "supp"
      },
      {
        "title": "Exact String Matching Algorithms",
        "range": "Supplementary Mastery",
        "topics": "Knuth-Morris-Pratt (KMP Algorithm with π / LPS Prefix Function O(N)), Rabin-Karp Rolling Hash Algorithm (Polynomial Rolling Hash with Modulo Arithmetic), Z-Algorithm (Z-Array O(N)), Manacher's Algorithm for Longest Palindromic Substring in O(N)",
        "diff": "hard",
        "type": "supp"
      }
    ]
  },
  {
    "title": "Phase 13: Tree DP & Hierarchical Graph Queries",
    "vidCount": null,
    "vidRange": "Self-study Mastery",
    "readiness": "Can execute bottom-up dynamic programming over tree topologies and answer ancestor/path queries in logarithmic time.",
    "stops": [
      {
        "title": "Dynamic Programming on Trees (Subtree Recursion & Re-Rooting)",
        "range": "Supplementary Mastery",
        "topics": "Tree Diameter via DP, Maximum Path Sum in Binary Tree (LeetCode 124), House Robber III, Binary Tree Cameras (Review from L2 Video 165), Subtree Re-Rooting Technique (All Nodes Distance Sum)",
        "diff": "hard",
        "type": "supp"
      },
      {
        "title": "Hierarchical Graph Queries & Binary Lifting",
        "range": "Supplementary Mastery",
        "topics": "Lowest Common Ancestor (LCA) via Binary Lifting O(N log N) Preprocessing, O(log N) Query, K-th Ancestor of Tree Node, Euler Tour Tree Flattening (Subtree to Range Mapping)",
        "diff": "hard",
        "type": "supp"
      }
    ]
  },
  {
    "title": "Phase 14: Range Query Structures (Segment & Fenwick Trees)",
    "vidCount": "L2: 3",
    "vidRange": "L2 Videos 162–164 + Self-study",
    "readiness": "Can handle dynamic point updates and range aggregate queries in O(log N) time.",
    "stops": [
      {
        "title": "L2: Square Root Decomposition & Block Updates",
        "range": "L2 Videos 162–164",
        "topics": "Block Decomposition Partitioning (B = ⌈√N⌉), Point Update O(1), Range Query O(√N), Prefix Sum vs Sqrt Decomposition Complexity Trade-Offs",
        "diff": "hard",
        "type": "pep2"
      },
      {
        "title": "Segment Trees with Lazy Propagation",
        "range": "Supplementary Mastery",
        "topics": "Segment Tree Construction O(N), Point Update O(log N), Range Sum/Min/Max Query O(log N), Range Updates with Lazy Propagation (Deferred Updates O(log N)), Merge Sort Tree",
        "diff": "hard",
        "type": "supp"
      },
      {
        "title": "Fenwick Tree (Binary Indexed Tree / BIT)",
        "range": "Supplementary Mastery",
        "topics": "Lowbit Operation (x & -x), Point Update O(log N), Prefix Sum Query O(log N), 2D Binary Indexed Tree, Inversion Count via Coordinate Compression & BIT",
        "diff": "hard",
        "type": "supp"
      },
      {
        "title": "Static Range Queries: Sparse Table",
        "range": "Supplementary Mastery",
        "topics": "Sparse Table Construction O(N log N), Idempotent Range Minimum / Maximum Queries (RMQ) in O(1) Time",
        "diff": "hard",
        "type": "supp"
      },
      {
        "title": "Advanced Shortest Paths & Graph Bridges",
        "range": "Supplementary Mastery",
        "topics": "Floyd-Warshall All-Pairs Shortest Path O(V³), Tarjan's Strongly Connected Components (SCC), Bridges and Articulation Points in Graphs (Discovery and Low Times), Euler Path and Circuit",
        "diff": "hard",
        "type": "supp"
      }
    ]
  },
  {
    "title": "Phase 15: Competitive Programming Specialisation & Advanced Math",
    "vidCount": null,
    "vidRange": "Self-study Specialisation",
    "readiness": "Equipped for national/international competitive programming paradigms and mathematical optimizations.",
    "stops": [
      {
        "title": "Bitmask DP & Digit Dynamic Programming",
        "range": "Supplementary Mastery",
        "topics": "Travelling Salesperson Problem (TSP) via Bitmasking O(2^N N²), Hungarian Assignment Problem, Digit DP (Count of Numbers with Specific Digit Properties in Range [L, R]), SOS DP (Sum Over Subsets)",
        "diff": "hard",
        "type": "supp"
      },
      {
        "title": "Advanced Interval & Game Theory DP",
        "range": "Supplementary Mastery",
        "topics": "Minimum Cost to Merge Stones, Strange Printer, Nim Game & Sprague-Grundy Theorem for Impartial Games",
        "diff": "hard",
        "type": "supp"
      },
      {
        "title": "Advanced Number Theory & Fast Matrix Exponentiation",
        "range": "Supplementary Mastery",
        "topics": "Segmented Sieve for Large Ranges, Modular Multiplicative Inverse via Fermat's Little Theorem & Extended Euclidean Algorithm, Euler's Totient Function φ(N), nCr mod p via Lucas Theorem, Chinese Remainder Theorem (CRT), Matrix Exponentiation for Linear Recurrences O(K³ log N)",
        "diff": "hard",
        "type": "supp"
      },
      {
        "title": "Mo's Algorithm & Offline Query Processing",
        "range": "Supplementary Mastery",
        "topics": "Mo's Algorithm (Query Sorting by Hilbert Curve / Block ⌊L/√N⌋), Range Distinct Elements Offline Query in O((N+Q)√N), Mo's Algorithm with Point Updates",
        "diff": "hard",
        "type": "supp"
      }
    ]
  }
];
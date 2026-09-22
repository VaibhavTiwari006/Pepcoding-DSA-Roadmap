const DATA = [
  {
    "_tier": "core",
    "_tierLabel": "Core Track — Mandatory Foundation & Interview Architecture",
    "title": "Phase 1: Java Foundations, Math & Patterns",
    "vidCount": "L1: 90",
    "vidRange": "L1 Videos 1–90",
    "readiness": "Can write nested loops cleanly, execute base arithmetic, and verify prime numbers in O(√N).",
    "stops": [
      {
        "title": "Java Syntax & Core Basics",
        "range": "L1 Videos 1–10",
        "topics": "Hello World, Print Z, Variables, Conditionals, Grading System, Loops, Standard Scanner Input",
        "diff": "easy",
        "type": "pep1"
      },
      {
        "title": "Basic Math & Number Theory",
        "range": "L1 Videos 11–34",
        "topics": "Prime Check, Primes till N, Fibonacci, Digits Extraction, Reverse/Rotate/Inverse Number, GCD & LCM, Prime Factorization, Pythagorean Triplets, Benjamin Bulbs",
        "diff": "easy",
        "type": "pep1"
      },
      {
        "title": "Pattern Printing",
        "range": "L1 Videos 35–74",
        "topics": "Patterns 1 to 20 (Triangles, Diamonds, Hourglasses, Swastika, Number trees, W-Pattern)",
        "diff": "easy",
        "type": "pep1"
      },
      {
        "title": "Functions & Number Systems",
        "range": "L1 Videos 75–90",
        "topics": "Functions Anatomy, Digit Frequency, Base Conversions (Decimal ↔ Any Base), Any Base Addition/Subtraction/Multiplication",
        "diff": "easy",
        "type": "pep1"
      }
    ]
  },
  {
    "title": "Phase 2: Core Programming Tools & Memory Architecture",
    "vidCount": "L1: 60",
    "vidRange": "L1 Videos 91–102, 131–136, 342–367, 370–374, 544–554",
    "readiness": "Understands JVM stack vs heap references, 2D matrix traversals, and basic Big-O trade-offs.",
    "stops": [
      {
        "title": "1D Arrays & Memory Architecture",
        "range": "L1 Videos 91–102",
        "topics": "Array Intro, Stack/Heap Reference Model, Span of Array, Linear Search, Bar Chart, Sum/Difference of Two Arrays",
        "diff": "easy",
        "type": "pep1"
      },
      {
        "title": "Strings, StringBuilders & ArrayLists",
        "range": "L1 Videos 544–554",
        "topics": "String Interning & Immutability, Palindromic Substrings, String Compression, Toggle Case, ASCII Difference, Permutations, Java for C++ Coders",
        "diff": "easy",
        "type": "pep1"
      },
      {
        "title": "OOP Basics & Reference Mechanics",
        "range": "L1 Videos 131–136",
        "topics": "Classes & Objects, Swap Games 1–3 (Memory Trace & Reference Swapping), Constructors, this Keyword",
        "diff": "easy",
        "type": "pep1"
      },
      {
        "title": "2D Arrays (Matrices)",
        "range": "L1 Videos 342–359",
        "topics": "Matrix Multiplication, Wave Traversal (Wakanda-1), Spiral Traversal, Exit Point, 90° Rotation, Shell Rotate, Diagonal Traversal, Saddle Point, Search in Sorted Matrix",
        "diff": "med",
        "type": "pep1"
      },
      {
        "title": "Array Transformations & Elementary Search",
        "range": "L1 Videos 360–367, 370–374",
        "topics": "Reverse/Rotate/Inverse Array, Subarrays of an Array, Elementary Binary Search, Ceil & Floor, First & Last Index",
        "diff": "med",
        "type": "pep1"
      },
      {
        "title": "Introductory Complexity Analysis",
        "range": "Self-study Supplement",
        "topics": "Informal Big-O definition, O(1) vs O(log N) vs O(N) vs O(N²), space overhead, nested loops analysis",
        "diff": "easy",
        "type": "supp"
      }
    ]
  },
  {
    "title": "Phase 3: Essential Array, HashMaps & Sliding Window",
    "vidCount": "L1: 9 · L2: 45",
    "vidRange": "L1: 460–466, 500–501 · L2: 107–121, 126–142, 146–150, 154–161",
    "readiness": "Can solve subarray sum problems using prefix sums/hashmaps and apply two pointers on sorted arrays.",
    "stops": [
      {
        "title": "HashMap & HashSet Foundations (Basic Usage)",
        "range": "L1 Videos 460–466, 500–501",
        "topics": "Highest Frequency Character, Get Common Elements - 1, Get Common Elements - 2 (with duplicates), Longest Consecutive Sequence of Numbers",
        "diff": "easy",
        "type": "pep1"
      },
      {
        "title": "Prefix & Suffix Sums",
        "range": "Self-study Supplement",
        "topics": "Running Sum, Range Sum Queries, Product of Array Except Self, Subarray Sum Equals K",
        "diff": "med",
        "type": "supp"
      },
      {
        "title": "Basic Two Pointers",
        "range": "Self-study Supplement",
        "topics": "Pair Sum in Sorted Array, Remove Duplicates In-Place, Move Zeroes, Reverse Words, Container With Most Water",
        "diff": "med",
        "type": "supp"
      },
      {
        "title": "Sliding Window Basics",
        "range": "Self-study Supplement",
        "topics": "Fixed Window (Max Sum Subarray Size K), Variable Window (Longest Substring Without Repeating Characters, Max Consecutive Ones III)",
        "diff": "med",
        "type": "supp"
      },
      {
        "title": "L2: Advanced Subarray Sums & Zero-Sum Windows",
        "range": "L2 Videos 107–112, 129, 137–142",
        "topics": "Find Number of Employees, Largest Subarray with 0 Sum, Count of Zero Sum Subarrays, Subarray Sum Equals K, Subarrays Divisible by K, Contiguous Array (Equal 0s and 1s), Equal 0s, 1s and 2s",
        "diff": "hard",
        "type": "pep2"
      },
      {
        "title": "L2: Advanced Sliding Window & Substrings",
        "range": "L2 Videos 113–121, 126–128",
        "topics": "Minimum Window Substring I & II, Longest Substring Without Repeating Characters, Longest Substring with Exactly K Distinct, Count of Substrings with At-most K Distinct, Max Consecutive Ones I & II, Equivalent Subarrays",
        "diff": "hard",
        "type": "pep2"
      },
      {
        "title": "L2: Advanced Anagrams, Pairs & Multi-Sum",
        "range": "L2 Videos 130–136, 146–150, 154–161",
        "topics": "Find All Anagrams, K-Anagrams, Valid & Group Anagrams, Isomorphic Strings, Word Pattern, Pairs with Equal Sum, Fraction to Recurring Decimal, Rabbits in Forest, 4Sum II, Double Pair Array",
        "diff": "hard",
        "type": "pep2"
      }
    ]
  },
  {
    "title": "Phase 4: Recursion, Sorting & Searching Mastery",
    "vidCount": "L1: 59",
    "vidRange": "L1 Videos 375–418, 494–496, 502–509, 511–513, 541",
    "readiness": "Can trace recursive call stacks via Euler tour, implement QuickSort/MergeSort, and execute binary search on answer spaces.",
    "stops": [
      {
        "title": "Recursion Fundamentals & Call Stack",
        "range": "L1 Videos 375–385",
        "topics": "Call Stack Trace, Print Decreasing/Increasing, Factorial, Power (Linear & Logarithmic), Print Zig-Zag, Tower of Hanoi",
        "diff": "easy",
        "type": "pep1"
      },
      {
        "title": "Recursion in Arrays",
        "range": "L1 Videos 386–397",
        "topics": "Display Array, Max of Array, First/Last/All Indices of Occurrence",
        "diff": "easy",
        "type": "pep1"
      },
      {
        "title": "Recursion with ArrayLists (\"Get\" Pattern)",
        "range": "L1 Videos 398–406",
        "topics": "Get Subsequences, Get Keypad Combinations, Get Stair Paths, Get Maze Paths (with Jumps)",
        "diff": "med",
        "type": "pep1"
      },
      {
        "title": "Recursion on the Fly (\"Print\" Pattern)",
        "range": "L1 Videos 407–418",
        "topics": "Print Subsequences, Print Keypad, Print Stair Paths, Print Maze Paths, Print Permutations, Print Encodings",
        "diff": "med",
        "type": "pep1"
      },
      {
        "title": "Sorting Algorithms & Complexity",
        "range": "L1 Videos 494–496, 502–509, 511–513, 541",
        "topics": "Bubble, Selection, Insertion Sort, Merge Sort, QuickSort, QuickSelect (Average O(N), Worst O(N²)), Count Sort, Radix Sort, Sort 01 / 012, Sort Dates, Pivot in Rotated Array",
        "diff": "med",
        "type": "pep1"
      },
      {
        "title": "Binary Search on Answer & Boundaries",
        "range": "Self-study Supplement",
        "topics": "Search Space Monotonicity, Lower/Upper Bound, Capacity to Ship Packages, Koko Eating Bananas, Aggressive Cows",
        "diff": "hard",
        "type": "supp"
      }
    ]
  },
  {
    "title": "Phase 5: Bit Basics, Backtracking & Advanced Puzzles",
    "vidCount": "L1: 10 · L2: 69",
    "vidRange": "L1: 368–369, 419–426 · L2: 1–66, 79–80, 82",
    "readiness": "Can generate subsets using bitmasks, solve constraint-satisfaction problems via backtracking, and undo state correctly.",
    "stops": [
      {
        "title": "Bit Manipulation Fundamentals & Bitmask Subsets",
        "range": "L1 Videos 368–369 + Supplement",
        "topics": "Bitwise AND/OR/XOR/NOT/Shifts, Check/Set/Clear/Toggle Bit, Check Power of 2, Brian Kernighan's Algorithm, Single Number, Subsets of an Array using Bitmask (L1 Videos 368–369)",
        "diff": "med",
        "type": "pep1"
      },
      {
        "title": "Backtracking Foundations",
        "range": "L1 Videos 419–426",
        "topics": "Flood Fill, Target Sum Subsets, N-Queens Problem, Knight's Tour, State Space Tree Pruning",
        "diff": "hard",
        "type": "pep1"
      },
      {
        "title": "L2: Advanced Recursion, Puzzles & Partitions",
        "range": "L2 Videos 1–19",
        "topics": "Abbreviations, N-Queens Branch & Bound, Josephus Problem, Lexicographical Numbers, Goldmine II, Sudoku Solver, Crossword Puzzle, Cryptarithmetic, Friends Pairing, K-Partitions, Palindrome Partitioning, Equal Sum Subsets, Word Break",
        "diff": "hard",
        "type": "pep2"
      },
      {
        "title": "L2: Permutations, Combinations & Selection Models",
        "range": "L2 Videos 20–39",
        "topics": "Permutations & Combinations (Queen Chooses vs Box Chooses, 1D vs 2D), Words K-Selection 1 & 2, K-Length Words 1 & 2, N-Knights Combinations, Coin Change Combinations 1 & 2",
        "diff": "hard",
        "type": "pep2"
      },
      {
        "title": "L2: Advanced Bit Manipulation & Masks",
        "range": "L2 Videos 40–66, 79–80, 82",
        "topics": "RSB Mask, Kernighan's, Gray Code, Min Developers, Number of Valid Words for Puzzle, All Repeating Except Two/Three, Missing & Duplicate, Triplets, Min XOR Pairs, UTF-8 Encoding, Sudoku/N-Queens using Bitmask, Palindromic Binary",
        "diff": "hard",
        "type": "pep2"
      }
    ]
  },
  {
    "title": "Phase 6: Linear Data Structures & Doubly Linked List",
    "vidCount": "L1: 113 · L2: 26",
    "vidRange": "L1: 103–130, 137–149, 150–213, 217–223, 543 · L2: 166–167, 182–188, 190–191, 201–213, 216, 221",
    "readiness": "Can implement stacks/queues/linked lists from scratch, detect linked list cycles, and apply monotonic stack templates.",
    "stops": [
      {
        "title": "Stack Applications & Classic Problems",
        "range": "L1 Videos 103–130",
        "topics": "Duplicate & Balanced Brackets, Next Greater Element (NGR/NGL), Stock Span, Largest Area Histogram, Infix/Prefix/Postfix Evaluation & Conversion, Celebrity Problem, Smallest Number Following Pattern",
        "diff": "med",
        "type": "pep1"
      },
      {
        "title": "Custom Stack & Queue Implementations",
        "range": "L1 Videos 137–149, 201–202",
        "topics": "Array-Based Normal/Dynamic Stack, Min Stack (Constant & Extra Space), Build Normal/Dynamic Queue, Two Stacks in One Array",
        "diff": "med",
        "type": "pep1"
      },
      {
        "title": "Stack ↔ Queue Adapters",
        "range": "L1 Videos 193–200",
        "topics": "Queue to Stack (Push/Pop Efficient), Stack to Queue (Add/Remove Efficient)",
        "diff": "med",
        "type": "pep1"
      },
      {
        "title": "Linked Lists: Core Methods & Pointer Mastery",
        "range": "L1 Videos 150–192, 203–213, 217–223, 543",
        "topics": "Node Architecture, Iterative & Recursive Reversals, Middle of LL, K-th from End, Merge Sorted Lists, Merge Sort on LL, Remove Duplicates, Odd-Even Partition, K-Reverse, Palindrome Check, Fold List, Intersection Point",
        "diff": "hard",
        "type": "pep1"
      },
      {
        "title": "Monotonic Stack & Deque Pattern Suite",
        "range": "Self-study Supplement",
        "topics": "Daily Temperatures, Sliding Window Maximum via Deque, Next Greater Element II (Circular Array), Trapping Rain Water (Stack variant)",
        "diff": "hard",
        "type": "supp"
      },
      {
        "title": "L2: Advanced Linked Lists, Cycle Mechanics & Doubly LL",
        "range": "L2 Videos 166–167, 182–188, 190–191, 201–213, 216, 221",
        "topics": "Add/Subtract Two LLs Without Extra Space, Floyd Cycle Detection & Proof, Cycle Node, Intersection via Floyd, Copy List with Random Pointers, Segregate 01/012/Pivot Index, Complete Doubly Linked List (Add/Remove/Get/Display, including L2 V216)",
        "diff": "hard",
        "type": "pep2"
      }
    ]
  },
  {
    "title": "Phase 7: Trees, Views & Morris Traversal",
    "vidCount": "L1: 147 · L2: 24",
    "vidRange": "L1: 214–216, 224–341, 432–439, 444–459, 467, 542 · L2: 165, 168, 174–176, 178–180, 189, 192–200, 214–215, 217, 220, 222–223",
    "readiness": "Can execute recursive & iterative tree traversals, compute diameter/LCA, and validate BST invariants.",
    "stops": [
      {
        "title": "Generic Trees (N-ary Trees)",
        "range": "L1 Videos 214–216, 224–310",
        "topics": "Constructor & Display, Size/Max/Height, Linewise & Zigzag Level Order, Mirror, Linearize O(N), Node-to-Root Path, LCA, Distance Between Nodes, Multisolver, Subtree Max Sum, Diameter, Custom Iterator",
        "diff": "med",
        "type": "pep1"
      },
      {
        "title": "Binary Trees (Core Traversal & Properties)",
        "range": "L1 Videos 311–341, 432–433, 436–437",
        "topics": "Constructor, Recursive & Iterative Pre/In/Post/Level Order, Node-to-Root Path, Nodes K Away, Left Cloned Tree, Diameter, Tilt of Tree, Balanced Tree Check",
        "diff": "med",
        "type": "pep1"
      },
      {
        "title": "Binary Search Trees (BST Rules & Operations)",
        "range": "L1 Videos 444–459, 467, 542",
        "topics": "BST Invariant Rule (Left < Node < Right taught first), Constructor from sorted array, Add/Remove Node, Replace with Sum of Larger, LCA in BST, Print in Range, Target Sum Pair",
        "diff": "med",
        "type": "pep1"
      },
      {
        "title": "BST Validation & Subtree Analytics",
        "range": "L1 Videos 434–435, 438–439",
        "topics": "Validate Binary Search Tree (Is Tree BST Range Check), Largest BST Subtree in Binary Tree (requires BST invariant first)",
        "diff": "hard",
        "type": "pep1"
      },
      {
        "title": "L2: Morris Traversal, Tree Construction & Views",
        "range": "L2 Videos 165, 168, 174–176, 178–180, 189, 192–200, 214–215, 217, 220, 222–223",
        "topics": "Morris Traversal (O(1) Space Inorder & Preorder), Validate BST via Morris, Construct Tree from Pre/Post+Inorder, Construct BST from Pre/Post/Level Order, Top/Left/Diagonal/Vertical Order Views (O(N log N) Proof), Binary Tree Cameras, Serialize & Deserialize, Burning Tree, Max Width",
        "diff": "hard",
        "type": "pep2"
      }
    ]
  },
  {
    "title": "Phase 8: Heaps & Implementation Depth",
    "vidCount": "L1: 14",
    "vidRange": "L1 Videos 468–478, 491, 492–493",
    "readiness": "Can construct custom min/max heaps in O(N), write Comparators, and build a collision-handled HashMap.",
    "stops": [
      {
        "title": "Heaps & Priority Queues",
        "range": "L1 Videos 468–478, 492–493",
        "topics": "K Largest Elements, Sort Nearly Sorted Array, Median Priority Queue, Merge K Sorted Lists, Custom Heap (Downheapify O(N) Build), Generic Heap (Comparable vs Comparator)",
        "diff": "med",
        "type": "pep1"
      },
      {
        "title": "Custom HashMap Implementation",
        "range": "L1 Video 491",
        "topics": "Internal Architecture of HashMap, Array of Linked List Buckets, Hash Function, Rehashing Threshold & Load Factor, Complete Implementation (put, get, remove, containsKey, size, keyset)",
        "diff": "hard",
        "type": "pep1"
      }
    ]
  },
  {
    "title": "Phase 9: Greedy Algorithms & Interval Practice",
    "vidCount": null,
    "vidRange": "Self-study Pattern Focus",
    "readiness": "Can construct greedy choice exchange arguments and manage sorted interval overlaps.",
    "stops": [
      {
        "title": "Greedy Foundations & Exchange Arguments",
        "range": "Self-study Supplement",
        "topics": "Activity Selection, Fractional Knapsack, Job Sequencing with Deadlines, Minimum Platforms, Jump Game I & II, Gas Station, Candy Distribution",
        "diff": "med",
        "type": "supp"
      },
      {
        "title": "Interval Problems Mastery",
        "range": "Self-study Supplement",
        "topics": "Merge Intervals, Insert Interval, Non-Overlapping Intervals, Meeting Rooms I & II, Minimum Number of Arrows to Burst Balloons",
        "diff": "med",
        "type": "supp"
      }
    ]
  },
  {
    "title": "Phase 10: Dynamic Programming, Catalan & MCM",
    "vidCount": "L1: 35 · L2: 49",
    "vidRange": "L1: 427–431, 440–443, 479–490, 497–499, 510, 514–523 · L2: 67–78, 81, 83–106, 122–125, 143–145, 151–153, 218–219",
    "readiness": "Can formulate states, derive transitions, tabulate 1D/2D grids, and solve string alignment recurrences.",
    "stops": [
      {
        "title": "1D & Grid Dynamic Programming",
        "range": "L1 Videos 427–431, 440–443, 479–490, 497–499, 510, 514–517",
        "topics": "Memoization vs Tabulation, Climbing Stairs, Min Cost Path, Goldmine, Target Sum Subsets, Coin Change (Permutations vs Combinations), 0-1 & Unbounded Knapsack, Count Binary Strings, Arrange Buildings, Paint House/Fence, Tiling",
        "diff": "med",
        "type": "pep1"
      },
      {
        "title": "Stock Buy & Sell Suite",
        "range": "L1 Videos 518–523",
        "topics": "1 Transaction, Infinite Transactions, Infinite with Fees, Infinite with Cooldown, 2 Transactions, K Transactions",
        "diff": "hard",
        "type": "pep1"
      },
      {
        "title": "String Dynamic Programming (LCS & Edit Distance)",
        "range": "Self-study Supplement",
        "topics": "Longest Common Subsequence (LCS), Edit Distance, Longest Palindromic Subsequence, Distinct Subsequences, Interleaving String, Wildcard Matching",
        "diff": "hard",
        "type": "supp"
      },
      {
        "title": "Longest Increasing Subsequence (LIS)",
        "range": "Self-study Supplement",
        "topics": "LIS O(N²) Tabulation, LIS O(N log N) via Binary Search / Patience Sorting, Russian Doll Envelopes, Maximum Length of Pair Chain",
        "diff": "hard",
        "type": "supp"
      },
      {
        "title": "L2: LIS Variations, Palindromic DP & Path Reconstructions",
        "range": "L2 Videos 67–78, 81, 83–87, 143–145, 218–219",
        "topics": "Longest Bitonic Subsequence, Building Bridges, Russian Doll Envelopes, Count & Longest Palindromic Substring/Subsequence, Print All Paths (Min Cost, Jumps, Knapsack, LIS, Target Sum), Longest Common Subsequence, Wildcard & Regex Matching, Count Distinct Palindromic Subsequences",
        "diff": "hard",
        "type": "pep2"
      },
      {
        "title": "L2: Catalan Numbers, MCM & Matrix Partitioning",
        "range": "L2 Videos 88–106, 122–125, 151–153",
        "topics": "Catalan Numbers & Variations (BST Count, Mountains/Valleys, Valid Parentheses, Circle Chords, Polygon Triangulation), Rod Cutting, Palindromic Cuts, Matrix Chain Multiplication, Boolean Parenthesization, Optimal BST, Kadane Subarray Variations, Burst Balloons, Knights Probability, Egg Dropping",
        "diff": "hard",
        "type": "pep2"
      }
    ]
  },
  {
    "title": "Phase 11: Graph Algorithms, DSU & Connectivity",
    "vidCount": "L1: 17 · L2: 7",
    "vidRange": "L1: 524–540 · L2: 169–173, 177, 181",
    "readiness": "Can represent graphs, run BFS/DFS, detect cycles in directed/undirected graphs, execute Dijkstra's/Prim's, and apply Disjoint Set Union.",
    "stops": [
      {
        "title": "Graph Traversals & Classical Algorithms",
        "range": "L1 Videos 524–540",
        "topics": "Adjacency List, DFS (Paths, Components, Island Count, Hamiltonian Path/Cycle), BFS Traversal, Cycle Detection (Directed & Undirected), Bipartite Check, Spread Infection, Dijkstra's Shortest Path, Prim's MST, Topological Sort",
        "diff": "hard",
        "type": "pep1"
      },
      {
        "title": "Disjoint Set Union (DSU / Union-Find)",
        "range": "Self-study Supplement",
        "topics": "Find with Path Compression, Union by Rank/Size, Dynamic Cycle Detection, Kruskal's MST Algorithm, Accounts Merge, Redundant Connection, Number of Provinces",
        "diff": "med",
        "type": "supp"
      },
      {
        "title": "Topological Sort Applications",
        "range": "Self-study Supplement",
        "topics": "Kahn's Algorithm (Indegree BFS), Course Schedule I & II, Alien Dictionary, Sequence Reconstruction",
        "diff": "hard",
        "type": "supp"
      },
      {
        "title": "L2: Advanced Shortest Paths, Topological & Connectivity",
        "range": "L2 Videos 169–173, 177, 181",
        "topics": "Bellman-Ford Algorithm, Negative Weight Cycle Detection, Prim's vs Dijkstra's Analysis, 0-1 BFS, Kahn's Algorithm BFS, Kosaraju's Strongly Connected Components, Mother Vertex",
        "diff": "hard",
        "type": "pep2"
      }
    ]
  },
  {
    "_tier": "extended",
    "_tierLabel": "Extended Track — Advanced Structures & Specialisation",
    "title": "Phase 12: Further Core Extensions (Tries & Tree DP)",
    "vidCount": null,
    "vidRange": "Self-study Supplement",
    "readiness": "Can build prefix trees and execute bottom-up dynamic programming over tree topologies.",
    "stops": [
      {
        "title": "Trie (Prefix Tree)",
        "range": "Self-study Supplement",
        "topics": "Insert, Search, StartsWith, Delete, Prefix Count, Auto-Complete, Maximum XOR of Two Numbers in Array, Word Search II",
        "diff": "hard",
        "type": "supp"
      },
      {
        "title": "Fundamental String Matching",
        "range": "Self-study Supplement",
        "topics": "KMP Algorithm (LPS Array), Rabin-Karp Rolling Hash, Z-Algorithm, Manacher's Algorithm (Longest Palindromic Substring)",
        "diff": "hard",
        "type": "supp"
      },
      {
        "title": "Dynamic Programming on Trees",
        "range": "Self-study Supplement",
        "topics": "Tree Diameter via DP, Max Path Sum, House Robber III, Binary Tree Cameras, Subtree Re-Rooting Technique",
        "diff": "hard",
        "type": "supp"
      }
    ]
  },
  {
    "title": "Phase 13: Advanced Structures & Sqrt Decomposition",
    "vidCount": "L2: 3",
    "vidRange": "L2 Videos 162–164 + Self-study",
    "readiness": "Can handle point & range update queries in O(log N) and execute advanced shortest-path / connectivity algorithms.",
    "stops": [
      {
        "title": "L2: Square Root Decomposition",
        "range": "L2 Videos 162–164",
        "topics": "Square Root Block Decomposition, Point Update Queries, Range Queries, Prefix Sum vs Sqrt Decomposition Complexity Trade-Offs",
        "diff": "hard",
        "type": "pep2"
      },
      {
        "title": "Segment Trees & Range Queries",
        "range": "Self-study Supplement",
        "topics": "Segment Tree Build, Point Update, Range Query, Range Update with Lazy Propagation, Merge Sort Tree",
        "diff": "hard",
        "type": "supp"
      },
      {
        "title": "Fenwick Tree (Binary Indexed Tree)",
        "range": "Self-study Supplement",
        "topics": "Point Update, Prefix Sum Query, Range Sum, 2D BIT, Inversion Count, Count of Smaller Numbers After Self",
        "diff": "hard",
        "type": "supp"
      },
      {
        "title": "Advanced Shortest Paths & Connectivity",
        "range": "Self-study Supplement",
        "topics": "Floyd-Warshall (All-Pairs O(V³)), Tarjan's SCC, Bridges & Articulation Points (Discovery & Low Values), Euler Path / Circuit",
        "diff": "hard",
        "type": "supp"
      },
      {
        "title": "Sparse Table & Tree Lifting",
        "range": "Self-study Supplement",
        "topics": "Sparse Table for Static Range Minimum Queries O(1), Lowest Common Ancestor (LCA) via Binary Lifting, Euler Tour Flattening",
        "diff": "hard",
        "type": "supp"
      }
    ]
  },
  {
    "title": "Phase 14: Optional Competitive Specialisation",
    "vidCount": null,
    "vidRange": "Self-study Specialisation",
    "readiness": "Equipped for national/international competitive programming paradigms.",
    "stops": [
      {
        "title": "Bitmask DP & Digit DP",
        "range": "Self-study Supplement",
        "topics": "Travelling Salesperson Problem via Bitmask, Assignment Problem, Digit DP (Numbers with Constraint Digits), SOS DP (Sum Over Subsets)",
        "diff": "hard",
        "type": "supp"
      },
      {
        "title": "Interval Dynamic Programming",
        "range": "Self-study Supplement",
        "topics": "Matrix Chain Multiplication (MCM), Burst Balloons, Palindrome Partitioning II (DP formulation), Minimum Cost to Merge Stones",
        "diff": "hard",
        "type": "supp"
      },
      {
        "title": "Advanced Number Theory & Math",
        "range": "Self-study Supplement",
        "topics": "Segmented Sieve, Modular Multiplicative Inverse (Fermat's Little Theorem), Euler's Totient Function, nCr % p (Lucas Theorem), Chinese Remainder Theorem, Matrix Exponentiation for Recurrences",
        "diff": "hard",
        "type": "supp"
      },
      {
        "title": "Mo's Algorithm & Offline Queries",
        "range": "Self-study Supplement",
        "topics": "Square Root Decomposition, Mo's Algorithm for Offline Range Queries, Mo's with Point Updates",
        "diff": "hard",
        "type": "supp"
      }
    ]
  }
];
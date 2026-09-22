# 🗺️ Master DSA Architecture & Roadmap

[![Live Website](https://img.shields.io/badge/Live_Roadmap-GitHub_Pages-2ea44f?style=for-the-badge&logo=github)](https://vaibhavtiwari006.github.io/Pepcoding-DSA-Roadmap/)
[![Pepcoding Total Videos](https://img.shields.io/badge/Pepcoding_Videos-777_(L1+L2)-f2a93b?style=for-the-badge&logo=youtube)](https://www.youtube.com/playlist?list=PL-Jc9J83PIiFj7YSPl2ulcpwy-mwj1SSk)
[![LeetCode Curated](https://img.shields.io/badge/LeetCode_Questions-550+_Curated-6ea8fe?style=for-the-badge&logo=leetcode)](https://vaibhavtiwari006.github.io/Pepcoding-DSA-Roadmap/)
[![Phases](https://img.shields.io/badge/Curriculum-15_Structured_Phases-b08cfe?style=for-the-badge)](https://vaibhavtiwari006.github.io/Pepcoding-DSA-Roadmap/)

> ### 🌐 **Live Interactive Website**
> 🔗 **[https://vaibhavtiwari006.github.io/Pepcoding-DSA-Roadmap/](https://vaibhavtiwari006.github.io/Pepcoding-DSA-Roadmap/)**
> 
> *Track all 777 Pepcoding video lectures, check off 62 topic milestones, and solve 550+ curated LeetCode problems directly with persistent client-side progress tracking.*

---

## 📺 Official Pepcoding YouTube Playlists

| Level | Content & Coverage | Videos | Direct YouTube Link |
|---|---|---|---|
| **DSA Level 1** | Foundations, Arrays, Recursion, Trees, Stacks, Queues, Hashmaps, Heaps, DP, Graphs | **554 Videos** | [▶️ Watch Level 1 Playlist](https://www.youtube.com/playlist?list=PL-Jc9J83PIiFj7YSPl2ulcpwy-mwj1SSk) |
| **DSA Level 2** | Advanced Recursion & Backtracking, Bit Manipulation, Advanced DP, Morris Traversal, Graphs & Sqrt Decomposition | **223 Videos** *(446 entries)* | [▶️ Watch Level 2 Playlist](https://www.youtube.com/playlist?list=PL-Jc9J83PIiE-181crLG1xSIWhTGKFiMY) |

---

## 🎯 What Makes This Roadmap Unique?

Most DSA roadmaps provide either a list of videos or a list of coding questions with no clear connection. This architecture binds **Pepcoding's conceptual depth** together with **Kunal Kushwaha's curated LeetCode assignments**:

1. **Prerequisite-Ordered 15 Phases**: Strict progression from basic math & arrays up through advanced DP, graphs, tries, and segment trees.
2. **777 Verified Pepcoding Lectures**: Every single video from Level 1 and Level 2 mapped to its exact topic block with lecture ranges (e.g., `L1 Videos 1–90`, `L1: 460–466 · L2: 107–121`).
3. **550+ Topic-Wise LeetCode Practice Questions**: Curated and tiered by difficulty (**Easy**, **Medium**, **Hard**) under each corresponding topic drawer.
4. **Independent Dual Progress Tracking**:
   - Track **Topic Blocks** (62 total).
   - Track individual **LeetCode Problems** (550+ total) with auto-updating counters.
5. **Zero Backend & 100% Client-Side**: All progress is automatically preserved in your browser via `localStorage`.
6. **Data Portability**: Complete **Export** & **Import** JSON functionality (`dsa-master-roadmap-v3.json`) to back up and sync your progress across devices.
7. **Fast Search & Real-Time Filtering**: Search any algorithm/pattern (e.g., *Sliding Window*, *LCS*, *DSU*, *Morris Traversal*) or filter by *Level 1*, *Level 2*, *Supplementary*, *Done*, or *Pending*.

---

## 📚 15-Phase Curriculum Overview

```
├── Tier 1: Core Foundations & Memory Architecture
│   ├── Phase 01: Java Foundations, Math & Patterns (L1: 1–90)
│   └── Phase 02: Linear Memory, Core Tools & Complexity (L1: 91–102, 131–136, 342–374, 544–554)
│
├── Tier 2: Algorithmic Thinking & State Space
│   ├── Phase 03: Essential Array, String & Hashing Patterns (L1: 460–466 · L2: 107–161)
│   ├── Phase 04: Recursion, Divide & Conquer, Sorting & BS (L1: 375–418, 494–513, 541)
│   └── Phase 05: Bit Manipulation, State-Space & Backtracking (L1: 368–426 · L2: 1–82)
│
├── Tier 3: Core Data Structures
│   ├── Phase 06: Linear Data Structures & Doubly Linked Lists (L1: 103–223 · L2: 166–221)
│   ├── Phase 07: Hierarchical Structures — Trees & BST (L1: 214–467 · L2: 165–223)
│   └── Phase 08: Priority Queues, Heaps & Hash Internals (L1: 468–501)
│
├── Tier 4: Optimization, Sequences & Network Topology
│   ├── Phase 09: Greedy Algorithms & Interval Scheduling (Supplementary Mastery)
│   ├── Phase 10: Dynamic Programming & Sequence Alignments (L1: 427–523 · L2: 67–219)
│   └── Phase 11: Graph Algorithms, DSU & Connectivity (L1: 524–540 · L2: 169–181)
│
└── Tier 5: Advanced & Competitive Specialisations
    ├── Phase 12: String Matching & Prefix Trees (Tries)
    ├── Phase 13: Tree DP & Hierarchical Graph Queries
    ├── Phase 14: Range Query Structures (Segment & Fenwick Trees, Sqrt Decomposition)
    └── Phase 15: Competitive Specialisation & Advanced Math
```

---

## 🛠️ Tech Stack & Architecture

- **Frontend**: Pure HTML5, Modern CSS3 (CSS Variables, Flexbox, CSS Grid), Vanilla ES6+ JavaScript.
- **Typography**: Inter, Space Grotesk, JetBrains Mono (via Google Fonts).
- **Storage Engine**: Asynchronous client-side `localStorage` with backward-compatible migration schema.
- **Deployment**: Automated via GitHub Actions & GitHub Pages.

---

## 💻 Local Development

Clone the repository and open `index.html` in any modern web browser:

```bash
git clone https://github.com/VaibhavTiwari006/Pepcoding-DSA-Roadmap.git
cd Pepcoding-DSA-Roadmap
```

Open `index.html` directly in your browser or run a simple local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js npx
npx serve .
```

Visit `http://localhost:8000` to view the roadmap.

---

## 🤝 Acknowledgements

- **[Pepcoding (Sumeet Malik)](https://www.youtube.com/@Pepcoding)** for creating the comprehensive DSA Level 1 & Level 2 video lectures.
- **[Kunal Kushwaha](https://github.com/kunal-kushwaha/DSA-Bootcamp-Java)** for the curated DSA assignment problem sheets.
- **[LeetCode](https://leetcode.com/)** for hosting the practice problems.

---

<p align="center">
  <b>Built for consistent, structured DSA mastery 🚀</b><br>
  <sub>Hosted live at <a href="https://vaibhavtiwari006.github.io/Pepcoding-DSA-Roadmap/">vaibhavtiwari006.github.io/Pepcoding-DSA-Roadmap</a></sub>
</p>

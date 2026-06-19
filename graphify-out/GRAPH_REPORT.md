# Graph Report - dr. antoine patient intake  (2026-06-18)

## Corpus Check
- 4 files · ~33,573 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 23 nodes · 19 edges · 4 communities (2 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `86e10697`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 3|Community 3]]

## God Nodes (most connected - your core abstractions)
1. `permissions` - 2 edges
2. `allow` - 1 edges
3. `Lessons` - 1 edges
4. `2026-06-17 Review` - 1 edges
5. `2026-06-17 PDF export rework` - 1 edges
6. `2026-06-17` - 1 edges
7. `2026-06-17 EmailJS submit update` - 1 edges
8. `2026-06-18 PDF and print follow-up` - 1 edges
9. `2026-06-18 PDF pagination repair` - 1 edges
10. `2026-06-18 Textarea PDF export` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (4 total, 2 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.12
Nodes (15): 2026-06-17, 2026-06-17 EmailJS submit update, 2026-06-17 PDF export rework, 2026-06-17 Review, 2026-06-18 7-page rebuild, 2026-06-18 Body image fit pass, 2026-06-18 Consent page restore, 2026-06-18 Final layout pass (+7 more)

## Knowledge Gaps
- **17 isolated node(s):** `allow`, `Lessons`, `2026-06-17 Review`, `2026-06-17 PDF export rework`, `2026-06-17` (+12 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `allow`, `Lessons`, `2026-06-17 Review` to the rest of the system?**
  _17 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
# Architect AI — Development Roadmap

This roadmap outlines the planned development phases for Architect AI, designed
to demonstrate engineering depth, AI integration, and developer‑tool polish.

---

## Phase 1 — Foundation (Week 1)
**Goal:** Establish project structure and basic scanning.

- Initialize repository  
- Create directory structure  
- Implement file walker  
- Integrate Tree‑sitter  
- Parse basic AST nodes  
- Output initial JSON describing:
  - files  
  - imports/exports  
  - function definitions  

**Deliverable:**  
`structure.json` with basic codebase metadata.

---

## Phase 2 — Dependency Graph Engine (Week 2)
**Goal:** Build dependency graph + detect cycles.

- Build module dependency graph  
- Detect circular dependencies  
- Detect orphan modules  
- Compute fan‑in / fan‑out  
- Serialize graph to JSON  

**Deliverable:**  
`dependency-graph.json` + cycle detection.

---

## Phase 3 — Complexity & Code Smells (Week 3)
**Goal:** Add meaningful engineering metrics.

- Cyclomatic complexity  
- Cognitive complexity  
- Function length scoring  
- Duplicate code detection  
- Architecture smell detection:
  - God objects  
  - Feature envy  
  - Excessive coupling  

**Deliverable:**  
`complexity-report.json` + `smells.json`.

---

## Phase 4 — AI Reasoning Layer (Week 4)
**Goal:** Add local LLM reasoning.

- Integrate Ollama  
- Create prompt templates  
- Generate:
  - architecture summaries  
  - risk analysis  
  - refactor suggestions  
  - Mermaid diagrams  

**Deliverable:**  
`architecture-summary.md` + `architecture-diagram.mmd`.

---

## Phase 5 — Visualization Layer (Week 5)
**Goal:** Build interactive UI.

- D3/Cytoscape dependency graph  
- Complexity heatmap  
- Mermaid diagram rendering  
- Interactive module explorer  

**Deliverable:**  
Web UI or VS Code webview visualizations.

---

## Phase 6 — VS Code Extension (Week 6)
**Goal:** Integrate analysis into editor.

- Add “Analyze Project” command  
- Add side panel  
- Add hover diagnostics  
- Add code actions:
  - Explain file  
  - Suggest refactor  
  - Show architecture impact  

**Deliverable:**  
Functional VS Code extension.

---

## Phase 7 — CLI Tool + CI Integration (Week 7)
**Goal:** Make tool usable in pipelines.

- Add CLI commands  
- Add GitHub Action template  
- Add optional PR comment bot  

**Deliverable:**  
CLI + CI integration.

---

## Phase 8 — Documentation + Polish (Week 8)
**Goal:** Make the repo shine.

- Full documentation  
- Architecture diagrams  
- Demo GIFs  
- Example analyses  
- Portfolio‑ready README  

**Deliverable:**  
Complete documentation set.

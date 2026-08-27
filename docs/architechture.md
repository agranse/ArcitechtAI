# Architect AI — System Architecture

Architect AI is a free, local‑first codebase analysis toolkit that blends
static analysis, graph theory, and AI reasoning to generate deep architectural
insights. It is composed of five major subsystems:

---

## 1. Core Analysis Engine

**Purpose:** Parse source code, extract structure, compute metrics, and build
dependency graphs.

**Technologies**
- Tree‑sitter (multi‑language AST parsing)
- Node.js or Python
- Custom graph builder
- Complexity metric modules

**Responsibilities**
- File discovery and classification  
- AST parsing for supported languages  
- Dependency extraction  
- Complexity scoring  
- Code smell detection  
- JSON output for downstream consumers  

**Key Outputs**
- `dependency-graph.json`  
- `complexity-report.json`  
- `smells.json`  
- `structure.json`  

---

## 2. AI Reasoning Layer

**Purpose:** Transform raw analysis data into human‑readable architectural
insights using free local LLMs.

**Technologies**
- Ollama (local LLM runner)
- Llama 3.1 / DeepSeek Coder / Qwen 2.5
- Structured prompt templates

**Responsibilities**
- Architecture summaries  
- Risk analysis  
- Refactor suggestions  
- Mermaid diagram generation  
- Module boundary recommendations  

**Key Outputs**
- `architecture-summary.md`  
- `refactor-plan.md`  
- `architecture-diagram.mmd`  

---

## 3. Visualization Layer

**Purpose:** Provide interactive exploration of architecture, complexity, and
dependencies.

**Technologies**
- D3.js or Cytoscape.js  
- Mermaid  
- VS Code Webview or standalone web UI  

**Responsibilities**
- Render dependency graph  
- Render complexity heatmaps  
- Render architecture diagrams  
- Provide interactive module explorer  

**Key Views**
- Dependency Graph  
- Complexity Heatmap  
- Architecture Diagram  
- Module Explorer  

---

## 4. VS Code Extension

**Purpose:** Bring analysis and AI reasoning directly into the developer’s
workflow.

**Technologies**
- VS Code Extension API  
- Webviews  
- Diagnostics + Code Actions  

**Responsibilities**
- “Analyze Project” command  
- Side panel UI  
- Hover insights  
- Code actions:
  - Explain file  
  - Suggest refactor  
  - Show architecture impact  

---

## 5. CLI Tool

**Purpose:** Provide analysis in CI/CD pipelines and terminal workflows.

**Technologies**
- Node.js or Python  
- Commander.js / Click  

**Responsibilities**
- Run full analysis  
- Export reports  
- Generate diagrams  
- Integrate with GitHub Actions  

---

## High‑Level Data Flow


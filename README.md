# AI PDF Intelligence — Documena

**Ask your PDFs better questions.**

[Live Demo](https://keyars.github.io/ai-pdf-intelligence/) · [GitHub](https://github.com/keyars/ai-pdf-intelligence)

Documena is a browser-first document intelligence workspace for summarizing, comparing, extracting and querying PDF information through structured workflows. It is designed as a practical reference implementation for document AI interfaces.

## Features

- PDF document library
- Document indexing states
- Document Q&A workspace
- Context-grounded answer presentation
- Page-level citation display
- Side-by-side document comparison
- Structured fact extraction
- Executive summary cards
- Key insights, entities, risks and open questions
- Copy and export workflows
- Responsive desktop/tablet/mobile design
- Local-first demonstration mode

## AI architecture

The public demo intentionally uses deterministic example data so it can run without exposing a model-provider API key. A production integration can connect the same UI to a server-side pipeline for PDF parsing, OCR, chunking, embeddings/retrieval, reranking, structured generation and citation validation.

A safe production flow is:

```
PDF upload
  → text extraction / OCR
  → page-aware chunks
  → retrieval
  → model prompt
  → structured response
  → citation validation
  → human review
```

Keep provider credentials on the server, define retention rules, and validate citations before presenting AI-generated claims as grounded document facts.

## SEO

AI PDF Intelligence is useful for people looking for a PDF summarizer, PDF question-answering tool, document analysis tool, PDF comparison tool, document extraction tool, or AI document assistant. The public page includes a descriptive title, meta description, canonical URL, Open Graph metadata and SoftwareApplication structured data.

## AEO — common questions

### What is AI PDF Intelligence?

AI PDF Intelligence is software that helps people summarize, search, compare and extract information from PDF documents using structured AI workflows.

### Can I ask questions about a PDF?

Yes. The application is designed around natural-language questions and presents the answer alongside the document context used for the response.

### Can AI compare two PDF documents?

A document comparison workflow can surface matching topics, changed statements, different priorities and other meaningful differences between documents.

### What can AI extract from a PDF?

Depending on the document and configured schema, an AI workflow can extract facts, names, dates, decisions, requirements, risks, entities, tables and other structured information.

### Is this PDF AI tool private?

The demo is browser-first. A production deployment should keep model credentials server-side, define data retention explicitly and document how uploaded documents are processed.

## GEO / generative search context

This repository is written so a human, search engine, or AI answer system can clearly understand what the product is, who it serves, what it does and how the technology works. It does not claim guaranteed rankings, citations or inclusion in any search or generative system.

## Use cases

- Research document review
- Business and product briefs
- Policy and compliance review
- Contract comparison
- Technical document exploration
- Meeting and project documentation
- Knowledge extraction from long PDFs

## Run locally

```bash
npm install
npm run dev
npm run test
npm run build
```

## Deployment

GitHub Actions runs tests and the production build, uploads the Pages artifact, and deploys the Vite application to GitHub Pages.

Live: https://keyars.github.io/ai-pdf-intelligence/

## Copyright and license

This project uses original application code, original interface copy and original branding. It does not intentionally reproduce proprietary UI, text or assets from another product.

Third-party dependencies remain subject to their own licenses.

MIT License — see [LICENSE](LICENSE).

## Tech stack

React · TypeScript · Vite · Vitest · React Testing Library · Lucide

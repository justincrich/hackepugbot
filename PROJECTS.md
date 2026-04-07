# Projects

## Captain's Ready Room

**AI-Powered Advisory Interface** | Full-Stack Web Application

A sophisticated conversational AI application that delivers contextual, thoughtful guidance through an elegant streaming interface. Built with modern web technologies and production-ready architecture patterns.

### Overview

Captain's Ready Room is an AI-powered advisory tool that provides users with personalized, contextual responses to their questions and dilemmas. The application features real-time streaming responses, customizable personality modes, and a conversation history system—all built with performance, accessibility, and user experience as top priorities.

### Technical Architecture

#### Core Technologies
- **Framework**: Next.js 15 (App Router) with TypeScript
- **AI Integration**: OpenAI GPT-4o API with streaming support
- **Styling**: Tailwind CSS with semantic design token system
- **UI Components**: Radix UI primitives via shadcn/ui
- **Validation**: Zod for runtime type safety
- **State Management**: React Context + custom hooks

#### Key Architectural Decisions

**Semantic Design Token System**
Theme switching is handled entirely through CSS custom properties, eliminating JavaScript runtime overhead:

```css
[data-theme="default"] {
  --color-primary: var(--primary-color);
  --color-background: var(--bg-light);
}

[data-theme="dark"] {
  --color-primary: var(--primary-color);
  --color-background: var(--bg-dark);
}
```

**Benefits:**
- Zero runtime JavaScript for theme state management
- No component re-renders on theme change
- Type-safe theme usage via Tailwind classes
- Easy addition of new themes without code changes
- Better performance and SEO

**Custom Hook Architecture**
The application uses a set of composable custom hooks for clean separation of concerns:

- **`useSettings`**: User preference management with localStorage persistence and hydration
- **`useTheme`**: Theme state control via data attributes with SSR support
- **`useStreamingResponse`**: AI API streaming with error handling and cancellation support
- **`useConversationHistory`**: Session management with deduplication and search capabilities

**API Route Design**
Serverless API routes with robust validation and error handling:

- **`POST /api`**: Streaming response generation with rate limiting
- **`POST /api/generate-title`**: Intelligent title generation for saved sessions

All routes use Zod schemas for input validation and include comprehensive error handling.

#### Security & Best Practices

- Input validation on all API routes using Zod schemas
- Environment variable validation at startup
- Security headers (CSP, X-Frame-Options, etc.)
- Error boundaries for graceful failure handling
- TypeScript strict mode with zero errors in production builds
- ESLint configuration for code quality enforcement

### Features

**Real-Time Streaming**
- Character-by-character text animation with configurable speed
- Smooth, typewriter-style delivery of AI responses
- Cancellation support for long-running requests

**Customization Options**
- Multiple response styles (diplomatic, philosophical, direct, inspirational)
- Optional literary references
- Adjustable animation speed
- Light and dark display modes

**Conversation Management**
- Save and review previous advisory sessions
- Auto-generated titles and timestamps
- Duplicate detection
- Search functionality

**Responsive Design**
- Optimized for desktop, tablet, and mobile
- Touch-friendly interface
- Accessible component structure

### Development Practices

**Testing & Quality Assurance**
- TypeScript strict mode for type safety
- ESLint for code quality
- Prettier for code formatting
- Pre-commit hooks for validation

**Performance Optimization**
- CSS-only theme switching (no JavaScript overhead)
- Lazy loading for components
- Optimized bundle size
- Streaming responses for perceived performance

**Code Organization**
```
├── app/
│   ├── api/              # API routes with validation
│   ├── globals.css       # Design tokens + global styles
│   └── layout.tsx        # Root layout with providers
├── components/
│   ├── ui/               # Reusable UI components
│   └── *.tsx             # Feature components
├── hooks/                # Custom React hooks
├── lib/                  # Utilities (validation, errors)
└── ARCHITECTURE.md       # Detailed architecture docs
```

### Deployment & Operations

**Supported Platforms**
- Vercel (recommended)
- Netlify
- Railway
- Self-hosted with Docker

**Environment Variables**
- `OPENAI_API_KEY` (required)

**Build Process**
```bash
pnpm build          # Production build
pnpm tsc --noEmit   # Type checking
pnpm lint           # Linting
```

### Project Outcomes

This project demonstrates expertise in:
- Modern React/Next.js architecture patterns
- CSS-first design systems
- AI API integration with streaming
- TypeScript for type safety
- Production-ready security practices
- Performance optimization
- Responsive web design

### Technology Stack Summary

| Category | Technology |
|----------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| AI/ML | OpenAI GPT-4o API |
| Styling | Tailwind CSS |
| Components | Radix UI / shadcn/ui |
| Validation | Zod |
| State | React Context + Hooks |
| Deployment | Vercel-ready |

---

## Holocron

**AI-Powered Knowledge Management & Research Platform** | Cross-Platform Mobile Application

A comprehensive personal knowledge management system that combines document storage, semantic search, and AI-powered research workflows into a unified cross-platform application.

### Overview

Holocron is an intelligent knowledge base and research assistant that helps users store, organize, and retrieve information using advanced AI capabilities. The application features full-text and vector semantic search, multi-agent deep research workflows, content subscriptions, and a Model Context Protocol (MCP) server for seamless AI integration.

### Technical Architecture

#### Core Technologies
- **Frontend Framework**: React Native with Expo Router (file-based routing)
- **Backend-as-a-Service**: Convex (reactive database with built-in real-time)
- **Vector Search**: 1024-dimensional embeddings for semantic search
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **UI Components**: React Native Paper + custom primitives
- **AI Provider**: OpenAI-compatible API (Z.ai)
- **Language**: TypeScript (strict mode)

#### Key Architectural Decisions

**Convex Backend Migration**
Migrated from Supabase to Convex for simplified real-time patterns and improved developer experience:

**Benefits Achieved:**
- **30%+ code reduction** through automatic reactivity (eliminated 570+ lines of subscription management)
- **Type-safe API** generated directly from schema (zero runtime type errors)
- **Zero-config real-time** updates without manual subscription management
- **Unified client interface** for mobile and Python CLI
- **Better observability** with Convex dashboard and function logs

**Vector Search Architecture**
Holocron implements hybrid search combining full-text and vector semantic search:

```typescript
// Full-text search for exact matches
const ftsResults = useQuery(api.documents.search.fullTextSearch, {
  query: 'machine learning'
})

// Vector search for semantic understanding
const vectorResults = useQuery(api.documents.search.vectorSearch, {
  query: 'AI pattern recognition'
})

// Hybrid search with score blending (best results)
const hybridResults = useQuery(api.documents.search.hybridSearch, {
  query: 'deep learning',
  alpha: 0.5  // Balance between FTS and vector
})
```

**Multi-Agent Research System**
Deep research workflows orchestrate specialized agents for comprehensive analysis:

- **Planning Agent**: Decomposes queries into research tracks
- **Search Workers**: Parallel web and academic searches (arXiv, SSRN)
- **Analyst**: Evaluates source credibility and extracts findings
- **Devil's Advocate**: Adversarially challenges claims to reduce bias
- **Synthesizer**: Produces publication-quality reports with citations

**MCP Server Integration**
42 Model Context Protocol tools enable seamless AI integration:

```typescript
// Claude Code can directly query Holocron
mcp://holocron/hybrid_search(query: "React Native patterns")
mcp://holocron/get_document(documentId: "abc123")
mcp://holocron/start_assimilation(repositoryUrl: "https://github.com/user/repo")
```

#### Data Architecture

**Schema Overview** (58+ tables, 1300+ lines of type-safe schema)

**Core Domain:**
- `conversations`, `chatMessages` - Chat threads with message types (text, slash commands, progress, tool approvals)
- `documents` - Knowledge base with 1024-dim embeddings, full-text + vector search indexes
- `tasks` - Background job tracking with real-time progress updates

**Research & Analysis:**
- `researchSessions`, `deepResearchSessions` - Quick and deep research workflows
- `researchIterations`, `deepResearchIterations` - Iterative findings
- `citations` - Source attribution and references
- `assimilationSessions` - GitHub repository analysis with multi-iteration planning

**Content Subscriptions:**
- `subscriptionSources` - YouTube, newsletters, changelogs, Reddit feeds
- `subscriptionContent` - Fetched content with research status
- `subscriptionFilters` - Keyword whitelists, score thresholds, max age
- `whatsNewReports` - Daily AI-generated tech news briefings

**Business Intelligence:**
- `revenueValidationSessions` - Market sizing and competitive analysis
- `competitiveAnalysisSessions` - Feature comparison and positioning
- `improvementRequests` - Product feedback tracking with evidence
- `aiRoiSessions` - AI implementation ROI calculations

### Features

**Knowledge Management:**
- Store documents with automatic vector embedding
- Hybrid search (keyword + semantic) with score blending
- Share documents publicly via secure tokens
- Browse by category with filter rules

**Research Workflows:**
- Quick research: Single-pass web and academic searches
- Deep research: Multi-agent orchestration with iteration loops
- GitHub assimilation: Repository codebase analysis
- Creator transcripts: YouTube video extraction and indexing

**Content Subscriptions:**
- Subscribe to YouTube channels, newsletters, changelogs, Reddit
- Auto-fetch and queue new content for research
- Filter by keywords, relevance scores, and recency
- Daily "What's New" AI news briefings

**Business Analysis:**
- Revenue validation workflows with TAM/SAM/SOM analysis
- Competitive intelligence gathering
- Product improvement tracking with evidence capture
- AI ROI opportunity assessment

### Development Practices

**Quality Gates (All Blocking):**
1. **Type Checking**: `tsc --noEmit` - Zero type errors allowed
2. **Linting**: ESLint with React Native rules on staged files
3. **Testing**: Vitest suite with Convex testing utilities
4. **Pre-commit Hooks**: All three gates must pass before commit

**Code Organization:**
```
├── app/                    # Expo Router screens (file-based routing)
├── components/ui/          # Reusable UI primitives with co-located stories
├── convex/                 # Backend functions (queries, mutations, actions)
│   ├── schema.ts           # Type-safe database schema (1300+ lines)
│   ├── conversations/      # Chat CRUD operations
│   ├── documents/          # Document management + search
│   ├── research/           # Research workflow orchestration
│   └── chat/               # AI integration with tool calling
├── hooks/                  # Custom React hooks (no state syncing anti-patterns)
├── lib/                    # Utilities (logging, types, validation)
└── holocron-mcp/           # MCP server (42 tools, stdio interface)
```

**State Management Principles:**
- **Local UI state**: `useState` (as close to usage as possible)
- **Coordinated state**: `useReducer` (multiple changes per action)
- **Shared data**: Convex `useQuery`/`useMutation` (no prop drilling beyond 1 level)
- **NO state syncing anti-patterns**: Never use `useEffect` to sync query data into local state

**Theme System:**
- Semantic design tokens (no hardcoded colors, spacing, or typography)
- React Native Paper Text variants (titleLarge, bodyMedium, etc.)
- Interactive state colors (primary: { default, hover, pressed, disabled })
- Dark mode support via semantic token system

### Deployment & Operations

**Cross-Platform Builds:**
- iOS: EAS Build with TestFlight distribution
- Android: EAS Build with internal testing
- Web: Expo web support

**Environment Variables:**
```bash
EXPO_PUBLIC_CONVEX_URL="https://your-project.convex.cloud"
EXPO_PUBLIC_LLM_API_KEY="your-api-key"
LANGFUSE_SECRET_KEY="your-langfuse-key"  # Optional observability
```

**CI/CD Pipeline:**
- GitHub Actions triggers on release creation
- Quality gates (typecheck + tests) run before build
- Parallel iOS and Android builds on EAS
- Automatic deployment to testing platforms

### Project Outcomes

This project demonstrates expertise in:
- **Cross-platform development**: React Native with Expo Router
- **Reactive backend patterns**: Convex automatic reactivity
- **Vector search**: Hybrid full-text + semantic search architecture
- **Multi-agent orchestration**: Research workflows with specialized agents
- **Type safety**: TypeScript strict mode with schema-generated types
- **MCP integration**: 42 tools for AI agent interoperability
- **Real-time UX**: Background job tracking with live progress updates

### Technology Stack Summary

| Category | Technology |
|----------|-----------|
| Frontend | React Native + Expo Router |
| Backend | Convex (BaaS) |
| Search | Vector embeddings (1024-dim) + Full-text |
| AI | OpenAI-compatible API (Z.ai) |
| Styling | NativeWind (Tailwind) + React Native Paper |
| Language | TypeScript (strict mode) |
| Testing | Vitest + Convex testing utilities |
| CLI | Python CLI for database operations |
| Integration | Model Context Protocol (42 tools) |

---

*Looking for a developer who can build production-ready applications with modern architectures? [Let's talk.](mailto:hello@example.com)*

# Bargainer — Submission

## Why this suits WebMCP
Bargainer is built around WebMCP rather than adding a single demo button. Nine focused tools expose the complete seller workflow: inventory, pricing, bundles, offers, negotiation messages, logs, analytics, and the final approval action. Each tool has an agent-facing description, constrained JSON Schema, serializable output, and read-only annotations where appropriate.

## How it improves UX
A seller does not need to watch every marketplace tab or manually repeat price research. Their agent can monitor offers and negotiate in the shared state machine while the dashboard keeps the human in the loop. The live feed makes every decision legible, and the Tool Inspector provides immediate proof of what the agent can do.

## What humans + agents now do together
An agent can talk to buyer agents and work through concessions — something previously trapped behind brittle UI automation. The human remains the final authority: accepting an offer creates a pending deal, but only a recent click in the Deal Tray creates an approval token. The `approve_pending_deal` tool cannot bypass that gate.

## Implementation notes
- 100% client-side React + TypeScript + Zustand.
- Three deterministic buyer personas: Lowball Larry, Bundle Bella, and Flash Frank.
- Flash offers expire; open negotiations share one store with UI and tools.
- `AbortController` unregisters the tool set during React cleanup/HMR.
- Missing WebMCP is a supported fallback, not an error state.
- No credentials, personal data, backend, or external runtime APIs.

## Impact
Bargainer demonstrates a safer commerce pattern: delegate repetitive negotiation, preserve visibility, and require explicit human intent for irreversible outcomes.

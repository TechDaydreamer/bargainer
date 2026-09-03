# Bargainer

[![MIT License](https://img.shields.io/badge/license-MIT-06b6d4.svg)](LICENSE)

**Bargainer is an agent-powered resale desk where your AI negotiates with simulated buyer agents while you keep the final say.**

The lowercase `ai` in the `bargainer` wordmark is intentionally highlighted to make the agent-powered workflow visible at a glance.

## Why it matters

Clicking through marketplace screens is slow and fragile for agents. Bargainer presents a negotiation-centered bento desk: the live agent-to-agent feed is the centerpiece, inventory and the active offer summary sit beside it, and the full-width approval bar appears only when a human decision is required. WebMCP tools let an agent inspect inventory, reprice, bundle, negotiate, and report analytics. A human still makes the irreversible decision.

## Architecture

```text
ChatGPT / Chrome agent
          │ WebMCP (9 tools)
          ▼
┌──────────────────────────────┐
│ Bargainer desk + Inspector   │
│ search · filters · live feed │
└──────────────┬───────────────┘
               │ shared Zustand state
       ┌───────┴────────┐
       │                │
 buyer engine       human approval
 Larry/Bella/Frank  Deal Tray token
```

## Setup

```bash
npm install
npm run dev
npm run build
npm run preview
```

No backend, API keys, auth, personal data, or runtime network calls are required.

## WebMCP testing

- **ChatGPT in-app browser:** open the deployed HTTPS URL; the status pill becomes `● WebMCP connected` when the native API is available.
- **Chrome:** enable `chrome://flags/#enable-webmcp-testing`, restart Chrome, and open the HTTPS URL.
- Open **Inspect tools ↗** to discover and execute tools with editable JSON. The desk remains fully usable in local fallback mode when WebMCP is absent.

## Tools

| Tool                   | Read-only | Purpose                                                    |
| ---------------------- | --------: | ---------------------------------------------------------- |
| `get_inventory`        |       yes | List inventory and prices                                  |
| `set_price`            |        no | Reprice an item with a reason                              |
| `create_bundle`        |        no | Bundle 2+ items with 1–70% discount                        |
| `get_offers`           |       yes | Read open buyer offers                                     |
| `respond_to_offer`     |        no | Accept, reject, or counter; accept requires human approval |
| `send_message`         |        no | Message a simulated buyer persona                          |
| `get_negotiation_log`  |       yes | Read the full transcript                                   |
| `get_analytics`        |       yes | Earnings and reprice insights                              |
| `approve_pending_deal` |        no | Finalize only after a recent human click                   |

## Deploy to Render

Create a **Static Site** connected to this repository:

```text
Build command: npm install && npm run build
Publish directory: dist
```

Render provides the HTTPS context required for WebMCP. A static site does not need a paid instance; credits can be preserved for future backend work.

## License

MIT — see [LICENSE](LICENSE).

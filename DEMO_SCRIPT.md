# Bargainer demo (<3 minutes)

**0:00–0:15 — Hook**  
On screen: Bargainer dashboard and live feed. Narrate: “My agent just sold my sneakers while I watched — but it could not close the deal without me.”

**0:15–0:35 — Problem**  
Show inventory and feed. Explain that clicking through marketplace screens is slow and fragile for agents, especially when an offer expires or a buyer changes their mind.

**0:35–1:00 — Agent reprices**  
Open Tool Inspector. Run `get_inventory`, then `set_price` for the Air Max. Point out the inventory card and feed update. “The agent can act on structured commerce state, not pixels.”

**1:00–1:35 — Buyer agents negotiate**  
Show Lowball Larry, Bundle Bella, and Flash Frank offers. Call out Bella’s multi-item bundle and Frank’s urgent expiry treatment. Counter Bella from the offer card; narrate the buyer response and shared feed transcript.

**1:35–2:00 — Human gate**  
Accept an offer. It moves to Deal Tray as `pending_approval`. Click **Approve Deal**. Explain that `approve_pending_deal` returns an awaiting message until this click creates a 60-second approval token.

**2:00–2:25 — WebMCP proof**  
Open the Inspector and scroll through all nine tools: inventory, pricing, bundling, offers, responses, messages, log, analytics, and approval. Show the connected WebMCP status pill in a WebMCP-enabled browser.

**2:25–2:50 — Close**  
“Bargainer makes agent-to-agent commerce possible without removing the person from the decision. Agents negotiate; humans decide.”

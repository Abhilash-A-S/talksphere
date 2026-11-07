# TalkSphere V2 — architecture baseline

- Frontend: Angular, responsive standalone components
- Backend: NestJS modular monolith; REST + Socket.IO (future milestone)
- Persistent data: PostgreSQL + Prisma (planned; not yet connected)
- Ephemeral data: Redis guest sessions, matching, presence (planned; not yet connected)
- Authentication: Google OIDC for registered users (planned)
- Media: WebRTC with STUN/TURN and explicit call acceptance (planned)
- Guest: session-only text/audio; no permanent chat storage
- Registered: persistent messaging, audio/video, mutual friendships, reports and blocks
- Discovery: random/interest-based, optional gender preference, mutual eligibility checks
- 18+ platform: age assurance and jurisdiction-specific legal review required before launch
- Security: socket/event authorization, participant checks, rate limits, safe uploads, privacy and deletion workflows

## Milestone definition
The current starter only proves the Angular-to-NestJS HTTP connection. Infrastructure services are defined but not wired into backend modules. No feature should be described as operational until implemented and tested.

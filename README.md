# TalkSphere V2

New full-stack social communication platform. **V1 is preserved separately.**

## Milestone 1 — foundation

This starter includes an Angular application shell, NestJS health endpoint, a basic Jest test, and local PostgreSQL/Redis containers. **It does not yet implement chat, guest sessions, authentication, matching, Prisma integration, or calls.** Buttons for those features are intentionally disabled.

### Requirements
- Node.js 22 LTS or newer compatible with Angular 21; npm
- Docker Desktop (for PostgreSQL and Redis)

### Run locally
```bash
cp .env.example .env   # On Windows PowerShell: Copy-Item .env.example .env
# Edit .env with strong passwords. Keep DATABASE_URL credentials in sync.
docker compose up -d
npm install
npm run dev:backend
# In another terminal:
npm run dev:frontend
```

Frontend: http://localhost:4200  
Backend: http://localhost:3000/api/health

Check backend status on the frontend. `connected` means the API responded. This **does not** verify PostgreSQL or Redis connectivity yet.

### Verification
```bash
npm run test
npm run build
```

### Next milestone
- Prisma schema/migrations and database connection
- Redis-backed guest sessions with TTL
- Socket.IO authenticated guest chat and safe session cleanup
- Input validation, rate limiting, moderation and test coverage

See `docs/architecture.md`.

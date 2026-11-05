# Architecture

## Workspace boundaries

Lumio uses npm workspaces with one root lockfile. Applications live under `apps/*`; reusable packages live under `packages/*`. Each package is private to prevent accidental publication.

`apps/mobile` owns the React Native UI and Expo configuration. `apps/api` owns HTTP behavior and the Node.js process lifecycle. `packages/shared` owns framework-independent contracts. Shared code must not import application code, React Native, Fastify, or Node-specific APIs.

The API currently imports the shared health response as a type. The mobile app does not call the API yet. The apps can therefore start independently, and type-only imports do not require building shared code before API development.

## Mobile

The application uses the official blank TypeScript template's Expo SDK 58 dependency set. Expo registers the root component through `index.ts`. The app uses standard React Native components and Expo Go-compatible dependencies. Expo automatically configures Metro for npm workspaces; no custom resolver or native project folders are needed.

The welcome screen has no navigation, network calls, or business logic. `expo export` verifies production bundles for both native platforms. Device/simulator smoke checks remain necessary to verify native rendering and Expo Go compatibility; bundle export alone cannot establish this.

## API

`src/app.ts` constructs Fastify without opening a port, allowing tests to exercise real routing and serialization using `app.inject`. `src/server.ts` owns startup, logging, and graceful shutdown on SIGINT/SIGTERM. `src/config.ts` validates the port and reads optional host configuration.

`GET /health` returns HTTP 200 with JSON `{ "status": "ok" }`. A response schema constrains the wire format. This is a process liveness check, not a readiness check for future dependencies. Unknown routes return Fastify's default 404 response.

The API binds to loopback by default. It uses native ESM and compiles to `dist/`, which runs directly on Node.js. No database, authentication, AI provider, or deployment infrastructure is present.

## Shared contracts

The shared package initially exports only `HealthResponse`. Its tests check the exact type and reject missing or unsupported status values through TypeScript. There is no runtime helper solely to give this type-only package executable behavior.

Package exports expose source declarations for workspace type checking and compiled ESM for future runtime imports. Build shared code before API code. If shared runtime values are introduced for mobile, add and verify a Metro source export condition as part of that change.

## Tooling and validation

Strict TypeScript settings include unchecked index access and exact optional properties. Node packages extend the root configuration; mobile extends Expo's configuration and applies the same strict checks while retaining Expo's platform-specific defaults.

ESLint uses a flat configuration and React Hooks rules for mobile. Prettier owns formatting. Vitest runs API integration/configuration tests and shared contract tests; TypeScript checks the tests as well as application code.

GitHub Actions installs the committed lockfile with `npm ci`, then checks formatting, lint, types, tests, and all builds on Linux. The workflow has read-only repository permissions and cancels superseded runs. It does not publish or deploy artifacts.

## Configuration and future changes

No local environment file is required. Environment files, dependencies, generated native folders, and build output are ignored. Never put secrets in the mobile bundle, including Expo public environment variables.

Add abstractions when a concrete use case requires them. Curriculum modeling, persistence, authentication, AI, pronunciation services, observability infrastructure, and distribution require separate design and implementation work.

## Framework references

- [Expo monorepos](https://docs.expo.dev/guides/monorepos/)
- [Expo Go](https://expo.dev/go)
- [Fastify testing](https://fastify.dev/docs/latest/Guides/Testing/)
- [TypeScript strictness](https://www.typescriptlang.org/tsconfig/#strict)

## Dependency audit baseline

At initialization, `npm audit` reports 14 moderate findings in the Expo and lint-tool dependency trees, rooted in `glob` and `minimatch`. Compatible automatic updates do not resolve them. npm proposes major framework downgrades; the skeleton retains the supported Expo SDK and ESLint versions instead of forcing unverified transitive major overrides. Recheck upstream fixes during dependency maintenance. The audit is informational and is not configured as a CI gate.

# Lumio

Lumio is a mobile-first, AI-powered language-learning application focused on real conversational fluency. The initial learning path will be German, starting at CEFR A1.1, with additional languages planned later.

This repository currently contains the project skeleton: an Expo welcome screen, a Fastify health endpoint, a shared TypeScript contract, and development tooling. Learning features are not implemented yet.

## Prerequisites

- Node.js 22.22.3 (use `nvm install && nvm use` with the included `.nvmrc`).
- npm 11 or 12. CI uses the npm version bundled with the pinned Node release.
- Expo Go compatible with Expo SDK 58 on iOS or Android. See [Expo Go downloads](https://expo.dev/go) for current platform availability and matching versions.
- Optional: Xcode on macOS for the iOS simulator, or Android Studio for an Android emulator.

## Setup

```sh
git clone https://github.com/susanwere/lumio.git
cd lumio
nvm install
nvm use
npm ci
```

Run commands from the repository root. No environment files, database, credentials, or API keys are required.

## Run the mobile app

```sh
npm run dev:mobile
```

Scan the QR code with the iOS Camera app or Expo Go on Android. The computer and device should be on the same network. From the Expo terminal, press `i` for an installed iOS simulator or `a` for an Android emulator. The welcome screen runs independently of the API.

If Expo Go reports an SDK mismatch, install the SDK 58-compatible version using the official download page. For Metro cache issues, run `npm run dev:mobile -- --clear`.

## Run the API

```sh
npm run dev:api
curl http://127.0.0.1:3000/health
# {"status":"ok"}
```

The API defaults to `127.0.0.1:3000`. Set `HOST` and `PORT` in your shell to override them, for example `HOST=0.0.0.0 PORT=4000 npm run dev:api`. Binding to `0.0.0.0` makes the API reachable from other devices on your network. The API runs independently of the mobile app.

To run compiled API code:

```sh
npm run build --workspace @lumio/shared
npm run build --workspace @lumio/api
npm start --workspace @lumio/api
```

## Commands

| Command                | Purpose                                                    |
| ---------------------- | ---------------------------------------------------------- |
| `npm run dev:mobile`   | Start Expo Go development server                           |
| `npm run dev:api`      | Start API with automatic reload                            |
| `npm run lint`         | Lint JavaScript and TypeScript across the repository       |
| `npm run format`       | Format source, configuration, and documentation            |
| `npm run format:check` | Check formatting without modifying files                   |
| `npm run typecheck`    | Strictly check every workspace, including API/shared tests |
| `npm test`             | Run API and shared contract tests with Vitest              |
| `npm run test:watch`   | Run Vitest in watch mode                                   |
| `npm run build`        | Compile shared/API code and export iOS and Android bundles |
| `npm run check`        | Run all CI checks locally                                  |

The mobile build exports production JavaScript/assets; it does not create an IPA or APK. Native binary builds and distribution are outside this skeleton. There are no mobile UI tests yet; check the welcome screen in Expo Go on both platforms when changing it.

## Repository structure

```text
apps/
  api/                 Fastify app, server entry point, and endpoint/config tests
  mobile/              Expo application for iOS and Android
packages/
  shared/              Framework-independent cross-platform TypeScript contracts
docs/
  product.md           Product scope and initial learning direction
  architecture.md      Boundaries, tooling, and technical decisions
  roadmap.md           Phased delivery plan and exit criteria
.github/workflows/     Pull request and main branch CI
```

Dependencies are managed with npm workspaces and one root lockfile. Add dependencies to the workspace that uses them, for example `npm install <package> --workspace @lumio/api`. Use `npx expo install <package>` from `apps/mobile` for Expo-compatible native dependencies, then commit the root lockfile.

CI runs formatting, linting, type checking, tests, and builds for pull requests targeting `main` and pushes to `main`.

## Documentation

- [Product direction](docs/product.md)
- [Architecture](docs/architecture.md)
- [Phased roadmap](docs/roadmap.md)

## License

[Apache License 2.0](LICENSE). The original license is preserved.

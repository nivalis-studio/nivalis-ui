# AGENTS.md

A concise guide for AI agents and contributors working in this repository.

## Stack

- Next.js 16 (App Router), React 19, TypeScript (strict)
- Tailwind CSS v4 via `@tailwindcss/postcss` and `src/styles/globals.css`
- Biome for lint/format, Lefthook git hooks, Commitlint
- Turborepo caching, pnpm 10, Node 22

## Getting Started

- Install: `pnpm install`
- Dev: `pnpm dev`
- Typecheck: `pnpm ts`
- Lint: `pnpm lint` (or `pnpm lint:fix`)
- Build/Run: `pnpm build && pnpm start`

## Styling

- Tailwind v4 is configured in CSS. Primary entry: `src/styles/globals.css`.
- Use the `cn` helper from `@/lib/classnames` to merge classes.
- Prefer Tailwind utilities and CSS variables over inline styles.
- Dark mode uses the `.dark` class. `layout.tsx` sets initial classes.
- Fonts: Inter + local Geist Sans/Mono via `@/fonts`.

## Environment Variables

- Define and validate env in `src/env.ts` using Zod.
- Mirror any new variables in `turbo.json` under `tasks.build.env`.
- Client exposure requires the `NEXT_PUBLIC_` prefix and must be present in the client schema.
- On invalid env, the app throws early to avoid undefined behavior.

## Server vs Client

- React Compiler is enabled. Prefer idiomatic React and pure components.
- Mark client components with `'use client'` only when necessary.
- Use `server-only` for server-only modules when appropriate.

## Performance & Build

- Turborepo caches `.next/**` and tracks env inputs from `turbo.json`.
- Tailwind v4 compiles from CSS directives; `tailwind.config.ts` is minimal by design.

## Common Tasks

- Add an API route: create `route.ts` under `src/app/api/<name>` and export HTTP methods (`GET`, `POST`, ...).
- Add a page: create a segment folder in `src/app` with `page.tsx` and optional `layout.tsx`.
- Add a component: place in `src/components`, import via `@/components/*`. For shadcn, follow `components.json` aliases.
- Add an env var: update `src/env.ts` (schema), add to `turbo.json` env list, and pass through `process.env` where needed.

## Guardrails for Agents

- Prefer minimal, surgical changes aligned with existing patterns.
- Do not add dependencies without strong justification; ask for approval first.
- Do not change Node/pnpm versions or tooling without confirmation.
- Keep changes within `src/` unless config/docs require edits.
- Run `pnpm ts` and `pnpm lint` before handing off.
- If adding new images/fonts, ensure they’re committed and referenced correctly.
- Avoid creating new global state without design review; prefer local component state or server actions.

## Troubleshooting

- Module resolution: remember baseUrl is `src` with `@/*` alias.
- Env errors: ensure variables exist and are added to both schema and `turbo.json`.
- Styling not applied: confirm `globals.css` is imported in `src/app/layout.tsx`.

## Linting, Formatting, Commits

- Lint/format with Biome: `pnpm lint` or `pnpm lint:fix`.
- Git hooks via Lefthook auto-fix staged files and enforce commit messages.
- Use Conventional Commits (Commitlint is configured).

## Project Conventions

- Module format: ESM (`"type": "module"`). Prefer `import`/`export`.
- Paths: Base URL is `src`. Use `@/` alias (e.g. `@/lib/classnames`).
- Routing: Use App Router under `src/app`. Keep routes colocated by segment folders.
- Errors: `src/app/error.tsx` and `src/app/not-found.tsx` are global pages.
- Metadata: Set via `export const metadata` in layouts/pages.

**For Agents**

- Write code that passes this Biome config on first run. Use `biome check --write` to auto-fix.

**Imports/Exports**

- Use `node:` for Node builtins (e.g., `node:fs`) and `node:assert/strict`.
- Avoid barrel files and namespace imports. Prefer named imports.
- Use type-only imports/exports for types. Don’t export an imported binding; re-export from source.

**TypeScript**

- Prefer `type` aliases over `interface`; avoid `enum` and `namespace`.
- Use `Array<T>` over `T[]`.
- Don’t use non-null assertions or constructor parameter properties.
- Don’t annotate obvious types; lift magic numbers to named constants when needed.

**Code Style**

- Prefer `const`; avoid `.forEach()` in favor of `for...of`/`while`.
- Avoid nested ternaries and negation-else; use template strings.
- Use object spread and assignment shorthand; prefer optional chaining.
- Keep `switch` default last; avoid fallthrough.

**Correctness**

- No floating promises; use `await` in async functions when needed.
- Don’t assign to globals; don’t re-declare; use `globalThis` over `global`/`self`.
- React: no nested component defs; don’t assign to props; provide stable `key` in lists; no children on void elements.
- Hooks: call at top level and specify dependencies.

**React/Next**

- Use function components. Don’t render `<head>` directly.
- Use framework image components instead of raw `<img>` in supported frameworks.
- Avoid async client components in Next.

**Security**

- Add `rel="noopener"` to `target="_blank"` links.
- Don’t use `dangerouslySetInnerHTML`.

**Suspicious**

- `console` is limited to `warn|error|debug` (warned). No bitwise ops, `with`, or `var`.
- No import cycles, no import assignment, and don’t reassign imported bindings.

**Data/Config Files**

- JSON: tabs; width 2; no trailing commas. Comments/trailing commas allowed only in select config files (`package.json`, `tsconfig*.json`, `.vscode/*.json`, `.github/**/*.json`).
- Filenames: ASCII kebab-case (warn). Route files are exempt.

**Overrides**

- Tests: console and `any` allowed; cognitive complexity off.
- Scripts/binaries: console allowed; `process.env` allowed.
- Stories: unused imports/vars allowed. Decls (`*.d.ts`): unused/undeclared allowed.
- Generated/minified/docs/env: linter/formatter disabled.

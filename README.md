# Host App (React + Vite + Module Federation Runtime)

This project is the **host** in a microfrontend architecture built with:

- React 18+
- Vite
- @module-federation/enhanced/runtime
- Tailwind CSS v4 (optional)

Remotes are registered dynamically at runtime using `@module-federation/enhanced/runtime`.

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the dev server:

```bash
pnpm dev
```

## Runtime Remote Configuration

Define your remotes in a module like `remotes.ts`:

```ts
export const getRemoteDefinitions = () => ({
  MFE_1: {
    url: "https://mfe-remote-1.netlify.app/remoteEntry.js",
  },
});
```

And load them dynamically in your runtime plugin setup:

```ts
import type { ModuleFederationRuntimePlugin } from "@module-federation/enhanced/runtime";

const runtimePlugin: () => ModuleFederationRuntimePlugin = () => ({
  name: "update-remote-runtime-plugin",
  remotes: getRemoteDefinitions(),
});
```

## Netlify Deployment

If using React Router or any SPA routing, include a `_redirects` file in `public/` or output root:

```
/*    /index.html   200
```

## TypeScript Support for Remotes

You must declare the modules you import from remote apps:

```ts
declare module "MFE_1/Button" {
  import { FC } from "react";
  const Button: FC<{ label: string }>;
  export default Button;
}
```

## TODOs

- [ ] Extract common UI components and shared logic into a shared library.
- [ ] Tailwind v4 is JIT-only and not friendly across multiple builds — consider consolidating common styles.
- [ ] Manage shared dependencies carefully (`react`, `react-dom`, etc.) to avoid runtime mismatches.
- [ ] Add loading/error boundaries for remote components.
- [ ] Automate remote registration per environment (dev/staging/prod).

## Notes

- Remotes are loaded at runtime; avoid hardcoded imports if the remote isn't available.
- Ensure each remote is deployed with CORS headers if needed.
- You can use wildcard module declarations (`declare module 'MFE_1/*'`) during initial development, but should replace them with explicit types later.

## License

MIT

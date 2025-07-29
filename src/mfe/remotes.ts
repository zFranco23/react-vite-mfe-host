import type { RemoteDefinition } from "../types";

export const REMOTES_DEFINITION: RemoteDefinition[] = [
  {
    name: "MFE_1",
    scopes: {
      local: "http://localhost:3001/remoteEntry.js",
      development:
        "https://react-vite-example-remote-1.netlify.app/remoteEntry.js",
      production:
        "https://react-vite-example-remote-1.netlify.app/remoteEntry.js",
    },
  },
];

import type { RemoteDefinition } from "../types";

export const REMOTES_DEFINITION: RemoteDefinition[] = [
  {
    name: "MFE_1",
    scopes: {
      local: "http://localhost:3001/remoteEntry.js",
      development: "http://localhost:3001/remoteEntry.js",
      production: "http://localhost:3001/remoteEntry.js",
    },
  },
];

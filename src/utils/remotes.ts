import { REMOTES_DEFINITION } from "../mfe/remotes";
import type { RemoteDefinitionScope } from "../types";

export const getRemoteDefinitions = () => {
  return REMOTES_DEFINITION;
};

export const getRemoteScopeFromEnv = (): RemoteDefinitionScope => {
  const mode = process.env.NODE_ENV ?? "local";
  switch (mode) {
    case "development":
      return "development";
    case "production":
      return "production";
    default:
      return "local";
  }
};

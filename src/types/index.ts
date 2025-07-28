export interface RemoteDefinition {
  name: string;
  scopes: Record<RemoteDefinitionScope, string>;
}

export type RemoteDefinitionScope = "local" | "development" | "production";

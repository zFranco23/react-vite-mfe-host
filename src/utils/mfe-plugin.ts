import type { ModuleFederationRuntimePlugin } from "@module-federation/enhanced/runtime";
import { getRemoteDefinitions, getRemoteScopeFromEnv } from "./remotes";

const runtimePlugin: () => ModuleFederationRuntimePlugin = function () {
  return {
    name: "update-remote-runtime-plugin",
    beforeInit(args) {
      const scope = getRemoteScopeFromEnv();
      const remoteDefinitions = getRemoteDefinitions();

      const remotes = args.userOptions.remotes.map((remote) => {
        const predefinedRemote = remoteDefinitions.find(
          (remoteDefinition) => remoteDefinition.name === remote.name
        );

        if (!predefinedRemote) {
          throw new Error(
            `Remote ${remote.name} not found in remote definitions`
          );
        }

        return {
          ...remote,
          entry: predefinedRemote.scopes[scope],
        };
      });

      args.userOptions.remotes = remotes;
      return args;
    },
  };
};

export default runtimePlugin;

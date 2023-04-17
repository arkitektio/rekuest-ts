import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import React, { useState } from "react";
import { createRekuestClient } from "./client";
import { RekuestContext } from "./RekuestContext";
import { RekuestClient, RekuestConfig } from "./types";

export type RekuestProps = {
  children: React.ReactNode;
  clientCreator?: (
    config: RekuestConfig
  ) => ApolloClient<NormalizedCacheObject>;
};

export const RekuestProvider: React.FC<RekuestProps> = ({
  children,
  clientCreator = createRekuestClient,
}) => {
  const [client, setClient] = useState<
    ApolloClient<NormalizedCacheObject> | undefined
  >();
  const [config, setConfig] = useState<RekuestConfig>();

  const configure = (config: RekuestConfig) => {
    setConfig(config);
    setClient(clientCreator(config));
  };

  return (
    <RekuestContext.Provider
      value={{
        client: client,
        configure: configure,
        config: config,
      }}
    >
      {children}
    </RekuestContext.Provider>
  );
};

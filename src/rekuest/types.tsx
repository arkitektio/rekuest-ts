import {
  ApolloClient,
  NormalizedCacheObject,
  PossibleTypesMap,
} from "@apollo/client";

export type RekuestConfig = {
  endpointUrl: string;
  wsEndpointUrl: string;
  secure: boolean;
  retrieveToken: () => string;
  possibleTypes?: PossibleTypesMap;
};

export type RekuestClient = ApolloClient<NormalizedCacheObject>;

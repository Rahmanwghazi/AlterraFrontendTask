import {
  ApolloClient,
  InMemoryCache,
  split,
  HttpLink
} from "@apollo/client";
import {
  WebSocketLink
} from "@apollo/client/link/ws";
import {
  getMainDefinition
} from "@apollo/client/utilities";

const wsLink = new WebSocketLink({
  uri: "wss://query-apollo-task.hasura.app/v1/graphql",
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        "x-hasura-admin-secret": "HFy25ytB172xyWFC7Fkihq2Ln8FSaU74LIVO9n9DlOQsbO4jD1st1q0fzDHxfKBw",
      },
    },
  },
});

const httpLink = new HttpLink({
  uri: "https://query-apollo-task.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret": "HFy25ytB172xyWFC7Fkihq2Ln8FSaU74LIVO9n9DlOQsbO4jD1st1q0fzDHxfKBw",
  },
});

const splitLink = split(
  ({
    query
  }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
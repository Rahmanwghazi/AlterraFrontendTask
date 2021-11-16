import {
    ApolloClient,
    InMemoryCache,
} from "@apollo/client";
  
  const client = new ApolloClient({
    uri: "https://query-apollo-task.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
    headers: {
        "x-hasura-admin-secret" : "HFy25ytB172xyWFC7Fkihq2Ln8FSaU74LIVO9n9DlOQsbO4jD1st1q0fzDHxfKBw"
    }
  });

  export default client
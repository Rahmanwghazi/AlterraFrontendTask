import {
    ApolloClient,
    InMemoryCache,
} from "@apollo/client";
  
  const client = new ApolloClient({
    uri: "https://apollo-query-wafiq.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
    headers: {
        "x-hasura-admin-secret" : "2LlIWjZPZ3wTtkeBqVyJQlV7ikV55HiyzxgxcydDRJ4R0guykVLxLXJGUOEExLks"
    }
  });

  export default client
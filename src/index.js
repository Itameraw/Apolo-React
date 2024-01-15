import { React } from "react";
import * as ReactDOM from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import App from "./App";
const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: cache,
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

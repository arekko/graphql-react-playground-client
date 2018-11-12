import React, { Component } from "react";
import Booklist from "./components/BookList";
import AddBook from "./components/AddBook";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Reading list</h1>
          <Booklist />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;


import graphql from 'graphql';
import express from 'express';
import gql from 'graphql-tag';
import * as bodyParser from 'body-parser';
const { ApolloServer  } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        hello: String
    }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

function main() {
    let app = express();
    // app.

    let server = new ApolloServer({typeDefs, resolvers});
    server.applyMiddleware({app});
    app.listen(8080);
    // app.use("/graphql", bodyParser.json(), graphqlExpress);
}
main();
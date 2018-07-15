

import graphql from 'graphql';
import express from 'express';
import gql from 'graphql-tag';
import { schemaItems } from './todo_list_graphql_schema';
import { query } from './todo_list_graphql_query';

const { ApolloServer } = require('apollo-server-express');

function main() {
    let app = express();
    // app.

    let server = new ApolloServer({typeDefs: schemaItems, resolvers: query});
    server.applyMiddleware({app});
    app.listen(8080);
    // app.use("/graphql", bodyParser.json(), graphqlExpress);
}
main();
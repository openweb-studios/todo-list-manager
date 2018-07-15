"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_list_graphql_schema_1 = require("./todo_list_graphql_schema");
const todo_list_graphql_query_1 = require("./todo_list_graphql_query");
const { ApolloServer } = require('apollo-server-express');
function main() {
    let app = express_1.default();
    // app.
    let server = new ApolloServer({ typeDefs: todo_list_graphql_schema_1.schemaItems, resolvers: todo_list_graphql_query_1.query });
    server.applyMiddleware({ app });
    app.listen(8080);
    // app.use("/graphql", bodyParser.json(), graphqlExpress);
}
main();
